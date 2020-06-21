import * as React from "react";
import styled from "styled-components";

import Image from "./Image";
import Textbox from './Textbox';
import { breakpoints } from '../../../styles';

interface PageProps {
	content: any;
}

const StyledPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledPage = styled.div`
	display: flex;
	max-width: 800px;
	min-height: 400px;
	padding: 8px;
	margin: 16px 0 32px 0;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${breakpoints.tablet} {
		flex-direction: row;
	}
`;

const DUMMY_TEXT = `
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
	at porttitor lectus, feugiat ullamcorper lorem. Nulla
	malesuada vestibulum quam vitae rhoncus. Vestibulum sagittis
	nisi varius sodales vulputate. Nulla eleifend nulla sed
	magna lobortis luctus. Maecenas non commodo risus.
	Vestibulum molestie luctus libero in rhoncus. Suspendisse
	vitae fringilla lorem. Integer nec justo quis massa placerat
	consectetur. Integer lobortis viverra dui, ac blandit ligula
	lacinia convallis. Phasellus bibendum justo accumsan arcu
	dignissim, eget sollicitudin quam sollicitudin. Praesent et
	lacus mi. Praesent vel tristique ligula, sed laoreet ipsum.
	Curabitur justo dui, pharetra non mattis non, malesuada sed
	erat. Nunc eu euismod ante, ac porta diam.
`;

const Page: React.FC<PageProps> = ({ content }) => (
	<StyledPageWrapper>
		<StyledPage>
			<Image />
			<Textbox title={content.title} body={DUMMY_TEXT} />
		</StyledPage>
	</StyledPageWrapper>
);

export default Page;
