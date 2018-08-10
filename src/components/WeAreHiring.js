import React from "react";
import styled from 'styled-components'
import ButtonLink from "./ButtonLink"

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

class WeAreHiring extends React.Component {
  render() {
    return (
      <Outer>
        <Inner>
          <Title>We are hiring!</Title>
          <Body>We are always on the lookout for new talent. Do the work you’ll be proud of and learn from others around you in a happy working environment.</Body>
          <ButtonLink type="primary" to="/careers" text="Careers" />
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
