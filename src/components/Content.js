import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  padding: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h2 {
    padding: 2rem;
  }

  p {
    padding: 1.5rem;
    line-height: 1.8;
  }
`

export default props => <Content>{props.children}</Content>
