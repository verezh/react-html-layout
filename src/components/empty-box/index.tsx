import React from "react";
import { ColorProperty } from "csstype";

interface Props {
    children?: React.ReactNode;
    backgroundColor?: ColorProperty;
}

const rootStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    padding: 20,
    justifyItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#444",
    border: "1px solid #aaa",
    backgroundColor: "white",
};

export class EmptyBox extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { children, backgroundColor } = this.props;
        return (
            <div style={{ ...rootStyle, backgroundColor }} className="empty-box">
                {children}
            </div>
        );
    }
}
