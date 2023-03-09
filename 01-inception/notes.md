## Summary of today's class:

1. Intro about the namaste react course

2. Environment needed: 
   - Editor: vs code 
   - Browser: google chrome

3. Extensions for VS code :
   - better comments
   - bracket pair colorization toggler
   - es7+ react/redux
   - gitlens
   - prettier
   - prettifyjson
   - vs-code icons

4. Created html boiler template in vs code using emmet and write html for printing some text.

5. Write a simple js program to print Namaste Everyone in h1 tag inside div container with id root.
   - used js engine's browser API called document to create h1 element and appendChild to append it to root div
   ```
   const heading = document.createElement("h1"); 
   heading.innerHTML = "Namaste Everyone";
   const root = document.getElementById("root);
   root.appendChild(heading);
   ```

6. Wrote the same program using React
   - Add script for react cdn link in body of index.hmtl
   - create app.js and move our js script there
   - Now, write the same script in react

A `react element` is object with properties which is created by React library

```
const heading = React.createElement("h1", {}, "Namaste Everyone");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

**render()** function will override the content of the root if there is any content already present in root container.

So, until the root is rendered, if we want to display some error message, it can be written in html.

what if we need to put more elements inside the root container - pass array of react elements to the container creation

```
const heading1 = React.createElement("h1", {id : "title"}, "Namaste Everyone");
const heading2 = React.createElement("h2", {id : "sub_title"}, "Welcome");

const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
```

7. Created a style.css file and linked to index.html

8. Learn about arrow function for tomorrow's class
