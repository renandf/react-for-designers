import * as React from "react"
import { Link } from "gatsby"

import "./header.css"
import logo from "../images/logo-designcode.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerGroup">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshpos</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </header>
)

export default Header
