import * as React from "react"
import * as styles from "./template.module.scss"

const Template = ({ children }) => (
  <div clssName={styles.wrapper}>{children}</div>
)

export default Template
