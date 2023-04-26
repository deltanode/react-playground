# 11 - Data is the new Oil

Today was about Data layer of the app. Consider data as if it's oil, use it wisely because that is what powers the engine, and its expensive as well. There were discussion on what is data in React, how to pass data in the component hierarchy, from parent to child, child to siblings, child to parent, and finally throughout the app.

### Topics Coverd:

- `UI Layer` Vs `Data Layer`
- Revised State vs Props
- `Props Driling`
- `Lifting State Up`
  - Create Accordion
  - Create Closing Accordion (Bad Coding Approach)
  - Create Closing Accordion (Good Coding Approach)
- Chrome Extension - `React Development Tool`:-
  - `Components`
  - `Profiler`: Flamegraph, Ranked
- State Management: `React Context`, `Redux Store`, `NGRX`,`MobX`,`Flux`
- `React Context`:
  - Create Context (using `createContext()`)
  - Using Context (using `useContext` hook)
  - Using Context in class based component (using `<ContextName.Consumer>`)
  - Modify / Override Context (using `<ContextName.Provider value={}>`)
  - For Debugging `Context` in brower console, we can provide _name_ of context `ContextName.displayName = "Anyname"`

## Notes:

- [Notes.md](https://github.com/deltanode/react-playground/blob/main/11-data-is-the-new-oil/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>What is prop drilling?</summary><br>
<blockquote>

- `Prop drilling` is the process of passing data from one component via several interconnected components to the component that needs it.
- Prop drilling results in long and unclean code, and also there are greater possibilities for mistakes like renaming the props midway by mistake, refactoring some data's structure, props being forwarded more often than is necessary, using default props unfairly or using default props unfairly or insufficiently.
- By enclosing your state and data in a context provider, the Context API essentially allows you to transmit your state and data to numerous components. Afterward, it uses its value attribute to send this state to the context provider.

**More Details**

- Component composition is the process of putting together components like bricks to create a final product.
- There are two kinds of component composition :
  - container components and
  - specialized components
- For more details [refer](https://www.scaler.com/topics/react/prop-drilling-in-react/)
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is lifting the state up?</summary><br>
<blockquote>

- When we want to pass some props from child component to parent or its siblings, we can use `lifting up state` technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props. There is a `single sourace of truth` maintained by the parent. 

- Example :
  1. **Child -> Parent**  : I have implemented this in my app for passing marked favourite restaurant card data to Body Component. Check code for implementation & coding-assignment.md for explanation.
  2. **Child -> Siblings** : I have implemented this in my app for displaying FAQ sections under Help.js for letting child know about the state of its siblings by lifting up the state to the closest ancestor parent.
Check code for implementation & coding-assignment.md for explanation.

- For more detail [refer](https://blog.prasanna.codes/lifting-state-up-with-reactjs-usestate-hook)
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is Context Provider and Context Consumer?</summary><br>
<blockquote>

`React Context API` provides a way to pass data through multiple nested levels of components without having to manually pass that data to each level. It is a way of global state management. 

Three steps of working with Conext :
1.  Create the Context: Create using `createContext()` & Export context from a file (in utils folder)
2.  Provide Context: Wrap the required components with a `context provider`
3.  Use the Context: Import `useContext` hook & the created context and create variable to store and use this context

`Context Provider`
- Every Context object comes with a Provider. 
- Its a React component that allows consuming components to subscribe to context changes.
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.


`Context Consumer`
- Before `useContext` existed, there was an older way to read context : `Context.Consumer`
  ```javascript
   function Button() {
    // 🟡 Legacy way (not recommended)
   return (
    <ThemeContext.Consumer>
      {theme => (
        <button className={theme} />
      )}
    </ThemeContext.Consumer>
   );
   }
  ```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>If you don’t pass a value to the provider does it take the default value?</summary><br>
<blockquote>

- No, default value is not passed as value to components. When we don't pass a value to the provider then React throws an error in that case. 
- If we don't need to pass value then value={undefined} must be mentioned in provider.

- The `defaultValue` argument is *only* used when a component does not have a matching Provider above it in the tree.
</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

<ul>
	<li>Practice React Context with code examples</li>
	<li>Try out Nested Contexts</li>
</ul>

## Quick Code Reference

| Project | Tech Stack | Source Code |
| --- | --- | --- |
| Food Delivery App | React | <ul><li>- [x] [InstaMart.js](./src/components/InstaMart.js)</li><li>- [x] [InstaMart2.js](./src/components/InstaMart2.js)</li><li>- [x] [InstaMart3.js](./src/components/InstaMart3.js)</li><li>- [x] utils/[UserContext.js](./src/utils/UserContext.js)</li><li>- [x] [App.js](./src/App.js)</li><li>- [x] [NavMenu.js](./src/components/NavMenu.js)</li><li>- [x] [ProfileClass.js](./src/components/ProfileClass.js)</li></ul> |

## References:

<ul>
	<li>
		<a href="https://reactjs.org/docs/lifting-state-up.html" target="_blank">Lifting State Up</a>
	</li>
	<li>
		<a href="https://bitbucket.org/namastedev/namaste-react-live/commits/" target="_blank">Akshay Saini Code Link</a>
	</li>
	<li>
		<a href="https://stackoverflow.com/questions/63765196/pass-props-to-outlet-in-react-router-v6" target="_blank">STACK OVERFLOW: Passing Props in < Outlet/>.</a>
		| 
		<a href="https://reactrouter.com/en/6.4.4/hooks/use-outlet-context" target="_blank">`useOutletContext` hook</a>
	</li>
</ul>
