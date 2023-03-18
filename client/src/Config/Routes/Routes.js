import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFound, Home, Settings } from "../../Pages";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* Home */}
          <Route path="/">
            <Home />
          </Route>

          {/* Settings */}
          <Route path="/setting">
            <Settings />
          </Route>

          {/* NotFound */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
