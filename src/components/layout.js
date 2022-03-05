/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

 
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
            keywords
          }
        }
        allAirtable (sort: { fields: rowIndex }) {
          edges {
            node {
              data {
                id
                number
                title
                podcast
              }
            }
          }
        }
      }
    `);

    return (
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer data={data}> 
          © {new Date().getFullYear()} {data.site.siteMetadata.title} Built with Gatsby. Backgrounds made in Cinema 4D, i0S app in Swift, site inReact. <a href="mailto: support@designcode.io">Email us</a> to ask anything. <br/>
        </Footer>
      </>
    )
  }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 