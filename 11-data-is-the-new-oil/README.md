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

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is lifting the state up?</summary><br>
<blockquote>

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
		<a href="https://stackoverflow.com/questions/63765196/pass-props-to-outlet-in-react-router-v6" target="_blank">Passing Props in < Outlet /></a>
		<br>
		<a href="https://reactrouter.com/en/6.4.4/hooks/use-outlet-context" target="_blank">UseOutletContext</a>
	</li>
	<li>
		<a href="https://bitbucket.org/namastedev/namaste-react-live/commits/" target="_blank">Akshay Saini Code Link</a>
	</li>
</ul>
