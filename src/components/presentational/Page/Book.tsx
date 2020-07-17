import * as React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Loader } from "semantic-ui-react";

interface BookProps {
	title: string;
	coverImageUrl: string;
}

const StyledBook = styled.div`
	display: flex;
	border: 1px solid #ccc;
	box-shadow: 5px 10px #eee;
`;

const StyledImage = styled(LazyLoadImage)`
	object-fit: cover;
`;

const Book: React.FC<BookProps> = ({ title, coverImageUrl }) => (
	<StyledBook>
		<StyledImage
			alt={title}
			height={'100%'}
			width={'100%'}
			effect="blur"
			delayTime={1000}
			src={coverImageUrl}
			placeholder={<Loader />}
		/>
	</StyledBook>
);

export default Book;
