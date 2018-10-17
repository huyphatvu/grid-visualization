import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStyle from './stylesheets/css/application.css'

// import Footer from "./components/Footer/Footer.pug"
// import sass from 'node-sass';
class App extends Component {


  render() {
    // var pug = require('pug');
    // var fn = pug.compile(fs.readFile("./components/Footer/Footer.pug"));
    // var html = fn(locals);

    // var  Footer = require("./components/Footer/Footer.pug")
    // var sass = require('node-sass');
    // console.log(sass.info);
    return (
      <div className="App" style = { AppStyle } >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <Footer /> */}
      </div>

    );
  }
}

export default App;
