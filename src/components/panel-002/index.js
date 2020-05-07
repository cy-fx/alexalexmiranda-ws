import React from "react"
import { Link } from "gatsby"
import panel002Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const bgImages = [
  "https://i.pinimg.com/originals/f8/4b/1a/f84b1aac255047f1fd7e67deaef5fce4.gif",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0B03y8DHNc4AX9LN8xI&oh=7f682e3065be226c19ec6d3c9da4d380&oe=5ED61BBC",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/67344948_128041488519177_3229921938500283462_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=IUzye9GgZWwAX90HEZZ&oh=04a35df8f2265b29becd5ad7a952bd2d&oe=5EDAFAC1",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/e35/68660178_376595803006898_5824380496025654273_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wdAtjQdQuiYAX9g1tUJ&oh=90b328333b8ccf6a1e13df07fb7e2f09&oe=5ED9B998",
]


const Panel002 = () => {
  return (
    <section id="panel002" className={panel002Style.panel002Component}>
      <div className={panel002Style.componentContainer}>
      <article className={panel002Style.section02}>
        <div className={panel002Style.panelContainer}>
          <div className={panel002Style.panel}>
            <div className={panel002Style.paragraphBox}>
              <div className={panel002Style.imageBox}>
                <figure className={panel002Style.imageHolder}>
                  <img
                    className={panel002Style.imageSource}
                    src={bgImages[3]}
                  />
                </figure>
              </div>
              <p className={panel002Style.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className={panel002Style.header}>
            <div className={panel002Style.indexBox}>
                  <span className={panel002Style.number}>02</span>
                  <span className={panel002Style.divLine}></span>
                  <span className={panel002Style.number}>07</span>
                </div>
              <h2 className={panel002Style.title}>PATH</h2>
            </div>
          </div>
          <div className={panel002Style.backgroundImage}>
            <figure className={panel002Style.imageHolder}>
              <img
                className={panel002Style.imageSource}
                src={bgImages[2]}
              />
            </figure>
          </div>
        </div>
      </article>
      </div>
    </section>
  )
}

export default Panel002
