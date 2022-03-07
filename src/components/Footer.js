import React from "react"
import styled from "styled-components"

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  gap: 20px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`

const CopyRight = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 51%, #9b51e0 100%) var(--x, 0)/ 200%;
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: box-shadow 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
              background-position 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
    --x: 100%;
  }
`
const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  a {
    transition: 0.8s;
  }

  a:hover {
    color: black;
  }
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>
      Tweet "Prototype and build apps with React and Swift. New courses by{" "}
      {data.site.siteMetadata.author}"
    </Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {
        // Airtable
        data.allAirtable.edges.map(edge => (
          <a key={edge.node.data.id} href="#">{edge.node.data.title}</a>
        ))
      }
    </LinkGroup>
    <CopyRight>{children}</CopyRight>
  </FooterGroup>
)

export default Footer
