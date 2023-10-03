export interface Author {
    name: string
    picture: string
  }
  
  export interface Post {
    title: string
    date: string
    coverImage: string
    excerpt: string
    author: Author
    ogImage: {
      url: string
    }
    slug: string
    contentHtml: string
  }