const express = require('express');
const router = express.Router();
const {getAllUsers,getOneUser,createUser, updateUser, deleteUser, isLoggedIn, loginUser, logoutUser} = require('../db/queries/users.js')
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");


router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/isloggedin', isLoggedIn)
router.post('/logout', logoutUser)
router.post('/new', createUser)
router.post('/login', passport.authenticate('local', {}), loginUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)



module.exports = router;
