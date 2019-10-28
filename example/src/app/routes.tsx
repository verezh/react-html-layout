import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { SimplePage } from "../pages/simple";

export class Root extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={SimplePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
