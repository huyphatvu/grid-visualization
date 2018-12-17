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
        A grid container establishes a new grid formatting context for its contents<br />
        Values:<br />
        <tab>
          <bold>grid</bold> - generate a block-level grid container box<br />
          <bold>inline-grid</bold> - generate an inline-level grid container box<br />
        </tab>
        Source: &nbsp;
        <a href="https://www.w3.org/TR/css-grid-1/#grid-containers">
          www.w3.org/TR/css-grid-1/#grid-containers
        </a>
      </ DemoBox>
      <hr />
      <DemoBox
        demoHeader = "Grid Template Columns"
        options = {["auto auto", "auto auto auto", "2fr auto", "auto 50px auto", "auto 50% auto"]}
        demoID = "1"
        >
        CSS property defines the line names and track sizing functions of the grid columns.<br />
        Values:<br />
        <tab>
      	   <span>none | &#60;track-list&#62; | &#60;auto-track-list&#62;</span><br/>
        </tab>
        Source: &nbsp;
        Initial:	none <br />
      <a href="https://www.w3.org/TR/css-grid-1//#track-sizing">
          www.w3.org/TR/css-grid-1/#track-sizing
        </a>
      </ DemoBox>
      <hr />
      <DemoBox
        demoHeader = "Grid Template Rows"
        options = {["100px auto", "1fr 1fr 2fr", "0 1fr 1fr"]}
        demoID = "2"
        >
        CSS property defines the line names and track sizing functions of the grid rows.<br />
        Values:<br />
        <tab>
           <span>none | &#60;track-list&#62; | &#60;auto-track-list&#62;</span><br/>
        </tab>
        Initial:	none <br />
        Source: &nbsp;
      <a href="https://www.w3.org/TR/css-grid-1//#track-sizing">
          www.w3.org/TR/css-grid-1/#track-sizing
        </a>
      </ DemoBox>
      <hr />
      <DemoBox
        demoHeader = "Grid Template Areas"
        options = {["area 1", "area 2"]}
        demoID = "3"
        >
        Areas provide a naming of the structure of the grid.<br />
        These areas can be referenced from the grid-placement properties such as: grid-row-start, grid-row-end, grid-column-start, grid-column-end. <br />
        Values:<br />
        <tab>
           <span>none | &#60;string&#62; </span><br/>
        </tab>
        Initial:	none <br />
        Source: &nbsp;
      <a href="https://www.w3.org/TR/css-grid-1//#track-sizing">
          www.w3.org/TR/css-grid-1/#track-sizing
        </a>
      </ DemoBox>
    </div>
  );
}
