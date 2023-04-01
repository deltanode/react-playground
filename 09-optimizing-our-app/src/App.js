import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
// import Contact from "./components/Contact"
const Contact = lazy(() => import("./components/Contact")) // Lazy loading
import Footer from "./components/Footer"
import Error from "./components/Error"
import RestaurantDetail from "./components/RestaurantMenu"
import Login from "./Login"
import Profile from "./components/Profile"
import ProfileClass from "./components/ProfileClass"
import Shimmer from "./components/Shimmer"
// import Instamart from "./components/Instamart"
const Instamart = lazy(() => import("./components/Instamart")) // Lazy Loading

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Parent:
    errorElement: <Error />,
    children: [
      // Children
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          // Childen of Children:
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "profile-class",
            element: <ProfileClass />
          }
        ]
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        )
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appConfig} />)
