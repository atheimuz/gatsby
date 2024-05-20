import * as React from "react"
import * as styles from "./postItem.module.scss"

const PostItem = ({ data }) => (
  <a className={styles.wrapper} href={data.url}>
    <p className={styles.title}>{data.text}</p>
    <span className={styles.desc}>{data.description}</span>
  </a>
)

export default PostItem
