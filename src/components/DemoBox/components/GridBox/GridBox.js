import React, { Component } from 'react'
import { connect } from 'react-redux'

class GridBox extends Component {

  

  reRenderGrid = () => {
    // console.log("content Script: "+ this.props.contentScript)
    // console.log("triggered demo id: "+ this.props.triggeredDemoID)
    if(this.props.contentScript && this.props.triggeredDemoID === this.props.demoID ){
      // console.log(this.props.triggeredDemoID[0]);
      let currentBlockContainer= document.getElementById(this.props.gridID);
      // remove the previous class if the click button is the same gridID
      if (this.props.gridID && currentBlockContainer){
        let currentGridContainer = currentBlockContainer.childNodes[1]
        let indexOfRemovedContent = currentGridContainer.classList.length - 1  // find the index of deleted element
        if (indexOfRemovedContent)
          currentGridContainer.classList.remove(
            currentGridContainer.classList.item(indexOfRemovedContent))  // remove the last element
        currentGridContainer.classList.add(this.props.contentScript.contentID)
      }
    }
  }

  render(){
    let element = (
      <div className="grid-block-outer">
        <div className="grid-block-inner" id={this.props.gridID} >
          <span>Some Text</span>
          <div className="grid-container">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
          </div>
        </div>
      </div>
    );
    this.reRenderGrid()
    return element;
  }
}

// get the contentID from state and assign to this.props.contentID
const mapStateToProps = (state, ownProps) => ({
  contentScript: state.options.contentScript,
  triggeredDemoID: state.options.triggeredDemoID
});

export default connect(mapStateToProps)(GridBox);
