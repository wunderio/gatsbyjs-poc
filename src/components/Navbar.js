import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { navLinks } from '../data/data'
import carrot from '../assets/carrot.png'
import hamburger from '../assets/hamburger.svg'
import closeIcon from '../assets/close-icon.svg'

const NavWrapper = styled.div``

const Top = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
`

const MenuToggleBtn = styled.button`
  position: absolute;
  left: 0;
  top: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const MenuToggleImg = styled.img``

const CarrotLink = styled(Link)``

const CarrotImg = styled.img`
  height: 6rem;
  width: auto;
`

const ToggledOpenView = styled.nav`
  position: absolute;
  width: 100%;
  background-color: ${props => props.theme.colours[props.background]};
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 1rem 2rem;
  background-color: transparent;

  a {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 17px 1rem;
    height: 4.2rem;
    line-height: 1;
    letter-spacing: 0.36rem;
    white-space: nowrap;

    :hover {
      background-color: white;
      color: ${props => props.theme.colours.cyan};
    }
  }
`

const LanguageBar = styled.div``

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    colourScheme: PropTypes.string,
  }

  toggleMenu = () => {
    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen,
      }),
      () => {
        console.log(
          `You just ${this.state.isOpen ? 'opened' : 'closed'} the navbar!`
        )
      }
    )
  }

  render() {
    const background =
      this.props.colourScheme === 'standard' ? 'navy' : 'robinsEggBlue'

    return (
      <NavWrapper>
        <Top>
          <MenuToggleBtn onClick={this.toggleMenu}>
            <MenuToggleImg
              src={this.state.isOpen ? closeIcon : hamburger}
              alt="Toggle menu icon"
            />
          </MenuToggleBtn>
          <CarrotLink to="/" title="Home">
            <CarrotImg src={carrot} alt="Wunder logo" />
          </CarrotLink>
        </Top>
        {this.state.isOpen && (
          <ToggledOpenView background={background}>
            <NavLinks>
              {Object.keys(navLinks).map(key => (
                <li key={key}>
                  <Link to={navLinks[key].link} key={key}>
                    {navLinks[key].text}
                  </Link>
                </li>
              ))}
            </NavLinks>
            <LanguageBar todo={true} />
          </ToggledOpenView>
        )}
      </NavWrapper>
    )
  }
}
