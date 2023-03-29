## Chapter-07 Finding the path

- **useEffect(callback, [dependencies])**
  - `useEffect(callback)`: If dependency array [], is not passed in useEffect.
    - then, it is called after **every render**
  - `useEffect(callback,[])`: If "empty" dependency array [], is passed in useEffect.
    - then, it is called **once during initial render**
  - `useEffect(callback, [serachText])`: If "state variable" is passed in dependency array of useEffect.
    - then useEffact() is called **during first render** & then **every time after "searchText" state changes**

- **NEVER DO THIS**
  - Never create a component inside a component. 
    - because the component will be created after every render.
  - Never use useState() inside if...else 
    - because it leads to inconsistency.
  - Never write useState() inside for loop

- React gives useState() to create a local state variable inside a functional component

- When to use npm library 
  - When the process of creating the actual code is difficult. Eg : Formik
  - Homework : Login page with formik

- **React Routes** 
  - create route to different pages of the application.
    - Install a npm package, `npm i react-router-dom`
  - **`Emmet`** for creating a functional component is `rafce`
  - `import { createBrowserRouter } from "react-router-dom"` into `App.js` for enabling **router** in `App.js`
  - `<RouterProvider router ={appRouter} />` to render in root where router is the props passed to RouterProvider Component

- SPA (Single Page Application)

- Types of routing:
  - **client side routing**: load a different compoenent for each page without reloading
  - **server side routing**: network call to fetch every page

- react router dom 
  - Keep track of all anchor tags using `<Link />` but its converted to <a></a> which is understandable by browser

- Why **Nested routing**
  - As it, only load parts of the page (components) without reloading the page

- Create children of routes inside the parent
  ```
  [{
    path: "/"
    element: "/appLayout"
  }] 
  ```
- All children component will go into the `<Outlet/>` component of the parent component

- **Dynamic Routing**
 - Read dynamic URL param

- `Object.values()`: It returns ARRAY of object values

> **NOTE: **
> - In initial render, if the useState is initialised to {}, the map will throw error -> no data to loop through
> - Fix : initialise to null and if condition to early return

- `useRouteError `Hook:  to show error status and statusText
