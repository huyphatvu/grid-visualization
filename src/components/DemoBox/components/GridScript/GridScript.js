import React, { Component } from 'react';
import TabBar from './TabBar';

class GridBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCodeContent: "CSS"
    };
    this.buttonSelectCallBack = this.buttonSelectCallBack.bind(this);
    this.renderCodeContent = this.renderCodeContent.bind(this);
  }

  buttonSelectCallBack(contentID){
    this.setState({selectedCodeContent: contentID})
  }

  renderCodeContent() {
    if(this.state.selectedCodeContent === "HTML"){
      return (
        <pre>{this.props.boxContent.BoxContentArr[0].html}</pre>
     );
    } else{
      return (
        <pre>{this.props.boxContent.BoxContentArr[0].css}</pre>
     );
    }
  }

  render(){
    return(
        <div className="script-block">
          <TabBar callbackFromParent={this.buttonSelectCallBack} tabID={this.props.gridId} />
          <div className="code-content">
            {this.renderCodeContent()}
          </div>
        </div>

    );
  }
}

export default GridBox;
