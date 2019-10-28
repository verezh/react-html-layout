import React from "react";
import "./index.scss";
import classNames from "classnames";
import { StyleConstants } from "../../constants";

export interface HeaderProps {
    fixed?: boolean;
    fixedHeigth: number;
    contentStyle?: React.CSSProperties;
    className?: string;
    style?: React.CSSProperties;
}

export class Header extends React.PureComponent<HeaderProps> {
    private defaultStyle: React.CSSProperties = {
        backgroundColor: "rgb(85, 112, 151)",
        height: 50
    };
    
    public render(): React.ReactNode {
        const { children, fixed, fixedHeigth, className, style } = this.props;
        const headerStyle = { ...this.defaultStyle, ...style };

        return fixed === true ? (
            <div
                className="rhl-header-fixed"
                style={{
                    height: fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HEADER_HEIGHT,
                }}
            >
                <div className={classNames("rhl-header-fixed__content", className)} style={headerStyle}>
                    {children}
                </div>
            </div>
        ) : (
            <div className={classNames("rhl-header", className)} style={headerStyle}>
                {children}
            </div>
        );
    }
}
