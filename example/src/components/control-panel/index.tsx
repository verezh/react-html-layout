import React from "react";
import "./index.scss";
import autobind from "autobind-decorator";
import { NumericInput, Switch } from "@blueprintjs/core";

export interface IControlOptions {
  fixedHeader?: boolean;
  fixedHeaderHeigth?: number;
  fixedSidebar?: boolean;
  sidebarWidth?: number;
  contentWidth?: number;
}

interface IProps extends IControlOptions {
  onChange: (props: IControlOptions) => void;
}

export class ControlPanel extends React.PureComponent<IProps> {
  public render(): React.ReactNode {
    const { contentWidth, fixedHeader, fixedHeaderHeigth } = this.props;
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
