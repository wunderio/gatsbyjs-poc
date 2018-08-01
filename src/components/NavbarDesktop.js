import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { navLinks } from '../data/data'
import logo from '../assets/carrot-with-text.svg'

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const LogoLink = styled(Link)``

const WunderLogo = styled.img`
  width: 15rem;
  margin-top: -1.25rem;
`

const NavLinks = styled.ul`
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  list-style-type: none;
  margin: 3.6rem 2rem;
  background-color: transparent;

  a {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.6rem 2.25rem;
    height: 4.2rem;
    line-height: 1;
    letter-spacing: 0.36rem;
    white-space: nowrap;

    :hover {
      background-color: white;
      color: ${({ theme }) => theme.colours.cyan};
    }
  }
`

export default class NavbarDesktop extends React.Component {
  render() {
    return (
      <NavWrapper>
        <LogoLink to="/" title="Home">
          <WunderLogo src={logo} />
        </LogoLink>
        <NavLinks>
          {Object.keys(navLinks).map(key => (
            <li key={key}>
              <Link to={navLinks[key].link} key={key}>
                {navLinks[key].text}
              </Link>
            </li>
          ))}
        </NavLinks>
      </NavWrapper>
    )
  }
}
