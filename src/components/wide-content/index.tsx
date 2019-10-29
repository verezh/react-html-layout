import React from "react";

export interface WideContentProps {
    width?: number;
    children?: React.ReactNode;
}

const rootStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
};

export class WideContent extends React.PureComponent<WideContentProps> {
    public render(): React.ReactNode {
        const { width, children } = this.props;
        const style: React.CSSProperties = { ...rootStyle, width };
        return <div style={style}>{children}</div>;
    }
}
