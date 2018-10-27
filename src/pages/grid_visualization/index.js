import React from 'react';
import DemoBox from '../../components/DemoBox/DemoBox';
// import BoxContent from "../../json/BoxContent.json";

export default () => {
  return (
    <div>
      <DemoBox
        demoHeader = "Grid Display"
        options = {["grid", "inline-grid"]}
        demoID = "0"
        >
        Defines the element as a grid container and establishes a new grid formatting context for its contents.<br />
        Values:<br />
        <tab>
          <bold>grid</bold> - generates a block-level grid<br />
          <bold>inline-grid</bold> - generates an inline-level grid<br />
        </tab>
      </ DemoBox>
      <hr />
      <DemoBox
        demoHeader = "Grid Template Columns"
        options = {["1", "2", "3", "4"]}
        demoID = "1"
        >
        CSS property defines the line names and track sizing functions of the grid columns.<br />
        Values:<br />
        grid - generates a block-level grid<br />
        inline-grid - generates an inline-level grid<br />
      </ DemoBox>
    </div>
  );
}
