import React from "react";
import "./index.scss";
import { Layout } from "../../react-html-layout";
import { FullSidebar, Content } from "../../components";

export class FixedSidebar extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <Layout sidebar={<FullSidebar />}>
        <Content />
      </Layout>
    );
  }
}
