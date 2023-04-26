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

- `Prop drilling` is a technique where data is passed from one component through multiple components until it gets to the component where the data is needed.

- Example:
I have already implemented `props drilling` in our app InstaFood without knowing its actually name. So, I wanted to pass user info like name, email and isAuthenticated values that I get in landing page (`AppLayout`) component to `NavComponent` in `Header` where based on isAuthenticated value, display Login or Logout button.

- Check App.js & Header.js to see how the props is passed from `AppLayout` to `NavComponent` of previous chapter to see the props drilling implementation. Because, in this chapter we will be modifying that with React Context. More about that in React context section below.
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
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is Context Provider and Context Consumer?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>If you don’t pass a value to the provider does it take the default value?</summary><br>
<blockquote>

</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

<ul>
	<li>Practice React Context with code examples</li>
	<li>Try out Nested Contexts</li>
</ul>

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
