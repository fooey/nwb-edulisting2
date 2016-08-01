import React from 'react';
import Helmet from 'react-helmet';

import {
    Grid,
    Row,
    Col,
    Button
} from 'react-bootstrap';

import bootstrap from './bootstrap.scss';
import appcss from './app.scss';

import certificate48 from "./img/logo/certificate48.png";

// icons
import appleIcon60x60 from "./img/app-icon/apple-icon-60x60.png";
import appleIcon72x72 from "./img/app-icon/apple-icon-72x72.png";
import appleIcon76x76 from "./img/app-icon/apple-icon-76x76.png";
import appleIcon114x114 from "./img/app-icon/apple-icon-114x114.png";
import appleIcon120x120 from "./img/app-icon/apple-icon-120x120.png";
import appleIcon144x144 from "./img/app-icon/apple-icon-144x144.png";
import appleIcon152x152 from "./img/app-icon/apple-icon-152x152.png";
import appleIcon180x180 from "./img/app-icon/apple-icon-180x180.png";
import androidIcon192x192 from "./img/app-icon/android-icon-192x192.png";
import favicon32x32 from "./img/app-icon/favicon-32x32.png";
import favicon96x96 from "./img/app-icon/favicon-96x96.png";
import favicon16x16 from "./img/app-icon/favicon-16x16.png";


// <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png">
// <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png">
// <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png">
// <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png">
// <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png">
// <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png">
// <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png">
// <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png">
// <link rel="icon" type="image/png" sizes="192x192"  href="/img/android-icon-192x192.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
// <link rel="manifest" href="/img/manifest.json">
// <meta name="msapplication-TileColor" content="#ffffff">
// <meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png">
// <meta name="theme-color" content="#ffffff">

export default () =>  (
    <div>
        <Helmet
            title="Edulisting"
            meta={[
                {"theme-color": "#f7cb38"}
            ]}
            link={[
                {rel: "apple-touch-icon", sizes: "60x60", href: appleIcon60x60},
                {rel: "apple-touch-icon", sizes: "72x72", href: appleIcon72x72},
                {rel: "apple-touch-icon", sizes: "76x76", href: appleIcon76x76},
                {rel: "apple-touch-icon", sizes: "114x114", href: appleIcon114x114},
                {rel: "apple-touch-icon", sizes: "120x120", href: appleIcon120x120},
                {rel: "apple-touch-icon", sizes: "144x144", href: appleIcon144x144},
                {rel: "apple-touch-icon", sizes: "152x152", href: appleIcon152x152},
                {rel: "apple-touch-icon", sizes: "180x180", href: appleIcon180x180},
                {rel: "icon", type: "image/png", sizes: "192x192", href: androidIcon192x192},
                {rel: "icon", type: "image/png", sizes: "32x32", href: favicon32x32},
                {rel: "icon", type: "image/png", sizes: "96x96", href: favicon96x96},
                {rel: "icon", type: "image/png", sizes: "16x16", href: favicon16x16},
            ]}
        />

       <Grid>
            <Row>
                <Col md={6}>
                    <h2><img src={certificate48} width={48} height={48} /> Edulisting.com</h2>
                </Col>
                <Col md={6}>
                    <Button>asdf</Button>
                </Col>
            </Row>
       </Grid>

       <Grid>
            <Row>
                <Col md={6}>asdf</Col>
                <Col md={6}>asdf</Col>
            </Row>
       </Grid>
   </div>
);
