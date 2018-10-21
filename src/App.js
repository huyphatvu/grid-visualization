import React, { Component } from 'react';
// import logo from './logo.svg';
// import pug from 'pug';
import Header from "./components/Header/Header"
import DemoBox from "./components/DemoBox/DemoBox"
import Footer from "./components/Footer/Footer"
// import pug from 'pug';
class App extends Component {

  render() {
    return (
      <div className="App" class="flex"  >
        <Header />
        <div className="block">
            <DemoBox />
            <DemoBox />
            <DemoBox />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
