import React, { ReactNode } from "react";
import styled from "styled-components";
import { EmptyBox } from "../empty-box";
import "./index.scss";

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
}

export class Layout extends React.PureComponent<LayoutProps> {
    public render(): React.ReactNode {
        const { children, header, footer, sidebar } = this.props;
        return (
            <div className="layout">
                <div className="layout__header">{header ? <div>{header}</div> : <EmptyBox>Header</EmptyBox>}</div>
                <div className="layout__body">
                    <div className="layout__body__sidebar">
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
