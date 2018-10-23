import React, { Component } from 'react';

class GridBox extends Component {
  render(){
    return(
      <div className="grid-block-outer">
        <div className="grid-block-inner">
          <p>Some Text
            <div className="grid-container">
              <div class="grid-item">1</div>
              <div class="grid-item">2</div>
              <div class="grid-item">3</div>
              <div class="grid-item">4</div>
              <div class="grid-item">5</div>
              <div class="grid-item">6</div>
              <div class="grid-item">7</div>
              <div class="grid-item">8</div>
              <div class="grid-item">9</div>
            </div>
          </p>
        </div>
      </div>

    );
  }
}

export default GridBox;
