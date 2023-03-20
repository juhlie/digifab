import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import HandmadeMachine from "../pages/lab1";
import NovelButton from "../pages/lab2";
import ListeningMachine from "../pages/lab3";
import WearableSynth from "../pages/lab4";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/lab1" component={HandmadeMachine} />
    <Route path="/lab2" component={NovelButton} />
    <Route path="/lab3" component={ListeningMachine} />
    <Route path="/lab4" component={WearableSynth} />
  </Switch>
);
