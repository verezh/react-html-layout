import React, { useState, useCallback } from 'react';

import { Layout } from '../../react-html-layout';
import { Content } from '../../components';
import { DrawerButton } from '../../components/drawer-button';
import { ContentWrapper } from '../../react-html-layout';

import './index.scss';

export const SimplePage: React.FC = props => {
    const [options, setOptions] = useState({
        fixedHeader: true,
        fixedFooter: false,
    });

    const handleOptions = useCallback(
        options => {
            setOptions(options);
        },
        [options],
    );

    return (
        <React.Fragment>
            <Layout header={'My Header'} footer={'My footer'} {...options}>
                <ContentWrapper width={800}>
                    <Content />
                </ContentWrapper>
            </Layout>
            <DrawerButton {...options} onChange={handleOptions} />
        </React.Fragment>
    );
};
