import * as React from "react";
import * as _ from 'lodash';
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Image from "./Image";
import Textbox from "./Textbox";
import { breakpoints } from "../../../styles";

interface PageProps {
	link: any;
}

interface PageItemProps {
	config: any;
}

const StyledPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledPage = styled.div`
	display: flex;
	max-width: 800px;
	padding: 8px;
	margin: 16px 0 32px 0;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
`;

const PAGE_QUERY = gql`
	query GetPageContentByLinkId($id: ID!) {
		links(where: { id: $id }) {
			id
			title
			page {
				title
				body {
					... on Image {
						title
						image {
							url
						}
					}
					... on Textbox {
						title
						body {
							text
						}
					}
				}
			}
		}
	}
`;

function PageItem(props: PageItemProps) {
	const { config } = props;

	if (config.__typename === "Image") {
		return <Image url={config.image.url} />;
	} else if (config.__typename === "Textbox") {
		return <Textbox title={config.title} body={config.body.text} />;
	} 

	return null;
}

function Page(props: PageProps) {
	const { link } = props;
	const { loading, error, data } = useQuery(PAGE_QUERY, {
		variables: {
			id: link.id,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	const page = _.get(data, 'links[0].page') || {};
	const body = page.body || [];

	return (
		<StyledPageWrapper>
			<StyledPage>
				{body.map((item: any, index: number) => <PageItem key={index} config={item} />)}
			</StyledPage>
		</StyledPageWrapper>
	);
}

export default Page;
