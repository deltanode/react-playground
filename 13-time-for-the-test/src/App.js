import React, { lazy, Suspense, useEffect, useState } from "react"
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
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import store from "./utils/store"
import Cart from "./components/Cart"

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "sample name",
    email: "sample@email.id"
  })

  useEffect(() => {
    /* suppose we are making a API call to fetch data */
    // code for API call
    const data = {
      name: "Ram Gopal",
      email: "ram@gopal.com"
    }
    /* Now, after receiving data we are setting the user */
    setUser(data)
  }, [])

  return (
    // <>
    <Provider store={store}>
      {/* Example of Props Driling */}
      {/* <Header {...user} /> */}
      {/* Example of Props Driling when using <Outlet />*/}
      {/* <Outlet context={user} /> */}

      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/* <UserContext.Provider value={{ user: user }}> */}
        <Outlet />
        {/* </UserContext.Provider> */}
        <Footer />
      </UserContext.Provider>
    </Provider>
    //</>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appConfig} />)
