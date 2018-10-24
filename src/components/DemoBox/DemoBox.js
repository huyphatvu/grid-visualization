import React from 'react';
import GridBox from './components/GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
import GridOption from './containers/GridOption/GridOption'

const DemoBox = ({
    demoClassName,
    demoHeader,
    options,
    boxContent,
    demoID,
    children}) => {
      return(
        <div className={demoClassName}>
          <h1> {demoHeader} </h1>

          <GridOption
            options={options}
            optionID={"option" + demoID}
          />

          <div className="demo-container">
            <GridScript
              boxContent={boxContent}
              scriptID={"script" + demoID} />
            <GridBox gridID={demoID} />
          </div>

          <div>
            <p>
              {children}
            </p>
          </div>
        </div>
    );
}


export default DemoBox;
