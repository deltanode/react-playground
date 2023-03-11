# 03 - Laying the foundation

We revised the previous sessions and doubts raised in the previous sessions were addressed. Babel/Polyfills and their usage were explained. Scripts were written for starting and building the app. Steps to install a npm package were walked through. JSX vs React.createElement() vs Components were discussed in depth.

#### Topic Covered:

- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components`

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2003%20-%20Laying%20the%20Foundation%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2003%20-%20Laying%20the%20Foundation%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/03-laying-the-foundation/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>What is `JSX`?</summary><br>
<blockquote>

`JSX` stands for JavaScript XML.

`JSX` is neither a string nor a html tag but a <b>syntactic sugar</b> for the React object. It is a `html-like syntax` inside `js` code for creating react elements. By using JSX, instead of writting markup (html) and logic(js) separately, the separation of concerns (SoC) is emphasized based on loosely coupled units called 'Components' which contains both.

<b>Broswer does not understand JSX</b> and a transpiler/compiler is required to convert this to browser understandable js code. Eg: Babel

JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

### Eg: using JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Eg: Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

_Benifts_:-

- Easy to maintain
- Secure
- Easy to debug
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Superpowers of `JSX`</summary><br>
<blockquote>

Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

### Example

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

_More_:-

- JSX as `variables` : markup (html-like) syntax can be set in a variable. This creates a react element (object).

- `javascript expressions` in JSX : JSX supports all js expressions by wrapping them in {}

- `Attributes` in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.

- `Props` in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Role of type `attribute` in script tag? What `options can I use` there?</summary><br>
<blockquote>

The `type` attribute in the script tag defines the type of script that we we want to run inside our app.
`type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.

  ```
  <script type="text/javascript">
      const a = "Hello";
      const b = "World!";
      console.log(a + " " + b); // Hello World!
  </script>
  ```

- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it

  ```
  <script type="module" src="app.js"></script>
  ```

- `importmap`: If the type attribute is set `importmap`, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

  ```
  <script type="importmap" src="app.js"></script>
  ```

- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.

- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.

- `text/typescript`: As the name suggest the script is written in `TypeScript`.

- _NOTE_: In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.
  ```
  <script type="" src="app.js"></script>
  ```
  </blockquote><br>
  </details>

 <!-- *******************************-->
<details>
<summary>{TitleComponent}` vs `{< TitleComponent/>}` vs `{< TitleComponent>< /TitleComponent>}` in `JSX`.</summary><br>
<blockquote>

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

## Coding

- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

  - Create the `same element using JSX`
  - Create a `functional component of the same with JSX`
  - `Pass attribute` into the tag in `JSX`
  - `Composition of Component` (Add a component inside another)
  - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
  - Add a `Logo on Left`
  - Add a `search bar in middle`
  - Add `User icon on right`
  - Add `CSS to make it look nice`

## References:

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)

 <!-- *******************************-->
<!--
<details>
<summary>{TitleComponent}` vs `{< TitleComponent/>}` vs `{< TitleComponent>< /TitleComponent>}` in `JSX`.</summary><br>
<blockquote>



</blockquote><br>
</details>
-->
<!-- *******************************-->
