import React from "react"
import { Link } from "gatsby"
import pageDesign001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const pageDesign001Data = {
  title: "About",
  navigationList: ["Work", "Services", "Home"],
}

const bgImages = [
  "https://i.pinimg.com/originals/f8/4b/1a/f84b1aac255047f1fd7e67deaef5fce4.gif",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0B03y8DHNc4AX9LN8xI&oh=7f682e3065be226c19ec6d3c9da4d380&oe=5ED61BBC",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/69597561_105940040679096_8986003155812365832_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=D9jpkf1USmwAX9x0sbi&oh=d7a122ad9e7a01c40887affb16ee287d&oe=5ED696CA",
  "https://image.flaticon.com/icons/svg/39/39552.svg"
]

const pageDesign001 = () => {
  const { contactList, navigationList, socialMediaList } = pageDesign001Data
  return (
    <section
      id="pageDesign001"
      className={pageDesign001Style.pageDesign001Component}
    >
      <div className={pageDesign001Style.pageContainer}>
        <header className={pageDesign001Style.header}>
          <h2 className={pageDesign001Style.siteTitle}>SOFTWARE DEVELOPMENT</h2>
          <nav className={pageDesign001Style.navigation}>
            {navigationList.map((item, index) => (
              <Link
                className={pageDesign001Style.link}
                to={item.href}
                key={index}
              >
                <h4 className={pageDesign001Style.title}>
                  {item}
                  <span className={pageDesign001Style.line}></span>
                </h4>
              </Link>
            ))}
          </nav>
        </header>

        <article className={pageDesign001Style.hero}>
          <h1 className={pageDesign001Style.mainTitle}>
            {pageDesign001Data.title}
          </h1>
          <div className={pageDesign001Style.heroImage}>
            <figure className={pageDesign001Style.imageHolder}>
              <img
                className={pageDesign001Style.imageSource}
                src={bgImages[2]}
              />
            </figure>
          </div>
        </article>
      </div>
      <article className={pageDesign001Style.section01}>
        <div className={pageDesign001Style.panelContainer}>
          <div className={pageDesign001Style.panel}>
            <div className={pageDesign001Style.header}>
              <h3 className={pageDesign001Style.number}>01</h3>
              <h2 className={pageDesign001Style.title}>ALEX MIRANDA</h2>
            </div>
            <div className={pageDesign001Style.paragraphBox}>
              <p className={pageDesign001Style.paragraph}>
                Software Development is my passion, fixing or creating things
                with code estimulates and entrertains me.
              </p>
              <Link className={pageDesign001Style.link} to="/work" key="1">
                <h4 className={pageDesign001Style.title}>
                  See Work<span className={pageDesign001Style.line}></span>
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article className={pageDesign001Style.section02}>
        <div className={pageDesign001Style.panelContainer}>
          <div className={pageDesign001Style.panel}>
            <div className={pageDesign001Style.paragraphBox}>
              <div className={pageDesign001Style.imageBox}>
                <figure className={pageDesign001Style.imageHolder}>
                  <img
                    className={pageDesign001Style.imageSource}
                    src={bgImages[0]}
                  />
                </figure>
              </div>
              <p className={pageDesign001Style.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className={pageDesign001Style.header}>
              <h3 className={pageDesign001Style.number}>02</h3>
              <h2 className={pageDesign001Style.title}>PATH</h2>
            </div>
          </div>
          <div className={pageDesign001Style.backgroundImage}>
            <figure className={pageDesign001Style.imageHolder}>
              <img
                className={pageDesign001Style.imageSource}
                src={bgImages[2]}
              />
            </figure>
          </div>
        </div>
      </article>
      <article className={pageDesign001Style.section03}>
        <div className={pageDesign001Style.panelContainer}>
          <div className={pageDesign001Style.panel}>
            <div className={pageDesign001Style.titleBox}>
              <h2 className={pageDesign001Style.title}>Code</h2>
              <h2 className={pageDesign001Style.title}>Build</h2>
              <h2 className={pageDesign001Style.title}>Deploy</h2>
            </div>
            <div className={pageDesign001Style.extraInfo}>
              <span>
                <span className={pageDesign001Style.question}>
                  Current Availability:
                </span>
                <span className={pageDesign001Style.answer}>Remote Work</span>
              </span>

              <span className={pageDesign001Style.division}>/</span>
              <span>
                <span className={pageDesign001Style.question}>Skills:</span>
                <span className={pageDesign001Style.answer}>
                  Frontend & Backend Development
                </span>
              </span>

              <span className={pageDesign001Style.division}>/</span>
              <span>
                <span className={pageDesign001Style.question}>Extras:</span>
                <span className={pageDesign001Style.answer}>UI & UX</span>
              </span>

              <span className={pageDesign001Style.division}>/</span>
            </div>
          </div>
        </div>
      </article>
      <article className={pageDesign001Style.section04}>
        <div className={pageDesign001Style.panelContainer}>
          <div className={pageDesign001Style.tweet}>
            <div className={pageDesign001Style.icon}>
              <div className={pageDesign001Style.imageBox}>
                <figure className={pageDesign001Style.imageHolder}>
                  <img
                    className={pageDesign001Style.imageSource}
                    src={bgImages[3]}
                  />
                </figure>
              </div>
            </div>
            <p className={pageDesign001Style.paragraph}>
              Playing around with the Oculus Go VR Headset ... Made several
              custom covers for the Oculus Go and Google cardboard{" "}
              {/* <span className={pageDesign001Style.hashtags}>
                #tech #code #oculusGo #theMatrix #virtualVirtualReality
                #mirantrix #readyPlayerOne
              </span> */}
            </p>
            <div className={pageDesign001Style.profilePicture}>
              <div className={pageDesign001Style.imageBox}>
                <figure className={pageDesign001Style.imageHolder}>
                  <img
                    className={pageDesign001Style.imageSource}
                    src={bgImages[2]}
                  />
                </figure>
              </div>
              <div className={pageDesign001Style.nameAndLocation}>
                <h4 className={pageDesign001Style.name}>Alex Miranda</h4>
                <p className={pageDesign001Style.location}>Earth</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default pageDesign001
