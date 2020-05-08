import React from "react"
import { Link } from "gatsby"
import panel007Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const list = [
  {
    title: "Carbón Agency",
    paragraph:
      "A multi-cultural creative agency based in San Diego, CA. We love creating meaningful design solutions and experiences for brands.",
    listOfList: [
      "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/95497810_654738792032599_3635120120150192497_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-wXGjOMSHFoAX9DMZDi&oh=c8f592937158523c23f82084afb7b6ad&oe=5EDB0B11",
      "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=tnPX_sHH4qoAX_aNi5s&oh=931771b098343045466b7b62fe0caa02&oe=5EDE04BC",
    ],
    stack: ["JavaScript", "React", "Gatsby", "GraphQL"],
  },
  {
    title: "Grio Software Company",
    paragraph:
      "Great software requires thoughtful strategy, creative design, and cutting-edge engineering. We provide all three—and more. Learn about our services below.",
    listOfList: [
      "https://pbs.twimg.com/media/EWzEfK5UwAAeE53?format=jpg&name=medium",
      "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/67344948_128041488519177_3229921938500283462_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=q0SNkMEGvGIAX_Q3Xax&oh=17d464bf16b12a055cbd449972901cec&oe=5EDAFAC1",
    ],
    stack: ["JavaScript", "React", "CircleCI", "AWS Lambda"],
  },
]

const Panel007 = () => {
  return (
    <section id="panel007" className={panel007Style.panel007Component}>
      <div className={panel007Style.componentContainer}>
        <article className={panel007Style.section07}>
          <div className={panel007Style.panelContainer}>
            <div className={panel007Style.skillBox}>
              <div className={panel007Style.header}>
                <div className={panel007Style.indexBox}>
                  <span className={panel007Style.number}>01</span>
                  <span className={panel007Style.divLine}></span>
                  <span className={panel007Style.number}>07</span>
                </div>
                <h2 className={panel007Style.title}>WORKS</h2>
              </div>
              <div className={panel007Style.listMain}>
                {list.map((item, index) => (
                  <div className={panel007Style.itemMain} key={index}>
                    <div className={panel007Style.client}>
                      <h3 className={panel007Style.title}>{item.title}</h3>
                      <p className={panel007Style.paragraph}>
                        {item.paragraph}
                      </p>
                      <div className={panel007Style.extraInfo}>
                        <span className={panel007Style.question}>Stack:</span>
                        {item.stack.map((item, index) => (
                          <span className={panel007Style.answer}>
                            {item}
                            <span className={panel007Style.division}>/</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={panel007Style.listSecondary}>
                      {item.listOfList.map((item, index) => (
                        <div
                          className={panel007Style.itemSecondary}
                          key={index}
                        >
                          <figure className={panel007Style.imageHolder}>
                            <img
                              className={panel007Style.imageSource}
                              src={item}
                            />
                          </figure>
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

export default Panel007
