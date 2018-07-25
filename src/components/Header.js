import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #2274a5;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-bottom: 5rem;
`

const Title = styled.h1`
  color: #ffbf00;
`

const Subtitle = styled.p`
  color: #fff;
`

export default props => (
  <Header>
    <Title>{props.title || 'Some Default Title'}</Title>
    <Subtitle>Psst! I'm the Header component!</Subtitle>
  </Header>
)
