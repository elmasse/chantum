
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
      <Post
        {...post}
        renderers={{
          blockquote: Blockquote,
          h3: H3,
          p: Paragraph
        }}
      />
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
  & h1 {
    font-size: 40px;
  }
`

const Section = styled('section')`
  margin: 50px 0;
`

const Post = styled(Content)`
  max-width: 740px;
  margin: 70px auto;
  font-family: Georgia, serif;  
  font-weight: 200;
  font-style: normal;
  font-size: 21px;
  line-height: 1.58;
  letter-spacing: -.003em;
  color: #424242;
`

const Blockquote = styled('blockquote')`
  padding: 20px 0;
  color: #888;
  font-size: 26px;
  position: relative;
  
  &:before {
    content: open-quote;
    font-size: 150px;
    position: absolute;
    top: -40px;
    left: -60px;
    color: #ccc;
    z-index: -1;
  }
`
const H3 = styled('h3')`
  margin: 56px 0 0 -2px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #212121;
  line-height: 32px;
  letter-spacing: -0.25px;
`

const Paragraph = styled('p')`
  margin: 8px 0 0;
`