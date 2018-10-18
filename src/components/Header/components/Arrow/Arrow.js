import React, {Component} from "react";

class Arrow extends Component{
  constructor(props){
    super(props);
    this.getArrow = this.getArrow.bind(this);
  }

  getArrow (){
    if(!this.props.isToggleOn){
        return <i className="arrow point-right"></i>; }
    else {
        return <i className="arrow point-right arrow-turn-down"></i>  }
  }
  render(){
    return this.getArrow();
  }
}

export default Arrow;
