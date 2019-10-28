import React from "react";
import "./index.scss";
import autobind from "autobind-decorator";
import { NumericInput, Switch } from "@blueprintjs/core";

export interface ControlOptions {
    // header -------------------------
    fixedHeader?: boolean;
    fixedHeaderHeigth?: number;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    // footer -------------------------
    fixedFooter?: boolean;
    fixedFooterHeigth?: number;
    footerClassName?: string;
    footerStyle?: React.CSSProperties;
}

interface Props extends ControlOptions {
    onChange: (props: ControlOptions) => void;
}

export class ControlPanel extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { fixedHeader, fixedFooter } = this.props;
        return (
            <div className="control-panel">
                {/* <div>
                    Content Width
                    <NumericInput
                        value={contentWidth}
                        placeholder="Enter a number..."
                        onValueChange={this.onContentWidthChange}
                    />
                </div> */}
                <div>
                    <Switch checked={fixedHeader} label="Is Fixed Header" onChange={this.onFixedHeaderChange} />
                </div>
                <div>
                    <Switch checked={fixedFooter} label="Is Fixed Footer" onChange={this.onFixedFooterChange} />
                </div>
            </div>
        );
    }

    @autobind
    private onFixedHeaderChange(e: React.FormEvent<HTMLInputElement>): void {
        this.setState({ fixedHeader: e.currentTarget.checked }, () => {
            this.onChange();
        });
    }

    @autobind
    private onFixedFooterChange(e: React.FormEvent<HTMLInputElement>): void {
        this.setState({ fixedFooter: e.currentTarget.checked }, () => {
            this.onChange();
        });
    }

    @autobind
    private onContentWidthChange(value: number): void {
        this.setState(
            {
                contentWidth: value,
            },
            () => {
                this.onChange();
            },
        );
    }

    @autobind
    private onChange(): void {
        this.props.onChange(this.state);
    }
}
