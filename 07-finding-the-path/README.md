# 07 - Finding the path

Today we started with the recap of previous chapter's important concepts like useEffect(), do's and don't while creating components and state. As the name suggests, this chapter is about creating routes to different pages of the application and how to navigate through them. We used a library called react-router-dom for enabling the routes and providing them to RouterProvider to render them in the root. Error component for the invalid path were explaned. Importance of SPA (Single Page Application) and different types of routing were explained. Other routing concepts like nested routing (loading children into the parent outlet), dynamic routing (passing dynamic param in the path) were implemented. Insta Ordering App also had lot of enhancements in this chapter, like menu page was created for each restaurant, navigation to various pages of the application is done.

### Topics Coverd:-

While Creating `food ordering app` covered:

- How to import image in react
- How to create Shimmer
- `Formik` package (create forms in reacts)
- `create-router-dom` package
  - `createBrowserRoute` function
  - `RouterProvider` component
  - `< Link to="">`
  - `Outlet`
  - `useRouteError`
  - `useParams`
- `Nesting Routing`
- `Dynamic Routing`

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2007%20-%20Finding%20the%20Path%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2007%20-%20Finding%20the%20Path%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/07-finding-the-path/notes.md)

> **Credit**: `Digital Notes:` [Arpan Kesh](https://www.linkedin.com/in/arpan-kesh-687740194/) | `Handwritten Notes:`[Ashraya KK](https://github.com/Ashrayaa/Namaste-React) | `Notes.md:` [Harshitha Solai](https://github.com/Learn-React-With-Harshi)

## Theory:

<!-- *******************************-->
<details>
<summary>What are various ways to `add images` into our App? Explain with `code examples`.</summary><br>
<blockquote>

- Using the `full URL of the image` for the web (CDN) or any public images.
  Example : 
  ```
  <img src="https://reactjs.org/logo-og.png" alt="React Image" />
  ```
- Adding the image into the project 
  `Drag your image into your project` and `import it` into the desired component
  ```
  import reactLogo from "./reactLogo.png";
  export default function App() {
    return <img src={reactLogo} alt="react logo" />
  }
  ```
- The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
  ```
  import reactLogo from "../../assets/images/reactLogo.png";
  export default function App() {
    return <img src={reactLogo} alt="react logo" />
  }
  ```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What would happen if we do `console.log(useState())`?</summary><br>
<blockquote>

If we do `console.log(useState())`, we get an array `[undefined, function]`  where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>How will `useEffect` behave if we `don't add` a `dependency array`?</summary><br>
<blockquote>

- Syntax of `useEffect` is:
  ```
  useEffect(() => {}, []);
  ```
- Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
  ```
  useEffect(() => {
	  console.log("I run everytime this component rerenders")
  });
  ```
- Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
  ```
  useEffect(() => {
	  console.log("I Only run once (When the component gets mounted)")
  }, []);
  ```
- Case 3 :  When the `dependency array contains a condition`,  the callback function will be executed  `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
  ```
  useEffect(() => {
	  console.log("I run every-time when my condition changed")
  }, [condition]);
  ```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `SPA`?</summary><br>
<blockquote>

`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `difference` between `Client Side Routing` and `Server Side Routing`?</summary><br>
<blockquote>

In `Server-side routing or rendering (SSR)`, for every change in URL, `http request` is made to the server to fetch the webpage, and replace the current webpage with the older one. 

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications` uses `client-side routing`. 
</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.

## Quick Code Reference

| Project | Tech Stack | Source Code |
| --- | --- | --- |
| Food Delivery App | React | <ul><li>- [x] [package.json](./package.json)</li><li>- [x] [App.js](./src/App.js)</li><li>- [x] [Error.js](./src/components/Error.js)</li><li>- [x] [RestaurantMenu.js](./src/components/RestaurantMenu.js)</li><li>- [x] [Shimmer.js](./src/components/Shimmer.js)</li></ul> |

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)
