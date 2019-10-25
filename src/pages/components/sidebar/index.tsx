import React from "react";
import "./index.scss";

export class Sidebar extends React.PureComponent {
    public render(): React.ReactNode {
        return <div className="react-html-layout">{this.props.children}</div>;
    }
}
