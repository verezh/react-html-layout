import React from "react";
import { EmptyBox } from "../empty-box";
import "./index.scss";
import classNames from "classnames";

export interface HeaderProps {
    fixed?: boolean;
    fixedHeigth: number;
}

export class Header extends React.PureComponent<HeaderProps> {
    public render(): React.ReactNode {
        const { children, fixed, fixedHeigth } = this.props;
        const style: React.CSSProperties = {};
        if (fixed === true) {
            style.height = fixedHeigth;
        }
        return (
            <div
                className={classNames("layout__header", {
                    "layout__header--fixed": fixed,
                })}
                style={style}
            >
                {children ? <div>{children}</div> : <EmptyBox>Header</EmptyBox>}
            </div>
        );
    }
}
