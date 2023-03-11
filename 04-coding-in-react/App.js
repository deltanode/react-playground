/**
 * Topics:
 * - Different ways to add CSS in react
 * - React Fragment
 * - Config Driven UI
 * - Props
 * - Keys
 * - Virtual DOM
 * - Reconciliation
 *
 * Creating "food ordering app" :
 * - Viewing JSON Data of swiggy.com (i.e using Network tab in console & chrome extension: JSON Viewer)
 *
 * Layout:
 * - Header
 *   - Logo
 *   - Nav Item (Right Side)
 *   - Cart
 * - Body
 *   - Search Bar
 *   - Restraunt List
 *     - Restraunt Card
 *       - Image
 *       - Name
 *       - Rating
 *       - Cuisines
 * - Footer
 *   - Links
 *   - Copyright
 */

import React from "react"
import ReactDOM from "react-dom/client"

const Logo = () => <img alt="Logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" />

const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <React.Fragment>
      <>
        <HeaderComponent />
      </>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
