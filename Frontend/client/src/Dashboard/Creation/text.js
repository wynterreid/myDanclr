import React, {Component} from "react";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom';
import Dashboard from '../dashboard'

class Text extends Component {
  constructor(){
      super()
        this.state = {
          text: '',
          submitted: false
        }
      }

handleChange = (e) => {
  e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

newPost = async e => {
  e.preventDefault();
  const { text } = this.state;
  await axios.post('/posts/new/text', {Post_Content: text});
  this.setState({
    submitted: true
  })
  }

  render(){
    if (this.state.submitted) {
      return <Redirect to = "/dashboard" component={Dashboard}/>
    }
    return (
      <div className="CreateText">
      <form onSubmit={this.newPost}>
      <div>
      <input className="textInput" onChange={this.handleChange} type="text" name="text" value={this.state.text}/>
      </div>
      <div className="MakeOrBreak">
      <div>
      <Link to='./dashboard'><button className="CloseButton">Close</button></Link>
      </div>
      <div>
      <button className="sumbitButton" type="submit">Post</button>
      </div>
      </div>
      </form>
      </div>

    )}
}

export default Text ;
