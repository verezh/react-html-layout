import React from 'react';
import { StyleConstants } from '../../constants';

interface Props {
    fixed?: boolean;
    fixedHeigth: number;
    className?: string;
    style?: React.CSSProperties;
    fixedContentStyle?: React.CSSProperties;
}

const rootStyle: React.CSSProperties = {
    flex: 1,
};

const rootFixedStyle: React.CSSProperties = {
    display: 'flex',
    zIndex: 100,
};

export const HorizontalPanel: React.FC<Props> = props => {
    const { children, fixed, fixedHeigth, className, style, fixedContentStyle } = props;
    const heigth = fixedHeigth ? fixedHeigth : StyleConstants.DEFAULT_HORIZONTAL_PANEL_HEIGHT;

    return fixed === true ? (
        <div
            style={{
                ...rootFixedStyle,
                height: heigth,
            }}
        >
            <div
                className={className}
                style={{
                    ...fixedContentStyle,
                    ...style,
                    height: heigth,
                }}
            >
                {children}
            </div>
        </div>
    ) : (
        <div className={className} style={{ ...rootStyle, ...style }}>
            {children}
        </div>
    );
};
