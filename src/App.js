import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="false" disableGutters="false">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Home /> */}
    </Container>
  );
}

export default App;
