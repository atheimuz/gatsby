import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./postItem.module.scss"

export type PostItemType = {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    description: string
    date: string
    categories: string[]
    thumbnail: string
  }
  html: string
}

const PostItem = ({ data }: PostItemType) => {
  console.log(data)
  return (
    <Link className={styles.wrapper} to={data.fields.slug}>
      <p className={styles.title}>{data.frontmatter.title}</p>
      <span className={styles.desc}>{data.frontmatter.description}</span>
    </Link>
  )
}

export default PostItem
