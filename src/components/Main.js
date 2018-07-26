import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  padding: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h2 {
    padding: 2rem;
  }
`

export default props => <Main>{props.children}</Main>
