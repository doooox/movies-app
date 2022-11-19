import React from "react";
import { Switch, Route } from "react-router-dom";
import AppMovies from "./pages/AppMovies";
import SingleMovie from "./pages/SingleMovie";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/movies">
          <AppMovies />
        </Route>
        <Route path="/movies/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
