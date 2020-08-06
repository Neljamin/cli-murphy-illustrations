import * as React from "react";
import styled, { css } from "styled-components";
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
		color: "#13a3fa",
		variant: 'circle'
	},
	'Amazon': {
		icon: faAmazon,
		color: "#f90",
		variant: 'rectangle'
	},
	'Mail': {
		icon: faEnvelope,
		color: "#c54b43",
		variant: 'circle'
	},
	'Instagram': {
		icon: faInstagram,
		color: "#dc498d",
		variant: 'circle'
	},
};

interface StyledAnchorProps {
	color: string;
	variant: string;
}

const StyledAnchor = styled.a<StyledAnchorProps>`
	display: flex;
	padding: 8px;
	background-color: white;
	border: 1px solid #ccc;
	font-size: 22px;
	cursor: pointer;
	justify-content: center;
	align-items: center;

	color: ${props => props.color};

	&:hover {
		color: ${props => props.color};
		background-color: #f5f5f5;
	}

	${({ variant }) => variant === 'circle' && css`
		border-radius: 50%;
	`}

	${({ variant }) => variant === 'rectangle' && css`
		border-radius: 5px;
		width: 100px;
	`}
`;

const IconLink: React.FC<IconLinkProps> = ({ type, url }) => {
	const { color, icon, variant } = ICON_MAP[type];
	return (
		<StyledAnchor variant={variant} href={url} color={color} target="_blank">
			<FontAwesomeIcon icon={icon} />
		</StyledAnchor>
	);
};


export default IconLink;
