import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

const StartPage = lazy(() =>
  import("./containers/StartPage/StartPage" /* webpackChunkName: "StartPage" */)
);

const ColorChange = lazy(() =>
  import(
    "./containers/ColorChange/ColorChange" /* webpackChunkName: "ColorChange" */
  )
);

const App = () => {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/controls" component={ColorChange} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
