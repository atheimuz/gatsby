import * as React from "react"
import * as styles from "./postItem.module.scss"

export type PostItemType = {
  node: {
    id: string
    frontmatter: {
      title: string
      description: string
      date: string
      categories: string[]
      thumbnail: string
    }
    html: string
  }
}

const PostItem = ({ data }: PostItemType) => {
  console.log(data)
  return (
    <a className={styles.wrapper} href={data.url}>
      <p className={styles.title}>{data.title}</p>
      <span className={styles.desc}>{data.description}</span>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </a>
  )
}

export default PostItem
