import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import header001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const header001Data = {
  navigationList: [
    { title: "Work", path: "/work" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
  ],
}

const Header001 = () => {
  const { navigationList } = header001Data

  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(window.location.pathname + window.location.search)
  })

  return (
    <section id="header001" className={header001Style.header001Component}>
      <div className={header001Style.componentContainer}>
        <header className={header001Style.header}>
          <div className={header001Style.siteTitle}>
            <Link className={header001Style.title} to="/">
              SOFTWARE DEVELOPMENT
            </Link>
            <h2 className={header001Style.year}>
              2020<span className={header001Style.registered}>®</span>
            </h2>
          </div>

          <nav className={header001Style.navigation}>
            {navigationList.map((item, index) => (
              <React.Fragment>
                {path === item.path ? (
                  <span className={header001Style.link}>
                  <h4 className={header001Style.activeTitle}>
                    {item.title}
                    <span className={header001Style.activeLine}></span>
                  </h4>
                  </span>
                ) : (
                  <Link
                    className={header001Style.link}
                    to={item.path}
                    key={index}
                  >
                    <h4 className={header001Style.title}>
                      {item.title}
                      <span className={header001Style.line}></span>
                    </h4>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header001
