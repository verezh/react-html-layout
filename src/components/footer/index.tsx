import React from 'react';
import { HorizontalPanel } from '../horizontal-panel';

export interface FooterProps {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
}

const rootFixedContenStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
};

const defaultStyle: React.CSSProperties = {
    backgroundColor: '#333',
    // height: 50,
    color: 'white',
};

export const Footer: React.FC<FooterProps> = props => {
    const { children, style, ...restProps } = props;
    return (
        <HorizontalPanel style={{ ...defaultStyle, ...style }} fixedContentStyle={rootFixedContenStyle} {...restProps}>
            {children}
        </HorizontalPanel>
    );
};
