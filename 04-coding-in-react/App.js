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

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <h1>Food Ordering App</h1>
    </React.Fragment>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
