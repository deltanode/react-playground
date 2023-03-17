# 05 - Let's get hooked

Today was the continuation of previous chapter where we started to develop a food delivery app. In this chapter, we re-organised the repo structure, understood the importance of clean coding principles, different ways of exporting and importing modules(components). Then, the hero of this chapter Hooks got everyone hooked to their screen. It was indeed a 3 hours knowledge heavy session where foundation of hooks was laid. We used hooks to filter the restaurants based on search input.

### Topics Coverd:-

While Creating `food ordering app` covered:

- React File Structure
- Different ways to Export:`Named Export`, `Default Export` and `* as export`
- File extension: like `app.js`& `app.jsx`
- config file (or constant file)
- `Building Search Functionality`
- `One way data Binding` in react
- what are `hooks`?
- `useState` hook in react & why we use it
- creating `local variable` vs `local state variable`
- Why do we need `state variable` ?
- Creating `filter function` for search functionality.
- Passing `Restaurant Card` data using state variable.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2005%20-%20Let's%20get%20Hooked!%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2005%20-%20Let's%20get%20Hooked!%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/05-lets-get-hooked/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>What is the `difference` between `Named export`, `Default export`, and `* as export`?</summary><br>
<blockquote>

ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.

1. **Named export**:

   - In `Named export`, one can have multiple named exports per file.
   - Then import the specific exports (these named export will be surrounded in `{}` braces)
   - The name of imported module has to be the same as the name of the exported module.<br><br>
   - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like: <br><br>
     **MyComponent.js**

     ```
      export const MyComponent = () => {}
      export const MyComponent2 = () => {}
     ```

     **App.js** (we must use `{}`, when importing component from MyComponent.js)

     ```
     import { MyComponent } from "./MyComponent";                    // ex. importing a single named export

     import { MyComponent, MyComponent2 } from "./MyComponent";      // ex. importing multiple named exports

     import { MyComponent2 as MyNewComponent } from "./MyComponent"; // ex. giving a named import a different name by using "as":
     ```

2. **Default export**:

   - In `Default export` one can have only one default export per file.
   - The naming of import is completely independent in default export and we can use any name we like.<br><br>
   - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like: <br><br>
     **MyComponent.js**
     ```
     const MyComponent = () => {}
     export default MyComponent;
     ```
     **App.js** (we must omit `{}`, when importing component from MyComponent.js)
     ```
     import MyComponent from "./MyComponent";
     ```

3. **In `* as export`**:

   - In `* as export` it is used to import the whole module as a component and access the components inside the module.<br><br>
   - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like: <br><br>
     **MyComponent.js**

     ```
     export const MyComponent = () => {}
     export const MyComponent2 = () => {}
     export const MyComponent3 = () => {}
     ```

     **App.js**

     ```
     import * as MainComponents from "./MyComponent";


     <MainComponents.MyComponent />
     <MainComponents.MyComponent2 />
     <MainComponents.MyComponent3 />
     ```

4. **Using `Named export` and `Default export` together** So you should export like: <br><br>
   **MyComponent.js**

   ```
   export const MyComponent2 = () => {}

   const MyComponent = () => {}
   export default MyComponent;
   ```

   **App.js**

   ```
   import MyComponent, {MyComponent2} from "./MyComponent";
   ```

   </blockquote><br>
   </details>

<!-- *******************************-->
<details>
<summary>What is the `importance` of `config.js` file?</summary><br>
<blockquote>

`config.js` (or `constant.js`) file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.

Example : All API Base URLs, CDN links, config data from backend, default values needed in the app, can be placed in `config.js` file.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What are `React Hooks`?</summary><br>
<blockquote>

- React Hooks are new addition to React from `React 16.8` version.
- Earlier, state and other component features could be handled only using Class Components.
- But with version 16.8, React introduced a new pattern called `Hooks`.
- With React Hooks, we can use state, and other React features, in a `functional component` empowering functional programming in React. <br><br>
- Hooks are JavaScript functions that manage the `state's behaviour` and `side effects` by isolating them from a component.

_MORE_:

- In React version 16.8, React introduced a new pattern called Hooks.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- Hooks can be stateful and can manage side-effects.
- Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### React provides a bunch of standard in-built hooks:

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we need `useState Hook`?</summary><br>
<blockquote>

- `useState()` is one of the basic hooks functions which creates a state and assigns the initialState value passed in the parameter. It also provides a setState function, the state can be updated only using this function. <br>
  `const [state, setState] = useState(initialState);`
- During initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
- The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  `setState(newState)`
- During subsequent re-renders, the `first value` returned by useState will always be the most recent state after applying updates.
- If we want to use the prev state value instead of the first value , we can pass a function to setState, it receives previous state and returns updated state.

_More_:

- `useState hook` is used to maintain the state in our React application.
- It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
- The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.
- UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

#### Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why are useState variables `const` in react?</summary><br>
<blockquote>
- Question: 
 - My understanding is, when using `useState()`, we should declare the array as such:
   ```
   const [someBooleanValue, setSomeBooleanValue] = useState(false)
   ```

- Instead of

  ```
  let [someBooleanValue, setSomeBooleanValue] = useState(false)
  ```

- Normally, `const` is used on variables that won't be changing. Here, `someBooleanValue` will be changing. What is going on that allows us to use the `const` keyword in this case?

- In [React Hooks](https://reactjs.org/docs/hooks-state.html) with a Functional Component, your code gets a single value of state for each call into your functional component. React handles the storage separately and returns that current value via `useState` on each execution of your code, providing the latest state value.

- From the docs:

  > We declare a state variable called count, and set it to 0. **React will remember its current value between re-renders, and provide the most recent one to our function.** If we want to update the current count, we can call setCount.

- So in this case, we use `const` because the value should never be reassigned in our code.

- Reference: [stackoverflow](https://stackoverflow.com/questions/59395911/why-are-usestate-variables-const-in-react#:~:text=React%20will%20remember%20its%20current,be%20reassigned%20in%20our%20code.&text=Save%20this%20answer.,-Show%20activity%20on)

</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- `Clean up` your code.
- Create a `Folder Structure` for your app.
- Make `different files` for each Component.
- Create a `config file`.
- Use all types of `import and export`.
- Create a `Search Box` in your App.
- Use `useState` to create a variable and `bind` it to the input box.
- Try to make your `search bar work`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)

## Screenshot:

 <img height="600px" width="450px"  src="./screenshot/screenshot_localhost_search_component.png">
