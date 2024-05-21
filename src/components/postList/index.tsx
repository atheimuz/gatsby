import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./postList.module.scss"
import PostItem, { PostItemType } from "components/postItem"

export type PostType = {
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

const PostList: FunctionComponent<{}> = function () {
  const {
    allMarkdownRemark: { edges: postList },
  } = useStaticQuery(graphql`
    query getPostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "YYYY.MM.DD.")
              categories
              thumbnail
            }
            html
          }
        }
      }
    }
  `)

  return (
    <div className={styles.list}>
      {postList.map((item: PostType) => (
        <PostItem data={item.node} />
      ))}
    </div>
  )
}

export default PostList
