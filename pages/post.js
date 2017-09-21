
import { hydrate, injectGlobal } from 'emotion'
import styled from 'react-emotion'

import withPost, { Content } from 'nextein/post'

import Nav from '../components/navigation'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

export default withPost(({ post }) => {

  injectGlobal`
    html, body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;      
    }
  `

  return (
    <Main>
      <Nav showHome />
      <Header>
        <h1>{post.data.title}</h1>
      </Header>
      <Post {...post} />
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

const Section = styled('section')`
  margin: 50px 0;
`

const Post = styled(Content)`
  max-width: 1000px;
  margin: 70px auto;
`