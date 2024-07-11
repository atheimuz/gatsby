import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./postList.module.scss"
import PostItem, { PostItemType } from "components/postItem"

export type PostType = {
  node: PostItemType
}

const PostList: FunctionComponent<{}> = function () {
  const {
    allMarkdownRemark: { edges: postList },
  } = useStaticQuery(graphql`
    query getPostList {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "YYYY.MM.DD.")
              categories
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 768, height: 400)
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  return (
    <ul className={styles.list}>
      {postList.map((item: PostType) => (
        <li key={item.node.id} className={styles.item}>
          <PostItem data={item.node} />
        </li>
      ))}
    </ul>
  )
}

export default PostList
