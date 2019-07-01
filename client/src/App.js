import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { Box } from "rebass";

import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import AddProject from "./components/Projects/ProjectForm";
import Login from "./components/Login/Login";

const Container = styled(Box)({
  maxWidth: "1024px"
});

Container.defaultProps = {
  mx: "auto"
};

function App() {
  return (
    <Container>
      <Navigation />
      <Route exact path="/" component={Projects} />
      <Route exact path="/add-project" component={AddProject} />
      <Route path="/login" component={Login} />
    </Container>
  );
}

export default App;
