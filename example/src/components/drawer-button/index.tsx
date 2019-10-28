import React from 'react';
import './index.scss';
import { Icon } from '@blueprintjs/core';

interface Props {
    onClick: () => void;
}

export class DrawerButton extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { onClick } = this.props;
        return (
            <div className="drawer-button" onClick={onClick}>
                <Icon icon="cog" iconSize={24} />
            </div>
        );
    }
}
