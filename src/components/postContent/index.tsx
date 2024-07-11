import * as React from "react"
import * as styles from "./postContent.module.scss"

export type PostContentType = {
  html: string
}

const postContent = (data: PostContentType) => (
  <div className={styles.wrapper}>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  </div>
)

export default postContent
