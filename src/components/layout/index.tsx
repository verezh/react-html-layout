import React, { ReactNode } from 'react';
import { Header } from '../header';
import { StyleConstants } from '../../constants';
import { Footer } from '../footer';

export interface LayoutProps {
    // root -------------------------------------------------
    /**
     * Root class name.
     */
    className?: string;
    /**
     * Root styles.
     */
    style?: React.CSSProperties;
    // content -------------------------------------------------
    /**
     * Content class name.
     */
    contentClassName?: string;
    /**
     * Content styles.
     */
    contentStyle?: React.CSSProperties;
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
    position: 'relative',
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
};
const rootHeaderStyle: React.CSSProperties = {
    display: 'flex',
};
const rootFooterStyle: React.CSSProperties = {
    display: 'flex',
};

export class Layout extends React.PureComponent<LayoutProps> {
    public render(): React.ReactNode {
        const {
            children,
            className,
            style,
            // ----------------------------------------------------------
            contentClassName,
            contentStyle,
            // ----------------------------------------------------------
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
        const contextElement = content || children;

        const defaultHeader = header === undefined;
        const defaultFooter = footer === undefined;
        return (
            <div style={{ ...rootStyle, ...style }} className={className}>
                {header !== null ? (
                    <div style={rootHeaderStyle}>
                        <Header
                            fixed={fixedHeader}
                            className={headerClassName}
                            style={headerStyle}
                            fixedHeigth={fixedHeaderHeigth || StyleConstants.DEFAULT_HEADER_HEIGHT}
                        >
                            {defaultHeader ? 'Header' : header}
                        </Header>
                    </div>
                ) : null}
                <div style={{ display: 'flex', flex: 1 }}>
                    {/* <div style={sidebarStyle}>
                        {sidebar === "" ? <EmptyBox>Sidebar</EmptyBox> : <div>{sidebar}</div>}
                    </div> */}
                    <div className={contentClassName} style={{ flex: 1, ...contentStyle }}>
                        {contextElement === undefined ? 'Context' : contextElement}
                    </div>
                </div>
                <div style={rootFooterStyle}>
                    <Footer
                        fixed={fixedFooter}
                        className={footerClassName}
                        style={footerStyle}
                        fixedHeigth={fixedFooterHeigth || StyleConstants.DEFAULT_FOOTER_HEIGHT}
                    >
                        {defaultFooter ? <div style={{ height: 50 }}>Footer</div> : footer}
                    </Footer>
                </div>
            </div>
        );
    }
}
