import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import LandingPage from "../components/landing-page"




const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1LandingPage {
          slug
          landingTemplate {
            title
            socialMediaList {
              text
              href
            }
            navigationList {
              href
              text
            }
            contactList {
              text
            }
          }
          browserPageTitle
          keywords
          metaData
        }
      }
    `}
    render={data => {
      const landingPageData = data.contentfulV1LandingPage

      return (
        <React.Fragment>
           <SEO
            title={landingPageData.browserPageTitle}
            description={landingPageData.metaData}
            keywords={landingPageData.keywords}
          />
          <LandingPage landingPageData={landingPageData.landingTemplate}/>
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
