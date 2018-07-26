import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navbar from './Navbar'

const HeaderWrapper = styled.header`
  min-height: 64rem;
  background-color: ${props => props.theme.colours.navy};
  color: white;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`

const Title = styled.h1`
  font-size: 4rem;
`

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    heroText: PropTypes.string,
  }

  render() {
    return (
      <HeaderWrapper>
        <Navbar />
        <Hero>
          <Title>{this.props.title}</Title>
        </Hero>
      </HeaderWrapper>
    )
  }
}
