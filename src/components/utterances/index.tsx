import React, { useEffect, useRef } from "react"
import * as styles from "./utterances.module.scss"

type UtterancesAttributesType = {
  src: string
  repo: string
  "issue-term": string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const utterances = () => {
  const element = useRef()

  useEffect(() => {
    if (element.current) {
      const utterances: HTMLScriptElement = document.createElement("script")

      const attributes: UtterancesAttributesType = {
        src: "https://utteranc.es/client.js",
        repo: "atheimuz/gatsby",
        "issue-term": "pathname",
        label: "Comment",
        theme: `github-light`,
        crossorigin: "anonymous",
        async: "true",
      }

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value)
      })

      element.current.appendChild(utterances)
    }
  }, [])

  return <div className={styles.wrapper} ref={element} />
}

export default utterances
