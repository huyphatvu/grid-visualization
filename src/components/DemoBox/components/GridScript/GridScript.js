import React, { Component } from 'react';
import TabBar from './TabBar';
import { connect } from 'react-redux'

class GridBox extends Component {
  state = {
    selectedCodeContent: "CSS"
  }

  buttonSelectCallBack = (contentID) => {
    this.setState({selectedCodeContent: contentID})
  }

  renderCodeContent = () => {
    if(this.state.selectedCodeContent === "HTML"){
      return (
        <pre>{this.props.contentDisplay.html}</pre>
     );
    } else{
      return (
        <pre>{this.props.contentDisplay.css}</pre>
     );
    }
  }

  render(){
    return(
      
        <div className="script-block">
          <TabBar callbackFromParent={this.buttonSelectCallBack} tabID={this.props.scriptID} />
          <div className="code-content">
            {this.renderCodeContent()}
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  contentDisplay: state.options
});

export default connect(mapStateToProps)(GridBox);
