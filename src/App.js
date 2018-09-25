/*global FB*/
import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import CryptoList from './components/CryptoList';

class App extends Component {

  componentDidMount = () => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '869322980122344',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
  }.bind(this);

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

render() {
  return (
    <div className="App">
    <header className="App-header">
    <h1 className="App-title">Phasey</h1>
    </header>
    <UserProfile />
    <CryptoList />
    </div>
  );
}
}

export default App;
