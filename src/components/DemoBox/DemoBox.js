import React, { Component } from 'react';
import GridBox from './components/GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
class DemoBox extends Component {
  render(){
    console.log(this.props.boxContent);
    return(
      <div className="demo-container-wrapper">
        <h1> Grid Display </h1>
        <div className="demo-container">
          <GridScript boxContent={this.props.boxContent} />
          <GridBox />
        </div>
      </div>
    );
  }
}

export default DemoBox;
