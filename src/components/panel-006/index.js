import React from "react"
import { Link } from "gatsby"
import panel006Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const bgImages = [
  "https://i.pinimg.com/originals/f8/4b/1a/f84b1aac255047f1fd7e67deaef5fce4.gif",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0B03y8DHNc4AX9LN8xI&oh=7f682e3065be226c19ec6d3c9da4d380&oe=5ED61BBC",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/69597561_105940040679096_8986006155812365832_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=D9jpkf1USmwAX9x0sbi&oh=d7a122ad9e7a01c40887affb16ee287d&oe=5ED696CA",
  "https://image.flaticon.com/icons/svg/39/39552.svg",
]


const Panel006 = () => {
  return (
    <section id="panel006" className={panel006Style.panel006Component}>
      <div className={panel006Style.componentContainer}>
      <article className={panel006Style.section06}>
        <div className={panel006Style.panelContainer}>
          <div className={panel006Style.panel}>
            <div className={panel006Style.titleBox}>
              <h2 className={panel006Style.title}>Work</h2>
              <span className={panel006Style.divLine}></span>
              <h2 className={panel006Style.title}>Iterate</h2>
            </div>
            <div className={panel006Style.extraInfo}>
              <span>
                <span className={panel006Style.question}>
                  Current Availability:
                </span>
                <span className={panel006Style.answer}>Remote Work</span>
              </span>

              <span className={panel006Style.division}>/</span>
              <span>
                <span className={panel006Style.question}>Skills:</span>
                <span className={panel006Style.answer}>
                  Frontend & Backend Development
                </span>
              </span>

              <span className={panel006Style.division}>/</span>
              <span>
                <span className={panel006Style.question}>Extras:</span>
                <span className={panel006Style.answer}>UI & UX</span>
              </span>

              <span className={panel006Style.division}>/</span>
            </div>
          </div>
        </div>
      </article>
      </div>
    </section>
  )
}

export default Panel006
