import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Template from "components/template"
import PostHead from "components/postHead"
import PostContent from "components/postContent"
import { PostItemType } from "components/postItem"
import Utterances from "components/utterances"

export type PostPageItemType = {
  node: PostItemType
}

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0]

  return (
    <Template>
      <PostHead title={title} date={date} thumbnail={gatsbyImageData} />
      <PostContent html={html} />
      <Utterances />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
        }
      }
    }
  }
`
