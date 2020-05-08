import React from "react"
import pageDesign002Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"
import Header001 from "../header-001"
import Hero001 from "../hero-001"
import Panel005 from "../panel-005"
import Panel006 from "../panel-006"


const servicesData = {mainTitle:"Services", heroImage: "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/61753403_1396563710491990_8605283029514046525_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CA-K6G6519QAX8l-Pr8&oh=b6ee1beb8fa5b2b27514157d42f77ea1&oe=5EDE3A50"}


const PageDesign002 = () => {
  return (
    <section
      id="pageDesign002"
      className={pageDesign002Style.pageDesign002Component}
    >
      <div className={pageDesign002Style.pageContainer}>
        <Header001 />
        <Hero001 data={servicesData}/>
      </div>
      <Panel005/>
      <Panel006/>
     
    </section>
  )
}

export default PageDesign002
