import * as React from "react"
import styled from "styled-components"
import * as _ from "lodash"
import { Link, useLocation } from "react-router-dom"

interface NavbarLink {
  route: string
  title: string
  left?: string
}

interface NavbarProps {
  links: Array<NavbarLink>
}

interface StyledLinkProps {
  name: string
}

interface StyledHighlighterProps {
  width: string
  activeLink: NavbarLink
}

const StyledNavbar = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const StyledNavbarList = styled.ul`
  position: relative;
  display: flex;
  max-width: 400px;
  width: 100%;
  justify-content: center;
`

const StyledNavbarItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 15px;
`

const StyledNavbarLink = styled.div<StyledLinkProps>`
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${(props) =>
      _.get(props, `theme.links.${props.name}.hoverBackground`)};
    a {
      color: ${(props) => _.get(props, `theme.links.${props.name}.color`)};
    }
  }

  a {
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 16px;
    text-decoration: none;
    justify-content: center;
    font-weight: 600;
    color: ${(props) => _.get(props, `theme.links.${props.name}.color`)};
  }
`

const StyledNavbarHighlighter = styled.div<StyledHighlighterProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: 2px;
  border-bottom: 2px solid;
  border-color: ${(props) =>
    _.get(props, `theme.links.${props.activeLink.title}.color`)};
  bottom: 0;
  left: ${(props) => props.activeLink.left};
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const getCurrentLinkConfig = (
  links: Array<NavbarLink>,
  pathname: string
): NavbarLink =>
  links.reduce(
    (acc, link, index) => {
      if (link.route === pathname) {
        const left = (index * 100) / links.length
        return {
          ...link,
          left: `${left}%`
        }
      }
      return acc
    },
    {
      title: "",
      route: "",
      left: "0%"
    }
  )
const getHighlighterWidth = (links: Array<NavbarLink>) =>
  `${100 / links.length}%`

function Navbar(props: NavbarProps) {
  const { links } = props
  const location = useLocation()
  const activeLink: NavbarLink = getCurrentLinkConfig(links, location.pathname)
  const highlighterWidth = getHighlighterWidth(links)

  return (
    <StyledNavbar>
      <StyledNavbarList>
        {links.map(({ title, route }, index) => (
          <StyledNavbarItem key={index}>
            <StyledNavbarLink name={title}>
              <Link to={route}>{title}</Link>
            </StyledNavbarLink>
          </StyledNavbarItem>
        ))}
        <StyledNavbarHighlighter
          width={highlighterWidth}
          activeLink={activeLink}
        />
      </StyledNavbarList>
    </StyledNavbar>
  )
}

Navbar.defaultProps = {
  links: []
}

export default Navbar
