import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import StripeCheckout from 'react-stripe-checkout'

import "./Header.css"
import logo from "../images/logo-designcode.svg"

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 50);
    });
  }, []);

  const handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  return (
    <header className={hasScrolled ? "headerBg" : undefined}>
      <div className="headerGroup">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/page-2">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshpos</Link>
        {/* <Link to="https://buy.stripe.com/5kAg2C6Sj1ovgxi7su"><button>Buy</button></Link> */}
        <StripeCheckout
          amount={5000}
          // image={logo}
          token={handlePurchase}
          stripeKey={'pk_test_51JzPuzIVUm8xXc3PIHCYlGupuySmt0j4aq9wvUcQ5ZzrX9KPxcaDHMMIIhHe9JkEgN2v77WX5P8du4FpxuEFpMIK00jzCFI97a'}
        >
          <button>Buy</button>
        </StripeCheckout>
      </div>
    </header>
  )
}

