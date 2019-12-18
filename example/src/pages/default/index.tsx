import React from 'react';
import './index.scss';
import { Layout } from '../../react-html-layout';
import { ContentWrapper } from '../../react-html-layout';

export const DefaultPage: React.FC = props => {
    return (
        <Layout>
            <ContentWrapper width={300}>
                Content example. Content example. Content example.
            </ContentWrapper>
        </Layout>
    );
};
