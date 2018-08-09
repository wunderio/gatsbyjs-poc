import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import NavbarDesktop from 'components/NavbarDesktop'
import NavbarMobile from 'components/NavbarMobile'

const HeaderWrapper = styled.header`
  background-color: ${({ theme, colourScheme }) =>
    theme.colours[colourScheme === 'standard' ? 'navy' : 'robinsEggBlue']};
  color: white;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .section-services & {
    padding-bottom: 100px;
    margin-bottom: -100px;
  }
`

const Title = styled.h1`
  position: relative;
  font-size: 6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .05em;
  max-width: 1200px;
  color: ${({ theme }) => theme.colours.red};

  &:after {
    content: "";
    background-color: #fff;
    bottom: -0.25em;
    display: block;
    height: .05em;
    left: 50%;
    margin-left: -1.5rem;
    position: absolute;
    width: 36px;
    width: 2rem;
  }
`

const IntroText = styled.p`
  font-size: 1.4em;
  margin: 0 0 1.5em 0;
  max-width: 900px;
`

class Header extends React.Component {
  state = {
    width: 9999,
  }

  static propTypes = {
    title: PropTypes.string,
    introText: PropTypes.string,
    colourScheme: PropTypes.string,
    section: PropTypes.string,
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
    const { theme, colourScheme, title, introText, section } = this.props

    return (
      <HeaderWrapper colourScheme={colourScheme}>
        {width < theme.breakpoints.pxValues.medium ? (
          <NavbarMobile colourScheme={colourScheme} />
        ) : (
          <NavbarDesktop colourScheme={colourScheme} />
        )}
        {title && section !== 'home' && (
          <Hero section={section}>
            <Title>{title}</Title>
            <IntroText>{introText}</IntroText>
          </Hero>
        )}
      </HeaderWrapper>
    )
  }
}

export default withTheme(Header)
