import React from 'react';
import { Helmet } from 'react-helmet-async';


const AppHelmet = () =>  (
    <Helmet>
        <title>Cli Murphy Illustration</title>
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Helmet>
);

export default AppHelmet;
