import React, { Component } from 'react';
import DemoBox from '../../components/DemoBox/DemoBox';
import BoxContent from "../../json/BoxContent.json";

class GridVisualization extends Component {
  render(){
    return(
      <div>
        <DemoBox boxContent={BoxContent} />
      </div>
    );
  }
}

export default GridVisualization;
