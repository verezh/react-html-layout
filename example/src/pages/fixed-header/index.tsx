import React from "react";
import "./index.scss";
import { Layout } from "../../react-html-layout";
import { Sidebar } from "../../components/sidebar";

export class FixedHeader extends React.PureComponent {
  public render(): React.ReactNode {
    return <Layout sidebar={<Sidebar />} footer="Footer" header="Header"></Layout>;
  }
}
