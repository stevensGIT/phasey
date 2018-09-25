/*global FB*/
import React, { Component } from 'react';
import './UserData.css';

class UserData extends Component {

  render(){
    return (
      <div className="UserData">
      <div class="container">

      <div id="welcomeMsg" style={{display: 'none'}} class="well">
        <p id="welcomeMsg">Hi</p> <p>{this.props.userData.firstName + ' ' + this.props.userData.lastName}</p>


      </div>
      </div>
      </div>
    );
  }

}

export default UserData;
