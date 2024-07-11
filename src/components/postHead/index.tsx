import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as styles from "./postHead.module.scss"

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

export type PostHeadType = {
  title: string
  description: string
  date: string
  thumbnail: GatsbyImgProps
}

const postHead = ({ thumbnail, title }: PostHeadType) => (
  <div className={styles.wrapper}>
    <GatsbyImage image={thumbnail} className={styles.thumbnail} />
    <h2 className={styles.title}>{title}</h2>
  </div>
)

export default postHead
