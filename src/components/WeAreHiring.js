import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const Outer = styled.section`
  background: ${({ theme }) => theme.colours.red};
  display: flex;
`;

const Inner = styled.div`
  flex: 50%;
  padding: 1.5rem 1.5rem 1.5rem 3rem;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colours.white};
`;

const Body = styled.p`
  color: ${({ theme }) => theme.colours.white};
`;

const ButtonLink = styled(Link)`
  background: ${({ theme }) => theme.colours.cyan};
  border-radius: 5.5em;
  box-shadow: 0 4px 1.25em rgba(0, 0, 0, .2);
  color: ${({ theme }) => theme.colours.white};
  display: inline-block;
  padding: .5rem 2.5rem;
  text-decoration: none;
  font-size: 1.75rem;
`;

class WeAreHiring extends React.Component {
  render() {
    return (
      <Outer>
        <Inner>
          <Title>We are hiring!</Title>
          <Body>We are always on the lookout for new talent. Do the work you’ll be proud of and learn from others around you in a happy working environment.</Body>
          <ButtonLink to={"/careers"}>Careers</ButtonLink>
        </Inner>
        <Inner>
          <img src={ require("../assets/wundercon.jpg") } alt="" width="600" height="400" />
        </Inner>
      </Outer>
    )
  }
}

export default WeAreHiring;
