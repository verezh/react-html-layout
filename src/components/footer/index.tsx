import React from 'react';
import { StyleConstants } from '../../constants';

export interface FooterProps {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
}

const rootStyle: React.CSSProperties = {
    flex: 1,
};

const rootFixedStyle: React.CSSProperties = {
    display: 'flex',
};

const rootFixedContenStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
};

export class Footer extends React.PureComponent<FooterProps> {
    private defaultStyle: React.CSSProperties = {
        backgroundColor: '#333',
        // height: 50,
        color: 'white',
    };

    public render(): React.ReactNode {
        const { children, fixed, fixedHeigth, className, style } = this.props;
        const headerStyle = { ...this.defaultStyle, ...style };

        return fixed === true ? (
            <div
                style={{
                    ...rootFixedStyle,
                    height: fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HEADER_HEIGHT,
                }}
            >
                <div
                    className={className}
                    style={{
                        ...rootFixedContenStyle,
                        ...headerStyle,
                        height: fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HEADER_HEIGHT,
                    }}
                >
                    {children}
                </div>
            </div>
        ) : (
            <div className={className} style={{ ...rootStyle, ...headerStyle }}>
                {children}
            </div>
        );
    }
}
