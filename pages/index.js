import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {

  return (
    <main>
      <header>
        <h1>Chantum</h1>
      </header>
      <section>
        {
          posts.map( (post, idx) => <Content key={`post-${idx}`} {...post} excerpt /> )
        }
      </section>
    </main>
  )
})