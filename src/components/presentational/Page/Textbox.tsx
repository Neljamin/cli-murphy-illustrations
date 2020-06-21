import * as React from "react";
import styled from "styled-components";

import { breakpoints } from '../../../styles';

interface ImageProps {
	title: string;
	body: string;
}

const StyledTextbox = styled.div`
	display: flex;
	padding: 16px;
	flex-direction: column;
	background: ${props => props.theme.textbox.background};
	box-shadow: rgba(0,0,0,0.22) 2px 2px 0px 0px;
	border: 1px solid #ccc;
	margin: 16px 0;
	transform: rotate(-0.2deg);

	@media ${breakpoints.tablet} {
		margin: 0;
	}
`;

const Textbox: React.FC<ImageProps> = ({ title, body }) => (
	<StyledTextbox>
		<h2>{title}</h2>
		<p>{body}</p>
	</StyledTextbox>
);

export default Textbox;
