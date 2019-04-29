/* 
  Class that contain the Login information of the web app.
*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { login } from '../components/userFunctions';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      message: '',


      //Test variables 
      send_info: false,
      send_message: ''
    }
  }
  /* 
    Function that manage the change of states
  */
  usernameChange = (e) => {
    this.setState ({
      username: e.target.value,
    })
  }

  passwordChange = (e) => {
    this.setState ({
      password: e.target.value,
    })
  }

  popshow() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  /* 
    Function that manage the submition 
  */
  onSubmit = (e) => {

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // Test variables
    this.setState({
      send_info: true,
      send_message: "Sended"
    })

    if(this.state.username.length > 0 && this.state.password.length > 0) {
      login(user).then(res => {
        if(!res.error) {
          this.props.history.push('/cellar')
        }
        else {
          this.setState({
            message: res["error"]
          })
        }
      })
    }
    else {
      this.setState({
        message: "Invalid username or password"
      })
    }
  }

  render() {
    return (
      <div className="data_form_wrapper"> 

        <form className="data_form">

          <h2 className="title_form">Login</h2>

          <label className="label_input">Username</label>
          <input 
            className="form_input" 
            type="text" 
            name="username" 
            autoCorrect="off" 
            autoCapitalize="off" 
            spellCheck="off"
            onChange={e => this.usernameChange(e)}
            value={this.state.username}/>

          <label className="label_input">Password</label>
          <input 
            className="form_input" 
            type="password" 
            name="password" 
            onChange={e => this.passwordChange(e)}
            value={this.state.password}/>

          <button 
            className="button_submit" 
            type="button" 
            onClick={e => this.onSubmit(e)}>
            Login
          </button>
          
        </form>

        <div className="popup_l">
          <span className="popuptext" id="myPopup">{this.state.message}</span>
        </div> 

        <div className="connect_account">
          <p>Do you need an account?</p>

          <Link to="/register" className="button_link">Create an account</Link> 

        </div> 
        
      </div>
    );
  }
}

export default Login;
