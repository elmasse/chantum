import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

import Link from 'nextein/link'

export default withPosts(({ posts }) => {

  return (
    <main>
      <header>
        <h1>Chantum</h1>
      </header>
      <section>
        {
          posts.map( (post, idx) => {
            return (
              <div key={`post-${idx}`}>
                <a href={post.data.url}><h2>{post.data.title}</h2></a>
                {/* <Link {...post} ><a><h2>{post.data.title}</h2></a></Link> */}
                <Content  {...post} excerpt />
              </div>
            )
          })
        }
      </section>
    </main>
  )
})