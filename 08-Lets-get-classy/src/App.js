import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Error from "./components/Error"
import ProfileClassComponent1 from "./components/ProfileClassComponent1"
import ProfileFunctionalComponent1 from "./components/ProfileFunctionComponent1"
import AboutClassComponent from "./components/AboutClassComponent"

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  )
}

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // Note: we are not using "/profile"
            element: <ProfileClassComponent1 />
          },
          {
            path: "profile2", // Note: we are not using "/profile"
            element: <ProfileFunctionalComponent1 />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about-class",
        element: <AboutClassComponent />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appConfig} />)
