const express = require('express');
const router = express.Router();
const {createTextPost, createPhotoPost, getAllpost, getOnePost, updatePost, getUserInfoForPost, getUserPosts, deletePosts} = require('../db/queries/post.js')


router.get('/', getAllpost)
router.get('/userInfo', getUserInfoForPost)
router.get('/username/:id', getUserPosts)
router.get('/:id', getOnePost)
router.post('/new/text', createTextPost)
router.post('/new/photo', createPhotoPost)
router.delete('/:id', deletePosts)



module.exports = router;
