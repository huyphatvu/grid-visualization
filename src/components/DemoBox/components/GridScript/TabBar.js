import React, { Component } from 'react';

class TabBar extends Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(contentID){
    this.props.callbackFromParent(contentID);     // send contentID to the parent
  }

  render(){
    return(
      <div className="tabbar">
        <button onClick={() => this.handleSelect("HTML")}> HTML </button>
        <button onClick={() => this.handleSelect("CSS")}> CSS </button>
      </div>
    );
  }
}

export default TabBar;
