import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SideBar from "../SideBar/SideBar"
import Card from '../Card/Card'

// var Scroll = require('');


export default props => {
  return (
    <div className="flex">
          <div>
            <div class="inner-flex">
              <SideBar />
              <Card>
                {props.children}
              </Card>
            </div>
          </div>
        <Footer />
    </div>
  );
};
