# 09 - Optimizing our App

The first half of the chapter was about Why to use, How to create, Where to create and When to use Custom Hooks were explained. Difference between helper functions and custom hooks were discussed with examples. We created a helper function (filtering logic) and two custom hooks (check network connection and fetch API data). The second half of the chapter was about optimizing our app using lazy loading/on demand loading mechanism.

### Topics Coverd:-

While Creating `food ordering app` covered:
- Keeping all the helper & utility function in `utils` folder.
- What is `Custom Hooks`
- Why do we need Custom Hooks
- When should I create Custom Hooks
- Created custom hooks `useRestaurant` [we offloaded the responsibilty of fetch() over there]
- Created a custom hooks `useOnline` from scrach.
- `Chunking` / `Code Spliting` / `Dynamic Bundling` / `Lazy Loading` / `On Demand Loading` / `Dynamic Import` / `Bundle Chunking`
- How to `Lazy Load`?
- Why do we lazy load things?
- How do we do `Chunking` ?
- How to do `Bundle Spiliting? (i.e load on demand)


## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/09-optimizing-our-app/notes.md)

> **Credit**: `Digital Notes:` [Arpan Kesh](https://www.linkedin.com/in/arpan-kesh-687740194/) | `Handwritten Notes:`[Ashraya KK](https://github.com/Ashrayaa/Namaste-React) | `Notes.md:` [Harshitha Solai](https://github.com/Learn-React-With-Harshi)

## Theory:

<!-- *******************************-->
<details>
<summary>When and why do we need `lazy()`?</summary><br>
<blockquote>

- `React.lazy()` is used to dynamically import a component when it is first rendered, instead of importing at the beginning when the file loads. This is called `Code Splitting`/ `On-demading loading`. 
- In our example : In [App.js](./src/App.js), `Instamart` component and `About` component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.
- It is also known as `Chunking` / `Code Spliting` / `Dynamic Bundling` / `Lazy Loading` / `On Demand Loading` / `Dynamic Import` / `Bundle Chunking`
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `suspense`?</summary><br>
<blockquote>

- `Suspense component` allows us to show some **fallback** content (such as a Shimmer/Loading indicator component) while we’re waiting for the lazy component to load or the component is not yet rendered. It is similar to `catch` block. 
- If a component suspends, the closest `Suspense` component above the suspending component `catches` it
  ```javascript
  import React, { Suspense } from 'react';

  const About = React.lazy(() => import('./About'));

  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </div>
    );
  }
  ```
- The `fallback` prop accepts any `React elements` that you want to render while waiting for the component to load. 
- You can place the Suspense component anywhere above the lazy component. 
- You can even wrap `multiple lazy components` with a `single` Suspense component.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?</summary><br>
<blockquote>

- This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime. 
- If only the dynamic import is done and there is no `<Suspense />` component then this error is shown. 
- React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. 
- If showing the shimmer (loading indicator) is not desirable in some situations, then `startTransistion` API can used to show the old UI while new UI is being prepared. 
- React do this without having to delete or remove the Suspense component or its props from your code.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>`Advantages and Disadvantages` of using this `code splitting pattern`?</summary><br>
<blockquote>

| Advantages  | Disadvantages |
| :---------- | :----------   |
| Reduces the page load time by bundling the large code into smaller bundles and laoding dynamically only when the component is loaded | Though the initial page load time is reduced, this increases the load time of each component thats loaded dynamically |
| Only the components that the user needs are loaded initially | There will be many http requests as the components are loaded dynamically |
| Cna imporve the user experience while loaded by showing suspense fallback/ loading dicator | But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component | 
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>When `do we and why do we need suspense`?</summary><br>
<blockquote>

- Suspense are useful when the components are `waiting` (React.lazy components are getting dynamically loaded) before rendering. 
- Today, React Suspense only supports one use case which is loading components dynamically with React lazy(). 
- In the future, it will support other use cases like data fetching. 
</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## Quick Code Reference

| Project | Tech Stack | Source Code |
| --- | --- | --- |
| Food Delivery App | React | <ul><li>- [x] utils/[useRestaurantMenu.js](./src/utils/useRestaurantMenu.js)</li><li>- [x] [RestaurantMenu.js](./src/components/RestaurantMenu.js)</li><li>- [x] utils/[helper.js](./src/utils/helper.js)</li><li>- [x] utils/[useOnline.js](./src/utils/useOnline.js)</li><li>- [x] [Home.js](./src/components/Home.js)</li><li>- [x] [App.js](./src/App.js)</li></ul> |


## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://beta.reactjs.org/reference/react/lazy)
- [Akshay Saini - Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
