import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import MenuButton from "../MenuButton/MenuButton";

class Header extends Component{
  componentDidMount () {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.async = true;
    script.src = "./javascripts/navigation.js";
    document.body.appendChild(script);
  }

  render() {
    return (
            <ul className="topnav unclick">
              <MenuButton />
              <div className="topnav-content unclick">
                <li><a href="#">   Home  </a></li>
                <li>
                    <a href="#">   Ordering & Direction  </a>
                    <div className="dropdown">
                      <button className="dropbtn collapsible unclick">
                          Models
                          <i className="arrow point-right unclick"></i>
                      </button>
                      <div className="dropdown-content content">
                        <a className="nav-a" href="#">   flex-direction  </a>
                        <a className="nav-a" href="#">   flex-wrap  </a>
                        <a className="nav-link" href="#">   flex-flow  </a>
                        <a className="nav-link" href="#">   order  </a>
                      </div>
                    </div>
                </li>
                <li><a href="#">   Alignment  </a></li>
                <li><a href="#">   Flexibility  </a></li>
              </div>
            </ul>
    );
  }
}


export default Header;
