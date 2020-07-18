import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faAmazon } from "@fortawesome/free-brands-svg-icons";

interface IconLinkProps {
	type: string;
	url: string;
}

const ICON_MAP: any = {
	'Facebook': {
		icon: faFacebook,
		color: "#13a3fa"
	},
	'Amazon': {
		icon: faAmazon,
		color: "#f90"
	},
	'Mail': {
		icon: faEnvelope,
		color: "#c54b43"
	},
	'Instagram': {
		icon: faInstagram,
		color: "#dc498d"
	},
};

interface StyledAnchorProps {
	color: string;
}

const StyledAnchor = styled.a<StyledAnchorProps>`
	display: block;
	padding: 8px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 50%;
	font-size: 22px;
	cursor: pointer;
	color: ${props => props.color};

	&:hover {
		color: ${props => props.color};
		background-color: #f5f5f5;
	}
`;

const IconLink: React.FC<IconLinkProps> = ({ type, url }) => {
	const { color, icon } = ICON_MAP[type];
	return (
		<StyledAnchor href={url} color={color}>
			<FontAwesomeIcon icon={icon} />
		</StyledAnchor>
	);
};


export default IconLink;
