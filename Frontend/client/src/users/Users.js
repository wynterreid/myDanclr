import axios from 'axios';
import React, {Component} from 'react';
import Header from '../Homepage/header';

class UserProfile extends Component {
  constructor(){
    super()
      this.state = {
        allUsersPost: []
      }
  }

  componentDidMount() {
    this.UsersPost();
  }

  UsersPost = () => {

    let username = this.props.match.params.username
    axios.get(`/posts/username/${username}`)
    .then(res => {
      this.setState({
        allUsersPost: res.data.data
      })
    })
  }

  showUserPost = () => {
    if (!this.state.allUsersPost) {return null}
    let userPost = this.state.allUsersPost.map((post) => {
      return(
        <div className="Timeline">

      <img className="profilePic" src={post.profile_pic} alt="" height="200" width="200"/>
          <div className="img">
        {post.img_url === null ? "" :
        <img className="imgPost"src={post.img_url} alt="" height="325" width="400"/> }
        </div>
          <div className="postContent">
        <h3 className="caption"> {post.post_content} </h3>
        </div>
        </div>
      )
    })
    return <div>{userPost}</div>
  }

  render() {

    return (
      <>
      <Header/>
      <h1>{this.props.match.params.username}</h1>
      {this.showUserPost()}
      </>
    )
  }
}

export default UserProfile;
