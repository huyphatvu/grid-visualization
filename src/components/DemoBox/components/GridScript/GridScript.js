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
    if (this.props.contentDisplay){
      return (this.state.selectedCodeContent === "HTML") ? <pre>{this.props.contentDisplay.html}</pre> : <pre>{this.props.contentDisplay.css}</pre>
    } else {
      return <pre>{BoxContent}</pre>
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
