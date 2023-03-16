# 04 - Coding in React

We started to develop a config-driven UI for food ordering platform. First, we created LLD of the web application, continued working on creating layouts, components and data manipulation from mock data. Concepts of props(properties), virtual DOM, importance of unique key were discussed.

#### Topics Coverd:-

While Creating `food ordering app` covered:

- Different ways to add CSS in react
- React.Fragment (<></>)
- Config Driven UI
- Props
- Keys
- Virtual DOM
- Reconciliation

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/04-coding-in-react/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>Is `JSX` mandatory for React?</summary><br>
<blockquote>

- No, Its not mandatory.
- `JSX` is not a requirement for using React. 
- Each JSX element is just syntactic sugar for calling `React.createElement(component, props, ...children)`. 
- So, anything you can do with JSX can also be done with just plain JavaScript.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Is `ES6` mandatory for React?</summary><br>
<blockquote>

ES6 is `not mandatory` for using React but it's highly recommended to use ES6. Any javascript expressions (pure js) can be used in JSX to render React elements. 

Currently, lot of React projects use ES6 features in React ecosystem, so it's better to have knowledge on ES6 features like modules, destructuring, spread operator, template literals, classes, map, filter and reduce array methods.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>`{TitleComponent}` vs `{< TitleComponent/>}` vs `{< TitleComponent></ TitleComponent>}` in `JSX`.
</summary><br>
<blockquote>

```
{}  /* Curly braces { } are special syntax in JSX.
     * It is used to evaluate a JavaScript expression during compilation.
     * A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.
     */

{TitleComponent}                        // It will give warning TitleComponent is a function componment, Not a React Element
{TitleComponent()}                      // this will render the TitleComponent (calling function expression as a Noraml Function)
{< TitleComponent/>}                    // this will render the TitleComponent (calling function expression using Self Closing Tag)
{< TitleComponent></ TitleComponent>}   // this will render the TitleComponent (calling function expression using Normal Tag)
```

_More_:

The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

OR

- `{ TitleComponent }` - This value in jsx is considered as jsx expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning

  ```
   index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

  ```

- `{ <TitleComponent /> }` - This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.
- `{ <TitleComponent> </TitleComponent> }` - This is same as `{ <TitleComponent /> }` if there are no child inside TitleComponent. If there are children, then those values come inside `{ <TitleComponent>} ` and `</TitleComponent> }`.


</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>How can I write `comments` in JSX?</summary><br>
<blockquote>

- Comments are written like anyother javascript code. 
- In javascript, we use `//` to comment a single line and `/*  */` to comment multiple lines. 
-  Similar, in jsx we enclose js code inside {} and hence comments are also enclosed within { } . 
- Only difference is for single line comment instead of `{//}` use `{/* */ }`


```
{// This is single line comment }

{/**
   *This is a
   * Multiline
   * Comment
   */
}
```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `< React.Fragment></ React.Fragment>` and `<></>`?</summary><br>
<blockquote>

- <></> is a shorthand of < React.Fragment></ React.Fragment>
- React gives us access to the `component` know as `React.Fragment`. It is exported from React library.
- React.Fragment is like a Empty tags.
- JSX only have one parent.
- We can't apply CSS Style on React.Fragment as it doesn't exist in HTML.

> `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

_More_:-

**Each jsx element (component) can have only one parent.** This is because jsx element is converted to React.createElement(parent, props, ...children) before rendering in the DOM. 

But the common pattern in React is for a component to return multiple elements. So, for grouping, we can enclose them within `<div> </div>`. But there can be situations were `<div> </div>` should not be used. In such cases, Fragments can be used to group a list of children without adding extra nodes (like <div>) to the DOM.

The new, short syntax for declaring Fragment is empty tags `<> </>`. It can be used in the same way as any other element but it doesn't support keys or attributes. 

> __NOTE__: `What if React fires a key warning?`

> There will be cases where we might use Fragments while mapping a list of elements . And React will fire a key warning since every element must have a unique key. In such cases, `Keyed Fragments` can be used. key is the only attribute that can be passed to <React.Fragment></React.Fragment>. This is not possible with <></>.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Virtual DOM` in React?</summary><br>
<blockquote>

- Virtual DOM (VDOM) is a programming concept where a copy/virtual representaion of the UI is kept in memory and synced with the "real" DOM tree by a library called `React-DOM`. This process is called `Reconciliation`. 
- In React, a virtual DOM is associated with `React elements` since they are the objects representing the UI. 
- React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Reconciliation` in React?</summary><br>
<blockquote>

- React uses **diffing algorithm** to diff one tree (actually dom) from another which determines what needs to be updated and only re-renders the diff.

- In React, we pass props to a component, when any of the prop changes, a reconciliation process is triggered internally by react which traverses the whole component hierarchy to mark any changes required in the given component at a time.

- __Reconciler vs Renderer__: 
    | Reconciler | Renderer |
    | --- | --- |
    | - Reconciler does the work of computing which parts of the tree have changed.| -  Renderer uses this info to actually update the rendered app. |


_More_:

- `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. 
- React use a `diffing algorithm` so that component updates are predictable and faster. 
- React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
- React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
- React compares the Virtual DOM with Real DOM to finds out the changed nodes and then, it only updates the changed nodes in Real DOM leaving the rest nodes as it is. This process is called `Reconciliation`.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `React Fiber`?</summary><br>
<blockquote>


- React Fiber is the new reconciliation engine in React 16. The goal of React Fiber is to increase its suitability for areas like `animation, layout, and gestures`. Its headline feature is `incremental rendering`: the ability to split rendering work into chunks and spread it out over multiple frames.

_More_:

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we need `keys` in React? When do we need keys in React?</summary><br>
<blockquote>

- A `key` is a special attribute you need to include when creating lists of elements in React. 
- Keys are used in React to identify which items in the list are changed, updated, or deleted. 
- In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
- Keys should be given to the elements within the array to give the elements a stable identity.
- #### Example
  ```
  <li key={0}>1</li>
  <li key={1}>2</li>
  <li key={2}>3</li>
  ```
- When we have multiple childen with same Tag name, then its difficult for react to figure out the sequence in which the new child is added. So, it re-render the complete node.
- But we only want to make changes to the small portion only.
- For this we need to pass `keys`. So that react can figure out where the change has occure & only render that perticular node.

    
_More_:-
    
    
- React create the visual representation of the DOM which is know as Virtual DOM.
- Because of reconcilliation algorithm, react diff on tree from another, & only make chages to that small portion only.

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Can we use `index as keys` in React?</summary><br>
<blockquote>

- Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
- Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.
- We should prefer it only for the last case senario.

    
_More_:
    
- A key is the only thing React uses to identify DOM elements. It is not recommend to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
- But, nothing is better than anything. If we don't give a key, react by default assign id of that list item as it's key. 
- `NO key` << `INDEX as key` <<<<<< `Unique id as key from data` 
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `props in React`? Ways to.</summary><br>
<blockquote>

Props are the attributes that we pass in React Component.
In layman terms, they are just the arguments that we pass on React Component(i.e which is a function only)

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Config Driven UI`?</summary><br>
<blockquote>

- It a way of creataing a dynamic UI in such a way, which changes on the basics of backend API data.
- Eg: Suppose we provide some services through our web app in different cities. Now we want to display offer & discounts as the cities. So, our web app should re-render on the basis of datacomming from the backend, this is beacause of config driven UI.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Javascript: Map() vs forEach()</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Javascript: Optional Chaning (?.)</summary><br>
<blockquote>

</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
      - `Render` your cards with `dynamic data of restaurants`
      - Use `Array.map` to render all the restaurants

### PS. Basically do everything that I did in the class, in the `same sequence`. `Don't skip small things`.

  
## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

  
## Screenshot:
 <img height="600px" width="450px"  src="./screenshot/screenshot_localhost.png">
