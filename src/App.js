import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>

export default App;
