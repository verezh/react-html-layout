import React from "react";
import "./index.scss";

export class Sidebar extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className="sidebar">
        <a href="/">Index</a>
        <a href="/fixed-header">Fixed Header</a>
        <a href="/fixed-sidebar">Fixed Sidebar</a>
      </div>
    );
  }
}
