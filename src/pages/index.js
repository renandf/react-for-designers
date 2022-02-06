import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <div className="hero">
      <div className="heroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <p>Now go build something great.</p>
        {/* StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        /> */}
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
        
        <svg width="100%" height="150" viewBox="0 0 500 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="8s"
              values="
              M0 75C0 75 35 0 126 0C217 0 280 86.1487 356 86.1487C432 86.1487 500 38.5135 500 38.5135V150H0V75Z;

              M0 23.8684C0 23.8684 57 76 148 76C239 76 271 0 364 0C457 0 500 61 500 61V150H0V23.8684Z;

              M0 75C0 75 35 0 126 0C217 0 280 86.1487 356 86.1487C432 86.1487 500 38.5135 500 38.5135V150H0V75Z
              " />
          </path>
        </svg>
        <div className="logos">
          <StaticImage
            src="../images/logo-sketch.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="Sketch logo"
          />
          <StaticImage
            src="../images/logo-figma.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="Figma logo"
          />
          <StaticImage
            src="../images/logo-studio.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="Studio logo"
          />
          <StaticImage
            src="../images/logo-framer.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="Framer logo"
          />
          <StaticImage
            src="../images/logo-react.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="React logo"
          />
          <StaticImage
            src="../images/logo-swift.png"
            width={50}
            quality={95}
            objectFit="contain"
            alt="Swift logo"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

