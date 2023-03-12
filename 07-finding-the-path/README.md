# 07 - Finding the path

Today we started with the recap of previous chapter's important concepts like useEffect(), do's and don't while creating components and state. As the name suggests, this chapter is about creating routes to different pages of the application and how to navigate through them. We used a library called react-router-dom for enabling the routes and providing them to RouterProvider to render them in the root. Error component for the invalid path were explaned. Importance of SPA (Single Page Application) and different types of routing were explained. Other routing concepts like nested routing (loading children into the parent outlet), dynamic routing (passing dynamic param in the path) were implemented. Find my version of detailed explanation of these concepts in theory-assignment.md. InstaFood(Version 3.0) app also had lot of enhancements in this chapter, like menu page was created for each restaurant, navigation to various pages of the application is done.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2007%20-%20Finding%20the%20Path%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2007%20-%20Finding%20the%20Path%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/07-finding-the-path/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>What are various ways to `add images` into our App? Explain with `code examples`.</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What would happen if we do `console.log(useState())`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>How will `useEffect` behave if we `don't add` a `dependency array`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `SPA`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `difference` between `Client Side Routing` and `Server Side Routing`?</summary><br>
<blockquote>

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

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)
