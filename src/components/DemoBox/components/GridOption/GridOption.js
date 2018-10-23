import React, { Component } from 'react';

class GridOption extends Component {
  constructor(props){
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  handleSelectOption(e){
    let current_tabbar = document.getElementById(this.props.optionID);
    let option_buttons = current_tabbar.childNodes;
    for(let i=0; i<option_buttons.length; i++)
      option_buttons[i].classList.remove("current-option");
    e.currentTarget.classList.add("current-option");
    this.props.callbackFromParentForOptions(e);     // send contentID to the parent
  }

  renderOptions(){
    let elements = [];
    let length = this.props.options.length;
    elements.push(
      <button className="option-button current-option" onClick={(e) => this.handleSelectOption(e)}> {this.props.options[0]} </button>
    );

    for(let i = 1; i < length; i++){
      elements.push(
        <button className="option-button" onClick={(e) => this.handleSelectOption(e)}> {this.props.options[i]} </button>
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

export default GridOption;
