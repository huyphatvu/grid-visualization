import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import MenuButton from "./components/MenuButton/MenuButton";
import Arrow from "./components/Arrow/Arrow";

class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
      isToggleOn: false,
      showList: false
    }
    this.handleHoverEvent = this.handleHoverEvent.bind(this);
    this.showList = this.showList.bind(this);
  }

  handleHoverEvent(e){
    // console.log(e);
    this.setState({
      isToggleOn: true,
      showList: true
    });
  }

  showList(){
      let element = (
        <div className="dropdown-content content">
          <a className="nav-link" href="/">   flex-direction  </a>
          <a className="nav-link" href="/">   flex-wrap  </a>
          <a className="nav-link" href="/">   flex-flow  </a>
          <a className="nav-link" href="/">   order  </a>
        </div>);
        console.log(element.props.children);
      // element.style.maxHeight = element.scrollHeight+ 20 + "px";
      return element;

  }



  render() {
    return (
            <ul className="topnav">
              <MenuButton />
              <div className="topnav-content">
                <li><button href="/">   Home  </button></li>
                <li>
                    <div className="dropdown">
                      <button aria-haspopup="true" className="dropbtn collapsible " onMouseEnter={this.handleHoverEvent}>
                          Models
                          <Arrow isToggleOn={this.state.isToggleOn}/>
                      </button>
                      {this.showList()}
                    </div>
                </li>
                <li><button href="/">   Alignment  </button></li>
                <li><button href="/">   Flexibility  </button></li>
              </div>
            </ul>
    );
  }
}


export default Header;
