import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleOptions } from '../../../../redux/actions'

class GridOption extends Component {
  handleSelectOption = (e, demoID, contentID) => {
    let option_buttons = document.getElementById(this.props.optionID).childNodes
    for(let i=0; i<option_buttons.length; i++)
      option_buttons[i].classList.remove("current-option")        // removed all toggle buttons
    e.currentTarget.classList.add("current-option")               // specify the current option
    this.props.toggleOptions(demoID, contentID)                 // send a dispatch
  }

  renderOptions = () => {
    let elements = [];
    let length = this.props.options.length;
    elements.push(
      <button
        className="option-button current-option"
        contentID={0}
        onClick={(e) => this.handleSelectOption(e, this.props.demoID, 0)}> {this.props.options[0]}
      </button>
    );
    for(let i = 1; i < length; i++){
      elements.push(
        <button
          className="option-button"
          contentID={i}
          onClick={(e) => this.handleSelectOption(e, this.props.demoID, i)}> {this.props.options[i]}
        </button>
      );
    }
    return elements;
  }

  render(){
    return(
      <div className="option-tabbar" id={this.props.optionID}>
        {this.renderOptions()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({         // create a props name toggleoptions
    toggleOptions: (demoID, contentID) =>  dispatch(toggleOptions(demoID, contentID))
})

export default connect(null, mapDispatchToProps)(GridOption);
