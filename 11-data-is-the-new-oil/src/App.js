import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Error from "./components/Error"
import About from "./components/About"
import Profile from "./components/Profile"
import ProfileClass from "./components/ProfileClass"
import Contact from "./components/Contact"
import LoginForm from "./components/LoginForm"
import RestaurantDetail from "./components/RestaurantDetail"
import Shimmer from "./components/Shimmer"
const InstaMart = lazy(() => import("./components/InstaMart"))
const InstaMart2 = lazy(() => import("./components/InstaMart2"))
const InstaMart3 = lazy(() => import("./components/InstaMart3"))

const AppLayout = () => {
  return (
    <>
      <Header />
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
        element: <Contact />
      },
      {
        path: "/login-form",
        element: <LoginForm />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />
      },
      {
        path: "/shimmer",
        element: <Shimmer />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        )
      },
      {
        path: "/instamart2",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart2 />
          </Suspense>
        )
      },
      {
        path: "/instamart3",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart3 />
          </Suspense>
        )
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appConfig} />)
