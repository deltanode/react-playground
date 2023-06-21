import Home2 from "../../pages/Home2"
import { render, waitFor } from "@testing-library/react"
import { RESTAURANT_JSON_DATA } from "../../mocks/data"
import { StaticRouter } from "react-router-dom/server"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_JSON_DATA)
    }
  })
})

test("shimmer should load on Home2", async () => {
  const home2 = render(<Home2 />)
  await waitFor(() => {
    const shimmer = home2.getByTestId("shimmer-cards")
    expect(shimmer.children.length).toBe(15)
  })
})

test("restaurants should load on Home2", async () => {
  //   let home2
  //   act(() => {
  //     home2 = render(
  //       <StaticRouter>
  //         <Home2 />
  //       </StaticRouter>
  //     )
  //   })
  const home2 = render(
    <StaticRouter>
      <Home2 />
    </StaticRouter>
  )
  await waitFor(() => {
    const restaurants = home2.getByTestId("res-list")
    expect(restaurants.children.length).toBe(15)
  })
})
