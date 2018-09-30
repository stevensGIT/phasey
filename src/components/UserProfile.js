/*global FB*/
import React, { Component } from 'react';
import UserData from './UserData';
import '../UserProfile.css';

class UserProfile extends Component {

  state = {
    firstName : '',
    lastName : '',
    loginStatus: '',
    avatar: ''
  }

  login = () => {
    FB.login((response) => {
      this.handleLogin(response);
      this.setState({
        loginStatus: response.status
      })
    });
  }

  logout = () => {
    FB.logout((response) => {
      this.handleLogin(response);
      this.setState({
        loginStatus: response.status
      })
    })
  }

  handleLogin(response){
    var cryptoComponent = document.getElementById('Crypto');
    var welcomeMsg = document.getElementById('welcomeMsg');
    if (response.status === 'connected'){
      cryptoComponent.removeAttribute('style');
      welcomeMsg.removeAttribute('style');
      FB.api('/me?fields=first_name,last_name,picture.width(100).height(100)', (response) => {
        console.log(response);
        this.setState({
          firstName: response.first_name,
          lastName: response.last_name,
          avatar: response.picture.data.url
        })
      })
    } else {
      cryptoComponent.setAttribute('style', 'display: none');
      welcomeMsg.setAttribute('style', 'display: none');
      this.setState({
        loginStatus: '',
        firstName : '',
        lastName: '',
        avatar: ''
      })
    }

  }

  render(){
    return (
      <div className="UserProfile">
      <UserData userData={this.state} />
      <div class="container">
      <div class="card">
      <div class="card-header">Authenticate</div>
      <div class="card-body">
      <div class="row">
      <div class="col-md-6"><button class="btn btn-block" id="login" onClick={this.login} >Log In</button></div>
      <div class="col-md-6"><button class="btn btn-block" id="logout" onClick={this.logout}>Log Out</button></div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default UserProfile;
