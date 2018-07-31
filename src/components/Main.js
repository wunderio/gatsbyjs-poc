import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  max-width: ${props => props.theme.layout.maxBodyWidth};
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
`

export default props => <Main>{props.children}</Main>
