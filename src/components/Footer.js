import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { legalLinks } from '../data/data'
import logo from '../assets/carrot-with-text.svg'

const StyledFooter = styled.footer`
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colours.navy};
`

const SocialSection = styled.section`
  background-color: ${props => props.theme.colours.darkHotPink};
  height: 7rem;
`

const LegalSection = styled.section`
  background-color: ${props => props.theme.colours.navy};
  max-width: ${props => props.theme.layout.maxBodyWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 0 4rem;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.medium} {
    flex-direction: row;
    justify-content: space-around;
    padding: 8rem 0;
  }
`

const LegalList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 3.5rem;
`

const LegalListItem = styled.li`
  @media ${props => props.theme.breakpoints.small} {
    display: inline-flex;
    padding-left: 1.8rem;
    padding-right: 1.8rem;

    :nth-child(even) {
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.4rem;

    :hover {
      text-decoration: underline;
      text-decoration-style: double;
    }
  }
`

export default class Footer extends React.Component {
  render() {
    const baseUrl = '//localhost:8000'
    return (
      <StyledFooter>
        {/* Social links are #todo */}
        <SocialSection />
        <LegalSection>
          <img src={logo} alt="carrot-logo" />
          <LegalList>
            {Object.keys(legalLinks).map(key => (
              <LegalListItem key={key}>
                <Link to={`${baseUrl}/${legalLinks[key].link}`}>
                  {legalLinks[key].text}
                </Link>
              </LegalListItem>
            ))}
          </LegalList>
        </LegalSection>
      </StyledFooter>
    )
  }
}
