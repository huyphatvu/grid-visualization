import React from 'react';
import GridBox from './components/GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
import GridOption from './containers/GridOption/GridOption'
import Card from '../Card/Card'

export default ({
    demoClassName,
    demoHeader,
    options,
    boxContent,
    demoID,
    children}) => {
      return(
        <div className="demo-container-wrapper">
          <Card>
            <h1> {demoHeader} </h1>

            <GridOption
              options={options}
              optionID={"option-" + demoID}
              demoID={demoID}
            />

            <div className="demo-container">
              <GridScript
                boxContent={boxContent}
                scriptID={"script-" + demoID}
                demoID={demoID}
                />
              <GridBox
                gridID={"grid-" + demoID}
                demoID={demoID}
                />
            </div>

            <p>
              {children}
            </p>
          </ Card>
        </div>
    );
}
