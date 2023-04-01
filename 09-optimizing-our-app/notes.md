### `Chapter - 09 Optimizing our app` [Advanced concepts]

- We use `hooks` everyday in our code in functional component:
- Basic hooks: `useState()` and `useEffect()`

## Custom Hooks

- Why ? How ? When ?
- Why ?

  - Readability,
  - Resuability,
  - maintainability / modularity / sepration of concern
  - testability

- Why we use functions ?

  - To perform some task that can be reused.

- There should be something common, where we can keep our utility functions and use in our code
  - **`utils folder`**: reusable functions could be placed here

#### Creating Custom Hooks

- `RestaurantMenu.js` Component is doing two things : `fetching data` & `displaying data`
- Now, we simply want the component tp do only one job : display data. So, we are moving fetching logic to `custom hook`

- Whenever creating a custom hook

  - create in a new file .
  - create hook name with `use` word. [This is a react way of doing things. Eg: useState()]

- Why **export** `default` for custom hook

  - Since there is only one separate hook for each hook function.

- Why `named` **export** for config file

  - As, there are many functions and variables in config.js

- Update state using custom hook

  - Inside custom hook => state & useEffect and async API call

- **Create Custom hook** for `checking internet connection` : to use only once

  - How to fake offline -> network tab -> offline
  - Cleanup `eventListener` while moving out of that component.

- Assigment :
  - creat custom hook for `Local Storage`. [Hint: Get and Set local variables]

## Code Splittling

- Code Splittling

  - also known as Dynamic bundling
  - also known as Lazy loading
  - also known as Chunking
  - also known as On Demand loading
  - also known as On Logical bundles

- Import `Instamart.js` using **`lazy load`**

  - This is a promise
  - Initially, on demand loaded components, will not be laoded
  - React suspends the loading using Suspense

- **DISCLAMER**: Don't lazy load inside component, As, it will reload everytime during re-renders.
