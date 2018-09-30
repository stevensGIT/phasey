/*global FB*/
import React, { Component } from 'react';
import '../UserData.css';

class UserData extends Component {

  render(){
    return (
      <div className="UserData">
      <div class="container">
      <div class="card" role="alert">
        <div class="card-header">
        <div class="row">
          {this.props.userData.avatar ?
          <div class="col-md-6">
          <img id="avatar" src={this.props.userData.avatar}></img>
          </div>
          : <p id="loginCheck" class="alert alert-info btn btn-block">Please login to gain access to Phasey</p>}
          <div class="col-md-6">
          <p class="text-xs-center" id="welcomeMsg">{this.props.userData.firstName + ' ' + this.props.userData.lastName}</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }

}

export default UserData;
