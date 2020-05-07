import React from "react"
import panel004Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"

const bgImages = [
  "https://i.pinimg.com/originals/f8/4b/1a/f84b1aac255047f1fd7e67deaef5fce4.gif",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/49997673_101944754200565_7238168353960094674_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0B03y8DHNc4AX9LN8xI&oh=7f682e3065be226c19ec6d3c9da4d380&oe=5ED61BBC",
  "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/92701464_2990352984358579_1097127371914200287_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KhsjjXFMiBwAX_hJuFd&oh=ca69b63e0b6654c1520985a9c90411d8&oe=5EDB8E5D",
  "https://image.flaticon.com/icons/svg/39/39552.svg",
]


const Panel004 = () => {
  return (
    <section id="panel004" className={panel004Style.panel004Component}>
      <div className={panel004Style.componentContainer}>
      <article className={panel004Style.section04}>
        <div className={panel004Style.panelContainer}>
          <div className={panel004Style.tweet}></div>
          <div className={panel004Style.tweet}>
            <div className={panel004Style.icon}>
              <div className={panel004Style.imageBox}>
                <figure className={panel004Style.imageHolder}>
                  <img
                    className={panel004Style.imageSource}
                    src={bgImages[3]}
                  />
                </figure>
              </div>
            </div>
            <p className={panel004Style.paragraph}>
              Playing around with the Oculus Go VR Headset ... Made several
              custom covers for the Oculus Go and Google cardboard{" "}
              {/* <span className={panel004Style.hashtags}>
                #tech #code #oculusGo #theMatrix #virtualVirtualReality
                #mirantrix #readyPlayerOne
              </span> */}
            </p>
            <div className={panel004Style.profilePicture}>
              <div className={panel004Style.imageBox}>
                <figure className={panel004Style.imageHolder}>
                  <img
                    className={panel004Style.imageSource}
                    src={bgImages[2]}
                  />
                </figure>
              </div>
              <div className={panel004Style.nameAndLocation}>
                <h4 className={panel004Style.name}>Alex Miranda</h4>
                <p className={panel004Style.location}>Earth</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      </div>
    </section>
  )
}

export default Panel004
