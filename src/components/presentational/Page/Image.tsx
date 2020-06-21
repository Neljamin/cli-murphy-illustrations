import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

interface ImageProps {
	url?: string;
}

const StyledImageFrame = styled.div`
	position: relative;
	display: inline-flex;
	flex-shrink: 0;
	box-sizing: border-box;
	height: 300px;
	width: 270px;
	margin: 16px;
	padding: 12px;
	padding-bottom: 48px;
	background-color: white;
	border: 1px solid #ccc;
	box-shadow: rgba(0,0,0,0.22) 4px 4px 0px 0px;
	transform: rotate(1deg);
`;

const StyledImage = styled.div`
	/* display: flex; */
	/* padding: 8px; */
	background: url('https://ca-times.brightspotcdn.com/dims4/default/4efe3d9/2147483647/strip/true/crop/1708x1086+0+0/resize/840x534!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1c%2Fec%2F0738d3364b64b31305e287abff20%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F946416208.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`;

const StyledClip = styled.div`
	position: absolute;
	top: -24px;
	left: -24px;
	font-size: 48px;
	height: 48px;
	width: 48px;
	color: #ccc;
`;

const Clip = () => (
	<StyledClip>
		<FontAwesomeIcon icon={faPaperclip} />
	</StyledClip>
);

const Page: React.FC<ImageProps> = ({ url }) => (
	<StyledImageFrame>
		<StyledImage />
		<Clip />
	</StyledImageFrame>
);

export default Page;
