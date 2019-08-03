import React from 'react';
import { Helmet } from 'react-helmet';
import { MAIN_COLOR, TAGS, DESCRIPTION } from '../../../components/_data/Constants';
const icon = require("../../_assets/favicon.ico");

/**
 * HelmetContent contains crucial metadata about the website, like the title elements, banner
 * content for linked things, the icon, etc.
 * 
 * Last Modified
 *      William Kwok
*       June 9, 2019
 */
export const HelmetContent = () => {
    return <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={MAIN_COLOR} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <meta name="author" content="William Kwok" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={TAGS.join(",")} />


        {/** OpenGraph content. Used for when our page is linked to other websites like Facebook or Slack */}
        <meta property="og:title" content="William Kwok" />
        <meta property="og:site_name" content="William Kwok" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />

        {/** Twitter graph content. Used when our page is shared on twitter. *}
        {/**<meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iugauw" />
        <meta name="twitter:title" content="Informatics Undergraduate Association" />
        <meta name="twitter:description" content="The Informatics Undergraduate Association (IUGA) is a Registered Student Organization that functions as a student government for Informatics students." />
        <meta name="twitter:image" content={monogram} />
        <meta name="twitter:image:alt" content="Informatics Undergraduate Association (IUGA) Logo" />*/}

        <title>William Kwok</title>
        <link rel="shortcut icon" href={icon} />
    </Helmet>
}