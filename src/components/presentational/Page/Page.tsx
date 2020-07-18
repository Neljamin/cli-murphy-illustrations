import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Grid, Loader } from "semantic-ui-react";

import Image from "./Image";
import Textbox from "./Textbox";
import Book from "./Book";

interface PageProps {
  link: any;
}

interface PageItemProps {
  config: any;
}

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 378px);
  margin: 32px 0;
`;

const PageItemContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PageRow = styled(Grid.Row)`
  display: flex;
  justify-content: space-around;
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
              html
            }
            iconLinks {
              name
              url
            }
          }
          ... on Book {
            title
            coverImage {
              url
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
    return (
      <Grid.Column>
        <PageItemContainer>
          <Image name={config.title} url={config.image.url} />
        </PageItemContainer>
      </Grid.Column>
    );
  } else if (config.__typename === "Textbox") {
    return (
      <Grid.Column width={10}>
        <PageItemContainer>
          <Textbox title={config.title} html={config.body.html} iconLinks={config.iconLinks} />
        </PageItemContainer>
      </Grid.Column>
    );
  } else if (config.__typename === "Book") {
    return (
      <Grid.Column width={6}>
        <PageItemContainer>
          <Book title={config.title} coverImageUrl={config.coverImage.url} />
        </PageItemContainer>
      </Grid.Column>
    );
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

  const page = _.get(data, "links[0].page") || {};
  const body = page.body || [];

  return (
    <StyledContainer>
      <Grid stackable columns={3}>
        <PageRow>
          {loading && <Loader />}
          {error && <p>Error :(</p>}
          {!loading &&
            !error &&
            body.map((item: any, index: number) => (
              <PageItem key={index} config={item} />
            ))}
        </PageRow>
      </Grid>
    </StyledContainer>
  );
}

export default Page;
