import React, { Component } from 'react';
// import {BrowserRouter, Route, Link } from 'react-router-dom';
import MenuButton from "./components/MenuButton/MenuButton";
import Arrow from "./components/Arrow/Arrow";
import { Link } from "react-router-dom"
class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
      isToggleOn: false,
      showList: false
    }
    this.handleHoverEvent = this.handleHoverEvent.bind(this);
    this.showList = this.showList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleHoverEvent(){
    // console.log(e);
    this.setState({
      isToggleOn: true,
      showList: true
    });
  }

  handleClick(){
    if(this.state.showList){
      this.setState({
        isToggleOn: false,
        showList: false
      });
    } else{
      this.setState({
        isToggleOn: true,
        showList: true
      });
    }
  }

  handleMouseLeave(){
    this.setState({
      isToggleOn: false,
      showList: false
    });
  }

  showList(){
    if(this.state.showList){
      let element = (
        <div className="dropdown-content dropdown-block-appear-transition" onMouseLeave={this.handleMouseLeave}>
          <Link className="nav-link" to="/" > flex-direction  </Link>
          <Link className="nav-link" to="/two"> flex-wrap  </Link>
          <Link className="nav-link" to="/three"> flex-flow  </Link>
          <Link className="nav-link" to="/two"> order  </Link>
        </div>
      );
      return element;
    }
  }



  render() {
    return (
            <ul className="topnav">
              <MenuButton />
              <div className="topnav-content">
                <li><Link to="/" onMouseOver={this.handleMouseLeave}> Home  </Link></li>
                <li>
                    <div className="dropdown">
                      <button className="dropbtn" onMouseEnter={this.handleHoverEvent} onClick={this.handleClick}>
                          Models
                          <Arrow isToggleOn={this.state.isToggleOn}/>
                      </button>
                      {this.showList()}
                    </div>
                </li>
                <li><Link to="/two" onMouseOver={this.handleMouseLeave} > Alignment  </Link></li>
                <li><Link to="/three" onMouseOver={this.handleMouseLeave} > Flexibility  </Link></li>
              </div>
            </ul>
    );
  }
}


export default Header;
