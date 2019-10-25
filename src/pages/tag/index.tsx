import React from "react";
import { MasterPage } from "../components/master-page";

export class TagPage extends React.PureComponent {
    public render(): React.ReactNode {
        return <MasterPage>{this.props.children}</MasterPage>;
    }
}
