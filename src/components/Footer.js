import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5rem 0;
  text-align: center;
  background-color: #333;
  color: #fff;
`

export default () => (
  <Footer>
    <p>I'm the Footer component!</p>
  </Footer>
)
