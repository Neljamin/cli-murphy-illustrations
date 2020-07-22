import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Loader } from 'semantic-ui-react';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
	url?: string;
	name: string;
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
`;

const StyledImage = styled(LazyLoadImage)`
	object-fit: cover;
	border: 1px solid #ccc;
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

function Image(props: ImageProps) {
	const { url, name } = props;

	return (
		<StyledImageFrame>
			<StyledImage
				alt={name}
				height={'100%'}
				width={'100%'}
				effect="blur"
				delayTime={1000}
				src={url}
				placeholder={<Loader active />}
			/>
			<Clip />
		</StyledImageFrame>
	);
  }

export default Image;
