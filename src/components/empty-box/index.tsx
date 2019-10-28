import React from 'react';
import './index.scss';
import { ColorProperty } from 'csstype';

// tslint:disable-next-line:interface-name
interface Props {
    children?: React.ReactNode;
    backgroundColor?: ColorProperty;
}

export class EmptyBox extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { children, backgroundColor } = this.props;
        return (
            <div style={{ backgroundColor }} className="empty-box">
                {children}
            </div>
        );
    }
}
