import React from "react"
import { Link } from "gatsby"
import panel001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const Panel001 = () => {
  return (
    <section id="panel001" className={panel001Style.panel001Component}>
      <div className={panel001Style.componentContainer}>
        <article className={panel001Style.section01}>
          <div className={panel001Style.panelContainer}>
            <div className={panel001Style.panel}>
              <div className={panel001Style.header}>
                <div className={panel001Style.indexBox}>
                  <span className={panel001Style.number}>01</span>
                  <span className={panel001Style.divLine}></span>
                  <span className={panel001Style.number}>07</span>
                </div>
                <h2 className={panel001Style.title}>SOME TITLE</h2>
              </div>
              <div className={panel001Style.paragraphBox}>
                <p className={panel001Style.paragraph}>
                  Software Development is my passion, fixing or creating things
                  with code estimulates and entrertains me.
                </p>
                <Link className={panel001Style.link} to="/work" key="1">
                  <h4 className={panel001Style.title}>
                    See Work<span className={panel001Style.line}></span>
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Panel001
