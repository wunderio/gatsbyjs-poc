import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import carrot from '../assets/carrot.png'
import hamburger from '../assets/hamburger.svg'
import closeIcon from '../assets/close-icon.svg'

const NavWrapper = styled.nav`
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

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
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
    return (
      <NavWrapper>
        <MenuToggleBtn onClick={this.toggleMenu}>
          <MenuToggleImg
            src={this.state.isOpen ? closeIcon : hamburger}
            alt="Toggle menu icon"
          />
        </MenuToggleBtn>
        <CarrotLink to="/" title="Home">
          <CarrotImg src={carrot} alt="Wunder logo" />
        </CarrotLink>
      </NavWrapper>
    )
  }
}
