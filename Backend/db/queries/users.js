const { db } = require("./connections");
const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getOneUser = (req, res, next) => {
  let userId = Number(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", [userId])
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.none(
    "INSERT INTO users (username, password, email, profile_pic) VALUES (${username}, ${password}, ${email}, ${profile_pic})",
    { username: req.body.username, password: hash, email: req.body.email , profile_pic:req.body.profile_pic}
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: err
      });
    });
};

const updateUser = (req, res, next) => {
  db.none(
    "UPDATE users SET username=${username}, email=${email}, password=${password}, Profile_Pic=${Profile_Pic} WHERE id=${id}",
    {
      id: Number(req.params.id),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      Profile_Pic: req.body.Profile_Pic
    }
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "user has been updated"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteUser = (req, res, next) => {
  let userId = Number(req.params.id);
  db.none("DELETE FROM users WHERE id=$1", [userId])
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "user has been deleted"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
};

const loginUser = (req, res) => {
  console.log("something cool");
  res.json(req.user);
};

function isLoggedIn(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ username: null });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
