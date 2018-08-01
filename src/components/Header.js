import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const HeaderWrapper = styled.header`
  background-color: ${({ theme, colourScheme }) =>
    theme.colours[colourScheme === 'standard' ? 'navy' : 'robinsEggBlue']};
  color: white;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4rem;
`

const IntroText = styled.p``

class Header extends React.Component {
  state = {
    width: 0,
  }

  static propTypes = {
    title: PropTypes.string,
    introText: PropTypes.string,
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
    const { theme, colourScheme, title, introText } = this.props

    return (
      <HeaderWrapper colourScheme={colourScheme}>
        {width < theme.breakpoints.pxValues.medium ? (
          <NavbarMobile colourScheme={colourScheme} />
        ) : (
          <NavbarDesktop colourScheme={colourScheme} />
        )}
        {title && (
          <Hero>
            <Title>{title}</Title>
            <IntroText>{introText}</IntroText>
          </Hero>
        )}
      </HeaderWrapper>
    )
  }
}

export default withTheme(Header)
