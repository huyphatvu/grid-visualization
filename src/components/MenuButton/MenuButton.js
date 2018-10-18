import React, { Component } from 'react';

class MenuButton extends Component{
  myFunction(x) {
    x.classList.toggle("change");
    var top_nav= document.getElementsByClassName("topnav-content").item(0);
    top_nav.classList.toggle("nav-appear");
  }
  handleClick(e){
    e.preventDefault();
    // e.classList.toggle("change");
    console.log(e);
  }

  render() {
    return(
        <li className="top-button unclick">
          <div className="menu-button unclick" onClick={this.handleClick}>
            <div className="bar1 unclick"></div>
            <div className="bar2 unclick"></div>
            <div className="bar3 unclick"></div>
          </div>
        </li>
    );
  }
}

export default MenuButton;
