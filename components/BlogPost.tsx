import Link from 'next/link'
import { Post } from '../types'

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps): JSX.Element {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <Link href={`/blog/${post.slug}`}>
        <a>Read more</a>
      </Link>
    </article>
  )
}