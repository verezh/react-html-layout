import React, { Component } from "react";
import styled from "styled-components";
import { Layout } from "./react-html-layout";

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
  render() {
    return <Layout sidebar={""} />;
  }
}

export { App };
