import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Header from "../components/Header"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import Cell from "../components/Cell"

import staticdata from '../../staticdata.json'

import CardBg from "../images/wallpaper.jpg"
import CardBg2 from "../images/wallpaper2.jpg"
import CardBg3 from "../images/wallpaper3.jpg"
import CardBg4 from "../images/wallpaper4.jpg"
import logoReact from "../images/logo-react.png"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
        
        <Wave />

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
    <div className="cards">
      <h2>11 course, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={CardBg}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={CardBg2}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={CardBg3}
        />
        <Card
          title="ARKit 2"
          text="9 sections"
          image={CardBg4}
        />
      </div>
    </div>
    <Section
      image={CardBg2}
      logo={logoReact}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product outline. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage

