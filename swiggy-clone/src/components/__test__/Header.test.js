import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../store/store"

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const logo = header.getByTestId("logo")
  expect(logo.src).toBe("http://localhost/dummy.png")
})

test("NavBar should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const nav = header.getByTestId("nav")
  expect(nav.innerHTML).toBe("Search")
})

test("Cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const cart = header.getByTestId("cart")
  expect(cart.innerHTML).toBe("0")
})
