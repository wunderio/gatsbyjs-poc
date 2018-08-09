import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ButtonLink from "./ButtonLink"

const Outer = styled.section`
  display: flex;
  ${props => props.align_content === "left" && css`
    flex-direction: row-reverse;
  `}

  padding: 1.5em 0 0 0;
  text-align: left;
  color: ${({ theme }) => theme.colours.white};

  ${props => props.background === "cyan" && css`
    background: ${({ theme }) => theme.colours.cyan}
  `}

  ${props => props.background === "navy" && css`
    background: ${({ theme }) => theme.colours.navy};
  `}

  ${props => props.background === "red" && css`
    background: ${({ theme }) => theme.colours.red}
  `}

  ${props => props.background === "white" && css`
    background: ${({ theme }) => theme.colours.white};
    color: ${({ theme }) => theme.colours.purpleDark};
  `}
`;

const Title = styled.h3`
  font-size: 2.5rem;
`;

const Inner = styled.div`
  flex: 50%;
  ${props => props.align_content === "right" && css`
    padding: 0 5em 0 1.5em;
  `}
  ${props => props.align_content === "left" && css`
    padding: 0 1.5em 0 5em;
  `}
`;

const Body = styled.p``;

// @todo: Use responsive image plugin.
const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default class FeaturedItem extends React.Component {

  static propTypes = {
    bg: PropTypes.oneOf([
      'cyan', 'navy', 'red', 'white'
    ]),
    align_content: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    link_url: PropTypes.string,
    img_path: PropTypes.string,
  }

  render() {
    const { align_content, bg, title, body, link_url, img_path } = this.props
    return (
      <Outer background={bg} align_content={align_content}>
        <Inner content="image">
          <Img src={ require("../assets/" + img_path) } alt="" />
        </Inner>
        <Inner content="copy" align_content={align_content}>
          <Title>{title}</Title>
          <Body>{body}</Body>
          <ButtonLink type="primary" to={link_url} text="See details" />
        </Inner>
      </Outer>
    )
  }
}
