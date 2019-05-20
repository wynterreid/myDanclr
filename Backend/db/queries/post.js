const { db } = require("./connections");

const createTextPost = (req , res, next) => {
  req.body.user_Id = req.user.id
  db.none('INSERT INTO post(Post_Content, user_Id) VALUES(${Post_Content}, ${user_Id})', req.body)
  .then(() => {
    res.status(200).json({
      message: "success"
    });
  })
  .catch(err => {
    return next(err);
  });
}

const createPhotoPost = (req , res, next) => {
  req.body.user_Id = req.user.id
  db.none('INSERT INTO post(Post_Content, user_Id, img_url) VALUES(${Post_Content}, ${user_Id}, ${img_url})', req.body)
  .then(() => {
    res.status(200).json({
      message: "success"
    });
  })
  .catch(err => {
    console.log(err)
    return next(err);
  });
}

const getUserInfoForPost = (req, res, next) => {
  db.any('SELECT * FROM users JOIN post ON post.user_id=users.id ORDER BY Time_Stamp desc')
  .then(data => {
    res.status(200).json({
      data: data
    });
  })
  .catch(err => {
    return next(err);
  });
};



const getAllpost = (req, res, next) => {
  db.any("SELECT * FROM post ORDER BY Time_Stamp desc")
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getOnePost = (req, res, next) => {
  let postId = Number(req.params.id);
  db.one("SELECT * FROM post WHERE id=$1", [postId])
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const updatePost = (req, res, next) => {
  db.none(
    "UPDATE post SET Post_Content=${Post_Content} WHERE id=${id}",
    {
      Post_Content: req.body.Post_Content,
      id: parseInt(req.params.id)
    }
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "post has been updated"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getUserPosts = (req, res, next) => {
const user_username = req.params.id
db.any(
  'SELECT * FROM users JOIN post ON post.user_id = users.id WHERE users.username=$1', user_username)
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'got user posts'
    });
  })
  .catch(err => {
    console.log(req.params);
    next(err);
  });
};

const deletePosts = (req, res, next) => {
 let postsId = parseInt(req.params.id)
 db.none('DELETE FROM post WHERE id=$1', postsId)
   .then(() => {
     res.status(200).json({
       message: 'You have deleted a post!'
     })
   })
   .catch(err => {
     return next(err)
   })
}

module.exports = {
  createTextPost,
  createPhotoPost,
  getAllpost,
  getOnePost,
  updatePost,
  getUserInfoForPost,
  getUserPosts,
  deletePosts
}
