import React from "react"
import pageDesign001Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"
import Header001 from "../header-001"
import Hero001 from "../hero-001"
import Panel001 from "../panel-001"
import Panel002 from "../panel-002"
import Panel003 from "../panel-003"
import Panel004 from "../panel-004"

const aboutData = {mainTitle:"About", heroImage:"https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/70185525_140306647222044_7151595098728929950_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=IT4BRrxJhv0AX_jAtJl&oh=18d466a5dde55b6612207a6ad9baf92c&oe=5EDBE6A5"}


const pageDesign001 = () => {
  return (
    <section
      id="pageDesign001"
      className={pageDesign001Style.pageDesign001Component}
    >
      <div className={pageDesign001Style.pageContainer}>
        <Header001 />
        <Hero001 data={aboutData}/>
      </div>
      <Panel001/>
      <Panel002/>
      <Panel003/>
      <Panel004/>
    </section>
  )
}

export default pageDesign001
