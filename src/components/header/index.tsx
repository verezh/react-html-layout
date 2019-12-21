import React from 'react';
import { HorizontalPanel } from '../horizontal-panel';

export interface HeaderProps {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
}

const rootFixedContenStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
};

const defaultStyle: React.CSSProperties = {
    backgroundColor: 'rgb(85, 112, 151)',
    // height: 50,
    color: 'white',
};

export const Header: React.FC<HeaderProps> = props => {
    const { children, style, ...restProps } = props;
    return (
        <HorizontalPanel style={{ ...defaultStyle, ...style }} fixedContentStyle={rootFixedContenStyle} {...restProps}>
            {children}
        </HorizontalPanel>
    );
};
