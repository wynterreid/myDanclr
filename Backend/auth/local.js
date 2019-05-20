const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/danclr";
const db = pgp(connectionString);

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, {username:user.username, id: user.id, profile_pic:user.profile_pic});
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
