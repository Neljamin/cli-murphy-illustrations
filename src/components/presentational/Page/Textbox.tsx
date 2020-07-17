import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { breakpoints } from '../../../styles';

interface ImageProps {
	title: string;
	html: any;
	showSocials?: boolean;
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

interface StyledAnchorProps {
	color: string;
}

const StyledAnchor = styled.a<StyledAnchorProps>`
	border: none;
	background: transparent;
	font-size: 28px;
	cursor: pointer;
	color: ${props => props.color};

	&:hover {
		color: ${props => props.color};
	}
`;

const Facebook = () => (
	<StyledAnchor href="https://www.facebook.com/CliodhnaMurphy" color='#13a3fa'>
		<FontAwesomeIcon icon={faFacebook} />
	</StyledAnchor>
);

const Mail = () => (
	<StyledAnchor href="mailto:cli.murphy58@gmail.com" color='#c54b43'>
		<FontAwesomeIcon icon={faEnvelope} />
	</StyledAnchor>
);

const Instagram = () => (
	<StyledAnchor href="https://www.instagram.com/climurphyillustrations/" color='#dc498d'>
		<FontAwesomeIcon icon={faInstagram} />
	</StyledAnchor>
);

const Textbox: React.FC<ImageProps> = ({ title, html, showSocials = false }) => (
	<StyledTextbox>
		<h2>{title}</h2>
		<div dangerouslySetInnerHTML={{ __html: html }} />
		{
			showSocials && 
			<SocialsRow >
				<SocialsColumn>
					<Facebook />
					<Mail />
					<Instagram />
				</SocialsColumn>
			</SocialsRow>
		}
	</StyledTextbox>
);

export default Textbox;
