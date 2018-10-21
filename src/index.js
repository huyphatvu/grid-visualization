import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import AppStyle from './stylesheets/css/application.css';
import Layout from './components/Layout/Layout';
// import DemoBox from './components/DemoBox/DemoBox';
import GridVisualization from "./pages/grid_visualization/index"
import DemoBox2 from './components/DemoBox2/DemoBox';
import DemoBox3 from './components/DemoBox3/DemoBox';
// import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from "react-router-dom";
// import createHashHistory from 'history/createHashHistory';
// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

class Main extends Component {
  render() {
    console.log(process.env);
    return (
      <HashRouter>
        <div style = { AppStyle }>
          <Layout>
            <Switch>
              <Route exact path={`/`} component={GridVisualization} />
              <Route exact path={`/two`}component={DemoBox2} />
              <Route exact path={`/three`} component={DemoBox3} />
            </Switch>
          </Layout>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
