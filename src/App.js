import React, { Component } from 'react';
// import logo from './logo.svg';
import AppStyle from './stylesheets/css/application.css';
// import pug from 'pug';
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
// import pug from 'pug';
class App extends Component {

  render() {
    return (
      <div className="App" class="flex" style = { AppStyle } >
        <Header></Header>
        <div className="block">
          <p>This is a block</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
