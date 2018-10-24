import React from 'react';
import DemoBox from '../../components/DemoBox/DemoBox';
// import BoxContent from "../../json/BoxContent.json";

const GridVisualization = () => {
  return (
    <div>
      <DemoBox
        demoClassName = "demo-container-wrapper"
        demoHeader = "Grid Display"
        options = {["grid", "inline-grid"]}
        demoID = "grid-0"
        >
        Defines the element as a grid container and establishes a new grid formatting context for its contents.<br />
        Values:<br /><br />
        grid - generates a block-level grid<br />
        inline-grid - generates an inline-level grid<br />
      </ DemoBox>
    </div>
  );
}

export default GridVisualization;
