import React, { Component } from 'react';
import GridBox from './components/GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
class DemoBox extends Component {
  render(){
    return(
      <div className="demo-container-wrapper">
        <h1> Grid Display </h1>
        <div className="demo-container">
          <GridScript />
          <GridBox />
        </div>
        <h1> Grid Display </h1>
        <div className="demo-container">
          <GridScript />
          <GridBox />
        </div>
      </div>
    );
  }
}

export default DemoBox;
