import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {

  return (
    <main>
      <header>
      <h1>{post.data.title}</h1>
      </header>
      <Content {...post} />
    </main>
  )

})