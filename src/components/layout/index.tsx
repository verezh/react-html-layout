import React, { ReactNode } from "react";
import styled from "styled-components";
import { EmptyBox } from "../empty-box";
import "./index.scss";
import { Header } from "../header";
import classnames from "classnames";

// const Wrapper = styled.div`
//   padding: 10px;
//   color: red;
// `;

// export interface LayoutProps {
//   text?: string;
// }

// export const Layout: React.FC<LayoutProps> = ({ text }) => <Wrapper>{text ? text : "Test Component 2"}</Wrapper>;

export interface LayoutProps {
    header?: ReactNode;
    footer?: ReactNode;
    sidebar?: ReactNode;
    fixedHeader?: boolean;
    fixedHeaderHeigth?: number;
    fixedSidebar?: boolean;
    sidebarWidth?: number;
    contentWidth?: number;
}

const DEFAULT_HEADER_HEIGHT: number = 50;
const DEFAULT_SIDEBAR_WIDTH: number = 200;

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
            contentWidth,
        } = this.props;
        const rootStyle: React.CSSProperties = {};
        const contentStyle: React.CSSProperties = {};
        const sidebarStyle: React.CSSProperties = {
            width: sidebarWidth ? sidebarWidth : DEFAULT_SIDEBAR_WIDTH,
        };
        if (fixedHeader === true) {
            rootStyle.paddingTop = fixedHeaderHeigth || DEFAULT_HEADER_HEIGHT;
        }
        if (contentWidth) {
            contentStyle.maxWidth = contentWidth;
            contentStyle.margin = "0 auto";
        }
        return (
            <div className={classnames("layout")} style={rootStyle}>
                <Header fixed={fixedHeader} fixedHeigth={fixedHeaderHeigth || DEFAULT_HEADER_HEIGHT}>
                    {header}
                </Header>
                <div className="layout__body" style={contentStyle}>
                    <div className="layout__body__sidebar" style={sidebarStyle}>
                        {sidebar === "" ? <EmptyBox>Sidebar</EmptyBox> : <div>{sidebar}</div>}
                    </div>
                    <div className="layout__body__content">
                        {children ? <div>{children}</div> : <EmptyBox>Content</EmptyBox>}
                    </div>
                </div>
                <div className="layout__footer">{footer ? <div>{footer}</div> : <EmptyBox>Footer</EmptyBox>}</div>
            </div>
        );
    }
}
