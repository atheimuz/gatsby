import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Link to="/">{siteTitle}</Link>
    </div>
  </header>
)

export default Header
