import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import defaultImg from '../assets/wundercon.jpg'

const Post = styled.li`
  margin: 5.5rem 0;
  box-shadow: 0 4px 1.25em rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 1px 0.5em rgba(0, 0, 0, 0.2);

    h2 {
      color: ${props => props.theme.colours.cyan};
    }
  }
`

const WrappingLink = styled(Link)`
  text-decoration: none;
  display: block;

  @media ${props => props.theme.breakpoints.small} {
    display: flex;
  }
`

const PostImage = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 30rem;

  @media ${props => props.theme.breakpoints.small} {
    width: 50%;
  }
`

const PostInfo = styled.div`
  padding: 2.5rem;
  text-align: left;

  @media ${props => props.theme.breakpoints.small} {
    width: 50%;
  }
`

const Date = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${props => props.theme.colours.textGray};
`

const Title = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colours.navy};
`

export default class BlogPost extends React.Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const { post } = this.props

    return (
      <Post>
        <WrappingLink to={post.fields.slug}>
          <PostImage img={post.img || defaultImg} />
          <PostInfo>
            <Date>{post.frontmatter.date}</Date>
            <Title>{post.frontmatter.title}</Title>
            {/* <AuthorInfo> */}
            {/* <Avatar image={} /> */}
            {/* </AuthorInfo> */}
          </PostInfo>
        </WrappingLink>
      </Post>
    )
  }
}
