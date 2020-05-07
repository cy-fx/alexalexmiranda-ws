import React from "react"
import { Link } from "gatsby"
import panel005Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const list = [
  {
    title: "Frontend",
    listOfList: ["JavaScript", "React", "Gatsby", "GraphQL"],
  },
  { title: "Backend", listOfList: ["NodeJS", "ExpressJS", "MongoDB"], },
  { title: "Other",listOfList: ["GitHub", "CircleCI", "AWS"], },
  { title: "CMS", listOfList: ["Contentful", "Wordpress", "Squarespace",], },
]

const Panel005 = () => {
  return (
    <section id="panel005" className={panel005Style.panel005Component}>
      <div className={panel005Style.componentContainer}>
        <article className={panel005Style.section05}>
          <div className={panel005Style.panelContainer}>
            <div className={panel005Style.panel}>
              <div className={panel005Style.header}>
                <div className={panel005Style.indexBox}>
                  <span className={panel005Style.number}>01</span>
                  <span className={panel005Style.divLine}></span>
                  <span className={panel005Style.number}>07</span>
                </div>
                <h2 className={panel005Style.title}>SOFTWARE DEVELOPMENT</h2>
              </div>
              <div className={panel005Style.paragraphBox}>
                <p className={panel005Style.paragraph}>
                  Software Development is my passion, fixing or creating things
                  with code estimulates and entrertains me.
                </p>
              </div>
            </div>
            <div className={panel005Style.skillBox}>
              <div className={panel005Style.header}>
                <h2 className={panel005Style.title}>SKILLS / TOOLS</h2>
              </div>
              <div className={panel005Style.listMain}>
                {list.map((item, index) => (
                  <div className={panel005Style.itemMain} key={index}>
                    <h3 className={panel005Style.title}>{item.title}</h3>
                    <div className={panel005Style.listSecondary}>
                      {item.listOfList.map((item, index) => (
                        <div
                          className={panel005Style.itemSecondary}
                          key={index}
                        >
                          <h3 className={panel005Style.title}>{item}</h3>
                          <span className={panel005Style.coma}>,</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Panel005
