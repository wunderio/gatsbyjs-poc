import React from "react";
import { Link } from "gatsby";
import styled, { css } from 'styled-components'

const Outer = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colours.red};
`;

const Inner = styled.div`
  flex: 50%;
  padding: 1.5rem 1.5rem 1.5rem 3rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colours.white};
  font-size: 2.5rem;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.colours.white};
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: .5rem 2.5rem;
  border-radius: 5.5em;
  background: ${({ theme }) => theme.colours.white};
  color: ${({ theme }) => theme.colours.cyan};
  box-shadow: 0 4px 1.25em rgba(0, 0, 0, .2);
  font-size: 1.75rem;
  text-decoration: none;
  
  ${props => props.primary && css`
    background: ${({ theme }) => theme.colours.cyan};
    color: ${({ theme }) => theme.colours.white};
  `}
`;

class WeAreHiring extends React.Component {
  render() {
    return (
      <Outer>
        <Inner>
          <Title>We are hiring!</Title>
          <Body>We are always on the lookout for new talent. Do the work you’ll be proud of and learn from others around you in a happy working environment.</Body>
          <ButtonLink primary to={"/careers"}>Careers</ButtonLink>
        </Inner>
        <Inner>
          {/* @todo make image responsive */}
          <img src={ require("../assets/wundercon.jpg") } alt="" width="600" height="400" />
        </Inner>
      </Outer>
    )
  }
}

export default WeAreHiring;
