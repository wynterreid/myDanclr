const passport = require("passport");
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/danclr";
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, {username:user.username, id: user.id, profile_pic:user.profile_pic});
  });

  passport.deserializeUser((user, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: user.username
    })
      .then(user => {
        done(null, {username:user.username, id: user.id, profile_pic:user.profile_pic});
      })
      .catch(err => {
        done(err, null);
      });
  });
};
