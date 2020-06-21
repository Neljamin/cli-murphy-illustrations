import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Route } from "react-router-dom";

import AppHelmet from './AppHelmet';
import AppGlobalStyles from './AppGlobalStyles';
import { Banner, Navbar } from './components/presentational';
import { theme } from './styles';

const LINKS = [
  { title: 'About', route: '/' },
  { title: 'Books', route: '/books' },
  { title: 'Illustrations', route: '/illustrations' },
  { title: 'Contact', route: '/contact' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <AppHelmet />
      </HelmetProvider>
      <AppGlobalStyles />
      <Router>
        <Banner />
        <Navbar links={LINKS} />
        {
          LINKS.map(link => (
            <Route key={link.route} path={link.route} exact={link.route === "/"}>
              {link.title}
            </Route>
          ))
        }
      </Router>
    </ThemeProvider>
  );
}

export default App;
