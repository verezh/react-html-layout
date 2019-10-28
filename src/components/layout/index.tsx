import React, { ReactNode } from "react";
import { Header } from "../header";
import { StyleConstants } from "../../constants";
import { Footer } from "../footer";
// import styled from "styled-components";
// import "./index.scss";

export interface LayoutProps {
    // header -------------------------------------------------
    /**
     * Header content.
     */
    header?: ReactNode;
    /**
     * Toggles the header to has fixed position.
     */
    fixedHeader?: boolean;
    /**
     * Heigth of the fixed header.
     */
    fixedHeaderHeigth?: number;
    /**
     * Header class name.
     */
    headerClassName?: string;
    /**
     * Header styles.
     */
    headerStyle?: React.CSSProperties;
    // footer -------------------------------------------------
    /**
     * Footer content.
     */
    footer?: ReactNode;
    /**
     * Toggles the footer to has fixed position.
     */
    fixedFooter?: boolean;
    /**
     * Heigth of the fixed footer.
     */
    fixedFooterHeigth?: number;
    /**
     * Footer class name.
     */
    footerClassName?: string;
    /**
     * Footer styles.
     */
    footerStyle?: React.CSSProperties;
    // sidebar -------------------------------------------------
    // sidebar?: ReactNode;
    // fixedSidebar?: boolean;
    // sidebarWidth?: number;
    // other -------------------------------------------------
    /**
     * Content of the page.
     */
    content?: React.ReactNode;
}

const rootStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
};
const rootHeaderStyle: React.CSSProperties = {
    display: "flex",
};
const rootFooterStyle: React.CSSProperties = {
    display: "flex",
};

export class Layout extends React.PureComponent<LayoutProps> {
    public render(): React.ReactNode {
        const {
            children,
            header,
            fixedHeader,
            fixedHeaderHeigth,
            headerClassName,
            headerStyle,
            // ----------------------------------------------------------
            footer,
            fixedFooter,
            fixedFooterHeigth,
            footerClassName,
            footerStyle,
            // sidebar
            // sidebar,
            // fixedSidebar,
            // sidebarWidth,
            content,
        } = this.props;
        // const contentStyle: React.CSSProperties = {};
        // const sidebarStyle: React.CSSProperties = {
        //     width: sidebarWidth ? sidebarWidth : StyleConstants.DEFAULT_SIDEBAR_WIDTH,
        // };
        // if (contentWidth) {
        //     contentStyle.maxWidth = contentWidth;
        //     contentStyle.margin = "0 auto";
        // }
        // if (fixedSidebar) {
        //     sidebarStyle.position;
        // }
        return (
            <div style={rootStyle}>
                <div style={rootHeaderStyle}>
                    <Header
                        fixed={fixedHeader}
                        className={headerClassName}
                        style={headerStyle}
                        fixedHeigth={fixedHeaderHeigth || StyleConstants.DEFAULT_HEADER_HEIGHT}
                    >
                        {header}
                    </Header>
                </div>
                <div className="rhl-layout__body" style={{ display: "flex", flex: 1 }}>
                    {/* <div className="rhl-layout__body__sidebar" style={sidebarStyle}>
                        {sidebar === "" ? <EmptyBox>Sidebar</EmptyBox> : <div>{sidebar}</div>}
                    </div> */}
                    <div style={{ display: "flex", flex: 1 }}>
                        <div>{content || children}</div>
                    </div>
                </div>
                <div style={rootFooterStyle}>
                    <Footer
                        fixed={fixedFooter}
                        className={footerClassName}
                        style={footerStyle}
                        fixedHeigth={fixedFooterHeigth || StyleConstants.DEFAULT_FOOTER_HEIGHT}
                    >
                        {footer}
                    </Footer>
                </div>
            </div>
        );
    }
}
