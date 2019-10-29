import React from "react";

export interface ContentWidthProps {
    width?: number;
    children?: React.ReactNode;
}

const rootStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
};

export class ContentWidth extends React.PureComponent<ContentWidthProps> {
    public render(): React.ReactNode {
        const { width, children } = this.props;
        const style = { rootStyle, width };
        return <div style={style}>{children}</div>;
    }
}
