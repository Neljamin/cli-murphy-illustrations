import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

import AppHelmet from "./AppHelmet";
import AppGlobalStyles from "./AppGlobalStyles";
import { Banner, Navbar, Page } from "./components/presentational";
import { theme } from "./styles";
import ApolloClient, { gql } from "apollo-boost";
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  	introspectionQueryResultData
});
const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
	cache,
	uri:
		"https://api-eu-central-1.graphcms.com/v2/ckbooav750jy301yz2jyr4idd/master",
});

const APP_STRUCTURE_QUERY = gql`
	{
		banners {
			title
			image {
				url
			}
		}
		links {
			id
			title
			route
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(APP_STRUCTURE_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const { banners, links } = data;

	return (
		<Router>
			<Banner config={banners[0]} />
			<Navbar links={links} />
			{links.map((link: any) => (
				<Route
					key={link.route}
					path={link.route}
					exact={link.route === "/"}
				>
					<Page link={link} />
				</Route>
			))}
		</Router>
	);
}

function AppProvider() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<HelmetProvider>
					<AppHelmet />
				</HelmetProvider>
				<AppGlobalStyles />
				<App />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default AppProvider;
