import React, { ReactNode } from "react";
import "./index.scss";
import { EmptyBox } from "../empty-box";
import { Emphasizer } from "i2ui";

interface IProps {
    header?: ReactNode;
    footer?: ReactNode;
    sidebar?: ReactNode;
}

export class Layout extends React.PureComponent<IProps> {
    public render(): React.ReactNode {
        const { children, header, footer, sidebar } = this.props;
        const colors: string[] = Emphasizer.colorRange("#ddd", "#aaa", 4);
        return (
            <div className="layout">
                <div className="layout__header">{header ? header : <EmptyBox backgroundColor={colors[0]}>Header</EmptyBox>}</div>
                <div className="layout__body">
                    <div className="layout__body__sidebar">
                        {sidebar ? sidebar : <EmptyBox backgroundColor={colors[1]}>Sidebar</EmptyBox>}
                    </div>
                    <div className="layout__body__content">
                        {children ? children : <EmptyBox backgroundColor={colors[1]}>Content</EmptyBox>}
                    </div>
                </div>
                <div className="layout__footer">{footer ? footer : <EmptyBox backgroundColor={colors[2]}>Footer</EmptyBox>}</div>
            </div>
        );
    }
}
