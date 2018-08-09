import React from "react";
import PropTypes from 'prop-types'
import { Link } from "gatsby";
import styled, { css } from 'styled-components';

const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border-radius: 5.5em;
  box-shadow: 0 4px 1.25em rgba(0,0,0,.2);
  font-size: 1.75rem;
  padding: 1rem 3rem .75rem 3rem;
  background: ${({ theme }) => theme.colours.white};
  color: ${({ theme }) => theme.colours.cyan};

  ${props => props.type === "primary" && css`
    background: ${({ theme }) => theme.colours.cyan};
    color: ${({ theme }) => theme.colours.white};
  `}

  &:hover {
    box-shadow: 0 1px 0.5em rgba(0,0,0,.2);
  }

`;

class ButtonLink extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string,
  }

  render() {

    const { text, to, type } = this.props
    return (
      <Button type={type} to={to}>{text}</Button>
    )
  }
}

export default ButtonLink;
