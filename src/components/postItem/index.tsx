import * as React from "react"
import * as styles from "./postItem.module.scss"

export type PostItemType = {
  data: {
    url: string
    text: string
    description: string
  }
}

const PostItem = ({ data }: PostItemType) => (
  <a className={styles.wrapper} href={data.url}>
    <p className={styles.title}>{data.text}</p>
    <span className={styles.desc}>{data.description}</span>
  </a>
)

export default PostItem
