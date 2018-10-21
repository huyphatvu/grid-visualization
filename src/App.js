import React, { Component } from 'react';
// import logo from './logo.svg';
// import pug from 'pug';
import Header from "./components/Header/Header"
// import DemoBox from "./components/DemoBox/DemoBox"
import Footer from "./components/Footer/Footer"
import Index from "./pages/grid_visualization/index"
// import pug from 'pug';
class App extends Component {

  render() {
    return (
      <div className="App" class="flex"  >
        <Header />
        <div className="block">
            <Index/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
