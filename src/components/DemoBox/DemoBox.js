import React from 'react';
import GridBox from '../GridBox/GridBox'
import GridScript from './components/GridScript/GridScript'
import GridOption from './containers/GridOption/GridOption'
import { Element } from 'react-scroll'

export default ({
    demoClassName,
    demoHeader,
    options,
    boxContent,
    demoID,
    children}) => {
      return(
        <Element name={"demo-" + demoID} className="demo-container-wrapper">

            <h1> {demoHeader} </h1>
            <GridOption
              options={options}
              optionID={"option-" + demoID}
              demoID={demoID}
            />

            <div className="demo-container">

              <GridBox
                gridID={"grid-" + demoID}
                demoID={demoID}
                />
              <GridScript
                boxContent={boxContent}
                scriptID={"script-" + demoID}
                demoID={demoID}
                  />
            </div>

            <p className="grid-description">
              {children}
            </p>

        </Element>

    );
}
