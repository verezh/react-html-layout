import React from "react";
// import "./index.scss";
import classNames from "classnames";
import { StyleConstants } from "../../constants";

export interface HeaderProps {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
}

export const rootStyle: React.CSSProperties = {
    flex: 1,
};

export const rootFixedStyle: React.CSSProperties = {
    display: "flex",
};

export const rootFixedContenStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
};

export class Header extends React.PureComponent<HeaderProps> {
    private defaultStyle: React.CSSProperties = {
        backgroundColor: "rgb(85, 112, 151)",
        height: 50,
        color: "white",
    };

    public render(): React.ReactNode {
        const { children, fixed, fixedHeigth, className, style } = this.props;
        const headerStyle = { ...this.defaultStyle, ...style };

        return fixed === true ? (
            <div
                style={{
                    ...rootFixedStyle,
                    height: fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HEADER_HEIGHT,
                }}
            >
                <div className={classNames(className)} style={{ ...rootFixedContenStyle, ...headerStyle }}>
                    {children}
                </div>
            </div>
        ) : (
            <div className={classNames(className)} style={{ ...rootStyle, ...headerStyle }}>
                {children}
            </div>
        );
    }
}
