/**
 * **** Integration Testing ****
 *
 * Testing SEARCH Functionality:
 *  Step1. Load Home Component
 *  Step2. write Test Cases:
 *        - Shimmer should load on homepage
 *        - Restaurants should load on homepage
 *        - Search for "burger" in search input on homepage
 */

import "@testing-library/jest-dom"
import { render, waitFor, fireEvent } from "@testing-library/react"
import Home from "../Home"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"

// Create mock fetch() with jest.fn().
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA)
    }
  })
})

test("Shimmer should load on homepage", () => {
  /*  Load Home Component */
  const home = render(
    <StaticRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </StaticRouter>
  )
  // console.log(home)

  /* Check if shimmer is loaded */
  // const shimmer = home.getByTestId("shimmer")
  /**  "toBeInTheDocument()" is coming from "@testing-library/jest-dom" library.
   *    "toBeInTheDocument()" only checks if component is loaded or it.
   *    Your test case will pass. But, it doesn't gives us confidence.
   *    This is why it is not a good way.
   */
  // expect(shimmer).toBeInTheDocument()

  // console.log(shimmer.children)
  // expect(shimmer.children.length).toBe(10)
})

/* Note: This below function inside "test()" is "Async" function */
test("Restaurant should load on homepage", async () => {
  /*  Load Home Component */
  const home = render(
    <StaticRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </StaticRouter>
  )

  /* Check if restaurant is loaded */
  await waitFor(() => expect(home.getByTestId("res-list")))

  const restaurantList = home.getByTestId("res-list")

  expect(restaurantList.children.length).toBe(15)
})

/* Note: This below function inside "test()" is "Async" function */
test("Search for 'burder' in search input on homepage", async () => {
  /*  Load Home Component */
  const home = render(
    <StaticRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </StaticRouter>
  )

  /* Check "burger" in search input */
  await waitFor(() => expect(home.getByTestId("search-btn")))

  const input = home.getByTestId("search-input")
  fireEvent.change(input, {
    target: {
      value: "burger"
    }
  })

  const searchBtn = home.getByTestId("search-btn")
  fireEvent.click(searchBtn)

  const restaurantList = home.getByTestId("res-list")
  expect(restaurantList.children.length).toBe(1)
})
