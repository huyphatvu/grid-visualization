import React, { Component } from 'react';
import GridBox from './components/GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
import GridOption from './components/GridOption/GridOption'

class DemoBox extends Component {
  optionSelectCallBack(e){
    console.log(e);
  }

  render(){
    console.log(this.props.boxContent);
    return(
      <div className="demo-container-wrapper">
        <h1> Grid Display </h1>
        <GridOption options={["grid-inline", "grid"]} optionID="option-1" callbackFromParentForOptions={this.optionSelectCallBack}/>
        <div className="demo-container">
          <GridScript boxContent={this.props.boxContent} gridId="grid-1" />
          <GridBox />
        </div>
        <div>
          <p>
            Defines the element as a grid container and establishes a new grid formatting context for its contents.<br />
            Values:<br /><br />
            grid - generates a block-level grid<br />
            inline-grid - generates an inline-level grid<br />
          </p>
        </div>
      </div>
    );
  }
}

export default DemoBox;
