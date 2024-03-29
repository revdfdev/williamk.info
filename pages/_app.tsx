import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { withRouter, WithRouterProps } from 'next/router';
import { Page } from '../components/Page/Page';
import ReactGA from 'react-ga';
import Router from 'next/router';

ReactGA.initialize("UA-141499923-1");

Router.events.on("routeChangeComplete", (url: string) => {
    ReactGA.pageview(url);
});

/**
 * RouterProps is the type that must be used in order to get `withRouter` working. 
 */
type RouterProps = WithRouterProps<Record<string, string | string[] | undefined>>

/**
 * CustomApp overrides the default injection point that nextjs uses, so we can handle routes and 
 * make all the pages use a default Page object. 
 * 
 * You can conditionally make Page be used by using the router's pathname if you would like, but
 * you shouldn't need to in most cases.
 * 
 * Last Modified
 *      William Kwok
 *      June 6, 2019
 */
class CustomApp extends App<RouterProps> {
    /**
     * getInitialProps is required because the way nextjs works is through server side rendering.
     * It would mess up if you tried to do it the conventional way.
     */
    static async getInitialProps({ Component, ctx }: NextAppContext) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        ReactGA.pageview(this.props.router.pathname);

        if (this.props.router.query && this.props.router.query.q) {
            ReactGA.event({
                category: "Visit",
                action: "Special Page Visit",
                label: this.props.router.query.q as string
            });
        }
    }

    render() {
        const { Component, pageProps, router } = this.props;

        // If the year query parameter exists, you can access it. Otherwise it is undefined.
        return <Container>
            <Page pathname={router.pathname} {...pageProps}>
                <Component {...pageProps} projectName={router && router.query && router.query.projectName} />
            </Page>
        </Container>
    }
}

export default withRouter(CustomApp);