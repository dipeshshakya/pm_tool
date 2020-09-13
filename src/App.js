import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Home from "./pages/Home";

function App() {
  return (
    <Container maxWidth="false" disableGutters="false">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
