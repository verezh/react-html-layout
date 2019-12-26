import React, { useState } from 'react';
import './index.scss';
import { Icon, Switch } from '@blueprintjs/core';
import { useInputCheckboxCallback } from '../hooks';

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

export const DrawerButton: React.FC<Props> = props => {
    const { fixedHeader, fixedFooter, onChange } = props;
    const [open, setOpen] = useState(true);
    const handleFixedHeader = useInputCheckboxCallback(checked => {
        onChange({ ...props, fixedHeader: checked });
    });
    const handleFixedFooter = useInputCheckboxCallback(checked => {
        onChange({ ...props, fixedFooter: checked });
    });

    return (
        <div className="drawer-panel">
            <div className="drawer-panel__toggle" onClick={() => setOpen(!open)}>
                <Icon icon="cog" iconSize={24} />
            </div>
            {open ? (
                <div className="drawer-panel__content">
                    {/* <div>
                    Content Width
                    <NumericInput
                        value={contentWidth}
                        placeholder="Enter a number..."
                        onValueChange={this.onContentWidthChange}
                    />
                </div> */}
                    <div>
                        <Switch checked={fixedHeader} label="Is Fixed Header" onChange={handleFixedHeader} />
                    </div>
                    <div>
                        <Switch checked={fixedFooter} label="Is Fixed Footer" onChange={handleFixedFooter} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};
