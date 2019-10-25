import React from "react";
import "./index.scss";
import { Layout } from "../../../components/layout";

export class MasterPage extends React.PureComponent {
    public render(): React.ReactNode {
        return <Layout>{this.props.children}</Layout>;
    }
}
