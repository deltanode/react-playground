import { render, waitFor, fireEvent } from "@testing-library/react"
import Home from "../../pages/Home"
import { RestaurantContextProvider } from "../../contexts/RestaurantContext"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_JSON_DATA } from "../../mocks/data"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_JSON_DATA)
  })
})

test("Shimmer should load on home page", async () => {
  const home = render(
    <StaticRouter>
      <RestaurantContextProvider>
        <Home />
      </RestaurantContextProvider>
    </StaticRouter>
  )
  await waitFor(() => {
    const shimmer = home.getByTestId("shimmer-cards")
    expect(shimmer.children.length).toBe(15)
  })
})

test("Carousel should load on home page", async () => {
  const home = render(
    <StaticRouter>
      <RestaurantContextProvider>
        <Home />
      </RestaurantContextProvider>
    </StaticRouter>
  )
  await waitFor(() => {
    const carousel = home.getByTestId("res-carousel")
    expect(carousel.id).toBe("slider")
  })
})

test("Restaurants should load on home page", async () => {
  const home = render(
    <StaticRouter>
      <RestaurantContextProvider>
        <Home />
      </RestaurantContextProvider>
    </StaticRouter>
  )
  await waitFor(() => {
    const resList = home.getByTestId("res-list")
    expect(resList.children.length).toBe(15)
  })
})

test("filter restaurant having cuisines 'Bakery'", async () => {
  const home = render(
    <StaticRouter>
      <RestaurantContextProvider>
        <Home />
      </RestaurantContextProvider>
    </StaticRouter>
  )
  await waitFor(() => {
    return expect(home.getByTestId("filter-toggle"))
  })
  // fire click event to load filter options
  const toggleFilter = home.getByTestId("filter-toggle")
  fireEvent.click(toggleFilter)
  // check for loaded input options
  const filterOptions = home.getAllByTestId("filter-options")
  // expect(filterOptions[0].children[0].length).toBe(2)

  // fire click event on checkbox
  const bakeryCheckbox = home.getAllByTestId("checkbox")[7]
  fireEvent.click(bakeryCheckbox)
  expect(bakeryCheckbox.checked).toBe(true)

  // fire click event
  const filterButton = home.getAllByTestId("filter-button")
  fireEvent.click(filterButton[0])

  // verify filter result
  const resList = home.getByTestId("res-list")
  expect(resList.children.length).toBe(3)
})
