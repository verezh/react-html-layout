import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  color: red;
`;

export interface LayoutProps {
  text?: string;
}

export const Layout: React.FC<LayoutProps> = ({ text }) => <Wrapper>{text ? text : "Test Component 2"}</Wrapper>;
