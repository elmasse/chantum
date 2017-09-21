
import { hydrate, injectGlobal } from 'emotion'
import styled from 'react-emotion'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

import Link from 'nextein/link'

import Logo from  '../components/logo'
import Nav from '../components/navigation'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

export default withPosts(({ posts }) => {

  injectGlobal`
    html, body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;      
    }
  `

  return (
    <Main>
      <Nav />
      <Header>
        <BiggerLogo />
      </Header>
      <Section>
        {
          posts.map( (post, idx) => {
            return (
              <Post key={`post-${idx}`}>
                {/* <a href={post.data.url}><h2>{post.data.title}</h2></a> */}
                <Link {...post} ><a><h2>{post.data.title}</h2></a></Link>
                <Content  {...post} excerpt />
              </Post>
            )
          })
        }
      </Section>
    </Main>
  )
})


const Main = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Header = styled('header')`
  display: flex;
  justify-content: center;
`

const BiggerLogo = styled(Logo)`
  font-size: 3.5em;
`

const Section = styled('section')`
  margin: 50px 0;
`

const Post = styled('div')`
  max-width: 1000px;
  margin: 70px auto;

  & a {
    text-decoration: none;
    color: #212121;
  }

  & p {
    font-weight: 200;
    color: #888;
    line-height: 1.6;
  }
`