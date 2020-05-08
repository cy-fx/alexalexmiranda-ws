import React from "react"
import pageDesign003Style from "./style.module.scss"
import "../../reusable-styles/styles.scss"
import Header001 from "../header-001"
import Hero001 from "../hero-001"
import Panel007 from "../panel-007"
import Panel006 from "../panel-006"


const workData = {mainTitle:"Work", heroImage: "https://instagram.fmex11-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/43185048_151027205858813_2222619737500493140_n.jpg?_nc_ht=instagram.fmex11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2KGh23lRRDoAX9kr7Yn&oh=0a6ecd3c1e592085bc91d6381fb42d91&oe=5EDD8CE0"}


const PageDesign003 = () => {
  return (
    <section
      id="pageDesign003"
      className={pageDesign003Style.pageDesign003Component}
    >
      <div className={pageDesign003Style.pageContainer}>
        <Header001 />
        <Hero001 data={workData}/>
      </div>
      <Panel007/>
      <Panel006/>
     
    </section>
  )
}

export default PageDesign003
