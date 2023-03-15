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
1. __In `Named export`__, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
   - In `Named export`, the component is exported from MyComponent.js file like:
    <br> __MyComponent.js__
    ```
    export const MyComponent = () => {}
    export const MyComponent2 = () => {}
    ``` 
   - and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
    ```
    import { MyComponent } from "./MyComponent";                    // ex. importing a single named export

    import { MyComponent, MyComponent2 } from "./MyComponent";      // ex. importing multiple named exports

    import { MyComponent2 as MyNewComponent } from "./MyComponent"; // ex. giving a named import a different name by using "as":
    ```

2. __In `Default export`__, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
   - In `Default export`, the component is exported from MyComponent.js file like:
    ```
    const MyComponent = () => {}
    export default MyComponent;
    ```
   - and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
   ```
   import MyComponent from "./MyComponent";
   ```

3. __In `* as export`__, it is used to import the whole module as a component and access the components inside the module.
   - In `* as export`, the component is exported from MyComponent.js file like:
    ```
    export const MyComponent = () => {}
    export const MyComponent2 = () => {}
    export const MyComponent3 = () => {}
    ``` 
   - and the component is imported from MyComponent.js file like:
    ```
    import * as MainComponents from "./MyComponent";
    ```
Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```
import MyComponent, {MyComponent2} from "./MyComponent";
```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `importance` of `config.js` file?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What are `React Hooks`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we need `useState Hook`?</summary><br>
<blockquote>

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
