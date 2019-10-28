import React from "react";
import "./index.scss";
import classNames from "classnames";
import { StyleConstants } from "../../constants";

export interface FooterProps {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
}

export class Footer extends React.PureComponent<FooterProps> {
    private defaultStyle: React.CSSProperties = {
        backgroundColor: "#333",
        height: 50,
        color: "white",
    };

    public render(): React.ReactNode {
        const { children, fixed, fixedHeigth, className, style } = this.props;
        const headerStyle = { ...this.defaultStyle, ...style };

        return fixed === true ? (
            <div
                className="rhl-footer-fixed"
                style={{
                    height: fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HEADER_HEIGHT,
                }}
            >
                <div className={classNames("rhl-footer-fixed__content", className)} style={headerStyle}>
                    {children}
                </div>
            </div>
        ) : (
            <div className={classNames("rhl-footer", className)} style={headerStyle}>
                {children}
            </div>
        );
    }
}
