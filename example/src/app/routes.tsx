import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { SimplePage } from "../pages/simple";
import { FixedHeader } from "../pages/fixed-header";
import { FixedSidebar } from "../pages/fixed-sidebar";

export class Root extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SimplePage} />
          <Route exact path="/fixed-header" component={FixedHeader} />
          <Route exact path="/fixed-sidebar" component={FixedSidebar} />
        </Switch>
      </BrowserRouter>
    );
  }
}
