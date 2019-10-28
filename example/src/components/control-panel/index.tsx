import React from 'react';
import './index.scss';
import autobind from 'autobind-decorator';
import { NumericInput, Switch } from '@blueprintjs/core';

export interface ControlOptions {
    fixedHeader?: boolean;
    fixedHeaderHeigth?: number;
    fixedSidebar?: boolean;
    sidebarWidth?: number;
    contentWidth?: number;
}

interface Props extends ControlOptions {
    onChange: (props: ControlOptions) => void;
}

export class ControlPanel extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { contentWidth, fixedHeader } = this.props;
        return (
            <div className="control-panel">
                <div>
                    Content Width
                    <NumericInput
                        value={contentWidth}
                        placeholder="Enter a number..."
                        onValueChange={this.onContentWidthChange}
                    />
                </div>
                <div>
                    <Switch checked={fixedHeader} label="Is Fixed Header" onChange={this.onFixedHeaderChange} />
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
