import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import landingPageStyle from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const bgImages = [
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/95312078_2602931429979651_5221258345748146028_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=sCckiDBm-T4AX9vqOEp&oh=804f3cd3f924a0d1da099436215847b4&oe=5ED91C83",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0B03y8DHNc4AX9LN8xI&oh=7f682e3065be226c19ec6d3c9da4d380&oe=5ED61BBC",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/69597561_105940040679096_8986003155812365832_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=D9jpkf1USmwAX9x0sbi&oh=d7a122ad9e7a01c40887affb16ee287d&oe=5ED696CA",
]

const LandingPage = ({ landingPageData }) => {
  const { contactList, navigationList, socialMediaList } = landingPageData
  return (
    <BackgroundImage
      Tag="section"
      fluid={landingPageData.backgroundImage.fluid}
      className={landingPageStyle.landingPageBg}
    >
      <section
        id="landingPage"
        className={landingPageStyle.landingPageComponent}
      >
        <div className={landingPageStyle.pageContainer}>
          <h1 className={landingPageStyle.mainTitle}>
            {landingPageData.title}
          </h1>
          <nav className={landingPageStyle.navigation}>
            {navigationList.map((item, index) => (
              <div className={landingPageStyle.items}>
                <Link
                  className={landingPageStyle.link}
                  to={item.href}
                  key={index}
                >
                  <span className={landingPageStyle.navigationNumber}>{`0${
                    index + 1
                  }`}</span>
                  <h2 className={landingPageStyle.title}>
                    {item.text} <span className={landingPageStyle.line}></span>
                  </h2>
                  <figure className={landingPageStyle.imageHolder}>
                    <img
                      className={landingPageStyle.imageSource}
                      src={bgImages[index]}
                    />
                  </figure>
                </Link>
              </div>
            ))}
          </nav>

          <footer className={landingPageStyle.footer}>
            <article
              className={`${landingPageStyle.contact} ${landingPageStyle.column}`}
            >
              {contactList.map((item, index) => (
                <p className={landingPageStyle.contactItem} key={index}>
                  {item.text}
                </p>
              ))}
            </article>
            <article className={`${landingPageStyle.socialMedia}`}>
              <div className={`${landingPageStyle.container}`}>
                {socialMediaList.map((item, index) => (
                  <a
                    target="_blank"
                    rel="noopener"
                    className={landingPageStyle.socialMediaItem}
                    href={item.href}
                    key={index}
                  >
                    {item.text}
                    <span className={landingPageStyle.coma}>,</span>
                  </a>
                ))}
              </div>
            </article>
          </footer>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default LandingPage
