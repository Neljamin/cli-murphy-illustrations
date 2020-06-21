import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import { breakpoints } from "../../styles";

interface BannerProps {

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

	@media ${breakpoints.tablet} {
		font-size: 32px;
	}
`;

const StyledHeaderSlogan = styled.div`
    height: 200px;
    width: 200px;
    background-image: url('/images/slogan.svg');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`;

const Banner: React.FC<BannerProps> = () => (
    <StyledHeader>
        <StyledHeaderSlogan />
    </StyledHeader>
);

export default Banner;
