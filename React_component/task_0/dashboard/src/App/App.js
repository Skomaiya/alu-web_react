import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Notification />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
