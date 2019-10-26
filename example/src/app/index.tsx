import React, { Component } from "react";
import styled from "styled-components";
import { Root } from "./routes";

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
  render() {
    return <Root />;
  }
}

export { App };
