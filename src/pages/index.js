import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"




const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulV1HomePage {
          slug
          metaData
          browserPageTitle
          keywords
        }
      }
    `}
    render={data => {
      const homePageData = data.contentfulV1HomePage

      return (
        <React.Fragment>
           <SEO
            title={homePageData.browserPageTitle}
            description={homePageData.metaData}
            keywords={homePageData.keywords}
          />
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
