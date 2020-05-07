import React from "react"
import { Link } from "gatsby"
import header001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const header001Data = {
  navigationList: ["Work", "Services", "Home"],
}

const Header001 = () => {
  const { navigationList } = header001Data
  return (
    <section id="header001" className={header001Style.header001Component}>
      <div className={header001Style.componentContainer}>
        <header className={header001Style.header}>
          <div className={header001Style.siteTitle}>
            <h2 className={header001Style.title}>SOFTWARE DEVELOPMENT</h2>
            <h2 className={header001Style.title}>
              2020<span className={header001Style.registered}>®</span>
            </h2>
          </div>

          <nav className={header001Style.navigation}>
            {navigationList.map((item, index) => (
              <Link className={header001Style.link} to={item.href} key={index}>
                <h4 className={header001Style.title}>
                  {item}
                  <span className={header001Style.line}></span>
                </h4>
              </Link>
            ))}
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header001
