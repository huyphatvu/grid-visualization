import React, { Component } from 'react';
import TabBar from './TabBar';
import { connect } from 'react-redux'
import BoxContent from '../../../../json/BoxContent.json'
import src_css from "highlight.js/styles/atom-one-dark-reasonable.css"
import Highlight from 'react-highlight'

class GridBox extends Component {
  state = {
    selectedCodeContent: "CSS"
  }


  buttonSelectCallBack = (contentID) => {
    this.setState({selectedCodeContent: contentID})
  }

  getHighlightedContents = (name, raw_content) => {
    return(
      <Highlight className= {'language-'+name}>
        {raw_content}
      </Highlight>
    )
  }

  renderCodeContent = () => {
    if (this.props.contentScript && this.props.triggeredDemoID === this.props.demoID){
      if ( this.state.selectedCodeContent === "HTML"){
        return this.getHighlightedContents("html", this.props.contentScript.html)
      } else {
        return this.getHighlightedContents("css", this.props.contentScript.css)
      }
    } else {
      if (this.state.selectedCodeContent === "HTML"){
        return this.getHighlightedContents("html", BoxContent.BoxContentArr[this.props.demoID][0].html)
      } else {
        return this.getHighlightedContents("css", BoxContent.BoxContentArr[this.props.demoID][0].css)
      }
    }
  }

 // BoxContent.BoxContentArr[0][0]
  render(){
    return(
        <div className="script-block">
          <TabBar callbackFromParent={this.buttonSelectCallBack} tabID={this.props.scriptID} />
          <div className="code-content" src={src_css}>
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
