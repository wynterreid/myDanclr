import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom';
import Dashboard from '../dashboard'

class Photo extends Component {
  constructor(){
      super()
        this.state = {
          submitted: false
        }
      }

handleChange = (e) => {
  e.preventDefault()
    this.setState({
       [e.target.name]: e.target.value
    })
  }


newPost = async e => {
  e.preventDefault();
  const { photo, caption } = this.state;
  await axios.post('/posts/new/photo', {img_url: photo, Post_Content: caption });
  this.setState({
    submitted: true
  })
  }

  render(){

    if (this.state.submitted) {
      return <Redirect to = "/dashboard" component={Dashboard}/>
    }
    return (
      <>
      <form onSubmit={this.newPost}>
      <div className="CreatePhoto">
      <input onChange={this.handleChange} className="photoInput" type="text" name="photo" placeholder="Insert photo address"value={this.state.photo}/>
      <input onChange={this.handleChange} className="captionInput" type="text" name="caption" placeholder="Insert Caption"value={this.state.caption}/>
      <div className="MakeOrBreak">
        <Link to='./dashboard'><button className="CloseButton">Close</button></Link>
        <button className="sumbitButton" type="submit">Post</button>
      </div>
      </div>
      </form>
      </>
    )}
}

export default Photo ;
