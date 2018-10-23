import React, { Component } from 'react';

class TabBar extends Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, contentID){
    let current_tabbar = document.getElementById(this.props.tabID);
    let tab_buttons = current_tabbar.childNodes;
    for(let i=0; i<tab_buttons.length; i++)
      tab_buttons[i].classList.remove("current-tab");
    e.currentTarget.classList.add("current-tab");

    this.props.callbackFromParent(contentID);     // send contentID to the parent
  }

  render(){
    return(
      <div className="tabbar" id={this.props.tabID}>
        <button className="tab-button" onClick={(e) => this.handleSelect(e, "HTML")}> HTML </button>
        <button className="tab-button current-tab" onClick={(e) => this.handleSelect(e, "CSS")}> CSS </button>
      </div>
    );
  }
}

export default TabBar;
