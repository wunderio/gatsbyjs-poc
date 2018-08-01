import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const HeaderWrapper = styled.header`
  /* min-height: 64rem; */
  background-color: ${({ theme, colourScheme }) =>
    theme.colours[colourScheme === 'standard' ? 'navy' : 'robinsEggBlue']};
  color: white;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 5rem 0; */
`

const Title = styled.h1`
  font-size: 4rem;
`

class Header extends React.Component {
  state = {
    width: 0,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    heroText: PropTypes.string,
    colourScheme: PropTypes.string,
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount = () => {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    const { width } = this.state
    const { theme, colourScheme, title } = this.props

    return (
      <HeaderWrapper colourScheme={colourScheme}>
        {width < theme.breakpoints.pxValues.medium ? (
          <NavbarMobile colourScheme={colourScheme} />
        ) : (
          <NavbarDesktop colourScheme={colourScheme} />
        )}
        <Hero>
          <Title>{title}</Title>
        </Hero>
      </HeaderWrapper>
    )
  }
}

export default withTheme(Header)
