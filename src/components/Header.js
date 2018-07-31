import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const HeaderWrapper = styled.header`
  /* min-height: 64rem; */
  background-color: ${props =>
    props.theme.colours[
      props.colourScheme === 'standard' ? 'navy' : 'robinsEggBlue'
    ]};
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

export default class Header extends React.Component {
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

    return (
      <HeaderWrapper colourScheme={this.props.colourScheme}>
        {width > 1000 ? (
          <NavbarDesktop colourScheme={this.props.colourScheme} />
        ) : (
          <NavbarMobile colourScheme={this.props.colourScheme} />
        )}
        <Hero>
          <Title>{this.props.title}</Title>
        </Hero>
      </HeaderWrapper>
    )
  }
}
