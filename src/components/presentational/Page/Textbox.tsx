import * as React from "react";
import styled from "styled-components";
import IconLink from "./IconLink";
import { breakpoints } from '../../../styles';

interface ImageProps {
	title: string;
	html: any;
	iconLinks?: Array<any>;
}

const StyledTextbox = styled.div`
	display: flex;
	padding: 16px;
	flex-direction: column;
	background: ${props => props.theme.textbox.background};
	box-shadow: rgba(0,0,0,0.22) 2px 2px 0px 0px;
	border: 1px solid #ccc;
	margin-top: 16px;
	transform: rotate(-0.2deg);

	@media ${breakpoints.tablet} {
		margin: 16px;
	}
`;

const SocialsRow = styled.div`
	display: flex;
	margin: 16px 0;
	margin-top: 48px;
	justify-content: center;
	align-items: center;
`;

const SocialsColumn = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;

	@media ${breakpoints.tablet} {
		width: 50%;
	}
`;

const Textbox: React.FC<ImageProps> = ({ title, html, iconLinks = [] }) => (
	<StyledTextbox>
		<h2>{title}</h2>
		<div dangerouslySetInnerHTML={{ __html: html }} />
		{
			iconLinks && 
			<SocialsRow >
				<SocialsColumn>
					{iconLinks.map((iconLink: any) => <IconLink key={iconLink.name} type={iconLink.name} url={iconLink.url} />)}
				</SocialsColumn>
			</SocialsRow>
		}
	</StyledTextbox>
);

export default Textbox;
