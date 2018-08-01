import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import defaultImg from '../assets/wundercon.jpg'
import defaultAvatar from '../assets/default-avatar.png'

const Post = styled.li`
  margin: 5.5rem 0;
  box-shadow: 0 4px 1.25em rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 1px 0.5em rgba(0, 0, 0, 0.2);

    h2 {
      color: ${({ theme }) => theme.colours.cyan};
    }
  }
`

const WrappingLink = styled(Link)`
  text-decoration: none;
  display: block;

  @media ${({ theme }) => theme.breakpoints.small} {
    display: flex;
  }
`

const PostImage = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 30rem;

  @media ${({ theme }) => theme.breakpoints.small} {
    width: 50%;
  }
`

const PostInfo = styled.div`
  padding: 2.5rem;
  text-align: left;

  @media ${({ theme }) => theme.breakpoints.small} {
    width: 50%;
  }
`

const Date = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colours.textGray};
`

const Title = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colours.navy};
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3.5rem;
`

const AuthorAvatar = styled.img`
  width: 7rem;
  height: 7rem;
  margin-right: 1.5rem;
  border-radius: 50%;
  border: 1px solid navy;
`

const AuthorText = styled.span`
  color: ${({ theme }) => theme.colours.navy};
  font-weight: 300;
`

export default class BlogPost extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      // The below don't exist yet; placeholder until JSON api is ready
      img: PropTypes.string,
      authorPhoto: PropTypes.string,
    }),
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
            <AuthorInfo>
              <AuthorAvatar src={post.authorPhoto || defaultAvatar} />
              <AuthorText>By {post.frontmatter.author}</AuthorText>
            </AuthorInfo>
          </PostInfo>
        </WrappingLink>
      </Post>
    )
  }
}
