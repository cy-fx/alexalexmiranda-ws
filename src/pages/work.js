import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import PageDesign003 from "../components/page-design-003"

const About = () => (
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
            backgroundImage {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          browserPageTitle
          keywords
          metaData
          
        }
      }
    `}
    render={data => {
      const aboutPageData = data.contentfulV1LandingPage

      return (
        <React.Fragment>
          <SEO
            title={aboutPageData.browserPageTitle}
            description={aboutPageData.metaData}
            keywords={aboutPageData.keywords}
          />
          <PageDesign003 aboutPageData={aboutPageData.landingTemplate}/>
        </React.Fragment>
      )
    }}
  />
)

export default About
