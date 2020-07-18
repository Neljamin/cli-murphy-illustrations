import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row-reverse;
`;

const StyledAnchor = styled.a`
    padding: 16px;
    color: black;

    &:hover {
        color: grey;
    }
`;

const Footer: React.FC = ({
}) => (
    <StyledFooter>
        <StyledAnchor href="https://www.linkedin.com/in/aodhag%C3%A1n-murphy-43b9955a/">Site by Aodhagán Murphy</StyledAnchor>
    </StyledFooter>
);

export default Footer;
