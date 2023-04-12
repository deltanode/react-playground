/**
 * **** Unit Testing ****
 * Test Header Component:
 *  1. Load Header
 *  2. Test Cases for:
 *     - Check if LOGO is added
 *     - Check default status should be online
 *     - Cart should have 0 item on rendering header
 */

import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () => {
  /*  Load Header Component */
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  //   console.log(header)

  /* Check if logo is added */
  const logo = header.getByTestId("logo")
  //   console.log(logo.src)
  expect(logo.src).toBe("http://localhost/dummy.png")

  //   const logo = header.getAllByTestId("logo")
  //   console.log(logo)
  //   console.log(logo[0].src)
  //   expect(logo[0].src).toBe("http://localhost/dummy.png")
})

test("Internet Status should be green on rendering header", () => {
  /*  Load Header Component */
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  //   console.log(header)

  /* Check default internet status should be online  */
  const onlineStatus = header.getByTestId("online-status")
  //   console.log(onlineStatus.innerHTML)
  expect(onlineStatus.innerHTML).toBe("Internet: <b>✅</b> |")
})

test("Cart should have 0 items on rendering header", () => {
  /*  Load Header Component */
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  //   console.log(header)

  /* Cart should have 0 item on rendering header */
  const cartItems = header.getByTestId("cart-items")
  //   console.log(onlineStatus.innerHTML)
  expect(cartItems.innerHTML).toBe("0")
})
