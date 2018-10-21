import React, { Component } from 'react';

class MenuButton extends Component{
  handleClick(e){
    e.preventDefault();
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("change");
    var top_nav= document.getElementsByClassName("topnav-content").item(0);
    top_nav.classList.toggle("nav-appear");
  }

  render() {
    return(
        <li className="top-button unclick">
          <div className="menu-button unclick" onClick={this.handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </li>
    );
  }
}

export default MenuButton;
