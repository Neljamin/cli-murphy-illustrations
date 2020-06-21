import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import { breakpoints } from "../../styles";

interface BannerProps {
    config: any;
};

interface BannerSloganProps {
    imageUrl: string;
};

const StyledHeader = styled.header`
    display: flex;
    padding: 8px;
    font-size: 32px;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => _.get(props.theme, 'banner.background')};
    border-bottom: 2px dashed ${props => _.get(props.theme, 'banner.border')};

	@media ${breakpoints.tablet} {
		font-size: 32px;
	}
`;

const StyledHeaderSlogan = styled.div<BannerSloganProps>`
    height: 200px;
    width: 200px;
    background-image: ${props => `url(${props.imageUrl})`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`;

const Banner: React.FC<BannerProps> = ({
    config
}) => (
    <StyledHeader>
        <StyledHeaderSlogan imageUrl={config.image.url} />
    </StyledHeader>
);

export default Banner;
