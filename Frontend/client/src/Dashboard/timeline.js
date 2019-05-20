import React, { Component } from "react";
import axios from "axios";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      allPost: []
    };
  }

  componentDidMount() {
    this.getAllPost();
  }

  getAllPost = () => {
    axios.get("/posts/userInfo").then(res => {
      this.setState({
        allPost: res.data.data
      });
    });
  };

  deletePost = e => {
    axios.delete(`/posts/${e.target.id}`).then(() => {
      this.getAllPost();
    });
  };

  showPost = () => {
    if (!this.state.allPost) {
      return null;
    }
    let singlePost = this.state.allPost.map(post => {
      return (
        <div className="Timeline">
          <div className="profile">
            <img
              className="profilePic"
              src={post.profile_pic}
              alt=""
              height="75"
              width="75"
            />
          </div>
          <div className="user">
            <a href={post.username}>
              <h2 className="username"> Posted by:{post.username} </h2>{" "}
            </a>
          </div>
          <button
            className="deletingButton"
            onClick={this.deletePost}
            id={post.id}
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/controls-and-navigation-arrows-1/24/21-512.png"
              alt=""
              height="40"
              width="40"
              id={post.id}
              name="delete"
            />{" "}
          </button>
          <div className="img">
            {post.img_url === null ? (
              ""
            ) : (
              <img
                className="imgPost"
                src={post.img_url}
                alt=""
                height="325"
                width="400"
              />
            )}
            <div className="post_content">
              <h3> {post.post_content} </h3>
            </div>
          </div>
        </div>
      );
    });
    return <div className="singlePost">{singlePost}</div>;
  };

  render() {
    return <>{this.showPost()}</>;
  }
}

export default Timeline;
