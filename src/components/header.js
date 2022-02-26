import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import "./Header.css"
import logo from "../images/logo-designcode.svg"

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={hasScrolled && "headerBg"}>
      <div className="headerGroup">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshpos</Link>
        <Link to="https://buy.stripe.com/5kAg2C6Sj1ovgxi7su"><button>Buy</button></Link>
      </div>
    </header>
  )
}

