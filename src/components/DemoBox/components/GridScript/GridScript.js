import React, { Component } from 'react';
import TabBar from './TabBar';
import { connect } from 'react-redux'
import BoxContent from '../../../../json/BoxContent.json'
class GridBox extends Component {
  state = {
    selectedCodeContent: "CSS"
  }

  buttonSelectCallBack = (contentID) => {
    this.setState({selectedCodeContent: contentID})
  }

  renderCodeContent = () => {
    if (this.props.contentScript && this.props.triggeredDemoID === this.props.demoID){
      // console.log(this.props.triggeredDemoID[0])
      return (this.state.selectedCodeContent === "HTML") ? <pre>{this.props.contentScript.html}</pre> : <pre>{this.props.contentScript.css}</pre>
    } else {
      return (this.state.selectedCodeContent === "HTML") ?<pre>{BoxContent.BoxContentArr[this.props.demoID][0].html}</pre> :  <pre>{BoxContent.BoxContentArr[this.props.demoID][0].css}</pre>
    }
  }
 // BoxContent.BoxContentArr[0][0]
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
  contentScript: state.options.contentScript,
  triggeredDemoID: state.options.triggeredDemoID
});

export default connect(mapStateToProps)(GridBox);
