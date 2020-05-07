import React from "react"
import hero001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"



const Hero001 = ({data}) => {
  return (
    <section id="hero001" className={hero001Style.hero001Component}>
      <div className={hero001Style.componentContainer}>
        <article className={hero001Style.hero}>
          <h1 className={hero001Style.mainTitle}>({data.mainTitle})</h1>
          <div className={hero001Style.heroImage}>
            <figure className={hero001Style.imageHolder}>
              <img className={hero001Style.imageSource} src={data.heroImage} />
            </figure>
            <div className={hero001Style.imageFooter}>
              <span className={hero001Style.key}>Description:</span>
              <span className={hero001Style.value}>
                Unecesary description only for aesthetic purposes.
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero001
