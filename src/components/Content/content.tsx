import { mergeStyles } from 'office-ui-fabric-react';
import * as React from 'react';

export const Footer = () => {
    return (
        <footer style={{ border: '1px solid red' }}>Some text</footer>
    );
};

export const Content = () => {
    return (
        <div className={mergeStyles({ border: '1px solid green' })}>
            <article>This is an article</article>
            <Footer />
        </div>
    );
};

export const Layout = (props: React.PropsWithChildren<{}>) => {
    return (
        <div style={{ border: '1px solid black' }}>
            <p>Custom Layout</p>
            {props.children}
        </div>
    );
};

export const MyPage = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
};