import React, { ReactNode } from "react";
import { EmptyBox } from "../empty-box";
import "./index.scss";
import { Header } from "../header";
import classnames from "classnames";
import { StyleConstants } from "../../constants";

export interface LayoutProps {
    // header -------------------------
    header?: ReactNode;
    fixedHeader?: boolean;
    fixedHeaderHeigth?: number;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    // footer -------------------------
    footer?: ReactNode;
    sidebar?: ReactNode;
    fixedSidebar?: boolean;
    sidebarWidth?: number;
    contentWidth?: number;
}

export class Layout extends React.PureComponent<LayoutProps> {
    public render(): React.ReactNode {
        const {
            children,
            header,
            footer,
            sidebar,
            fixedHeader,
            fixedHeaderHeigth,
            sidebarWidth,
            fixedSidebar,
            contentWidth,
        } = this.props;
        const contentStyle: React.CSSProperties = {};
        const sidebarStyle: React.CSSProperties = {
            width: sidebarWidth ? sidebarWidth : StyleConstants.DEFAULT_SIDEBAR_WIDTH,
        };
        if (contentWidth) {
            contentStyle.maxWidth = contentWidth;
            contentStyle.margin = "0 auto";
        }
        if (fixedSidebar) {
            sidebarStyle.position;
        }
        return (
            <div className={classnames("rhl-layout")}>
                <div className="rhl-layout__header">
                    <Header fixed={fixedHeader} fixedHeigth={fixedHeaderHeigth || StyleConstants.DEFAULT_HEADER_HEIGHT}>
                        {header}
                    </Header>
                </div>
                <div className="rhl-layout__body" style={contentStyle}>
                    <div className="rhl-layout__body__sidebar" style={sidebarStyle}>
                        {sidebar === "" ? <EmptyBox>Sidebar</EmptyBox> : <div>{sidebar}</div>}
                    </div>
                    <div className="rhl-layout__body__content">
                        {children ? <div>{children}</div> : <EmptyBox>Content</EmptyBox>}
                    </div>
                </div>
                <div className="rhl-layout__footer">{footer ? <div>{footer}</div> : <EmptyBox>Footer</EmptyBox>}</div>
            </div>
        );
    }
}
