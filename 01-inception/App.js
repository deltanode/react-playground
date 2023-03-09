// 01 - Inception

const heading1 = React.createElement("h1", { class: "orange-color" }, "Hello React (using React)")
const heading2 = React.createElement("h2", { class: "yellow-color" }, "heading 2 (nested react element)")
// Note: In React.createElement, "React" is the kind of Global variable that came from injected CDN react files.

// console.log("heading1:", heading1)

const wrapper = React.createElement("div", { id: "wrapper" }, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

// passing a react element inside the root
root.render(wrapper)
// Note: render will overide the DOM.





/*
**************
Quick Revise:
**************

What is the shortest program of react?
- html files with react CDN links

What is the difference btw React & ReactDOM
- React library is responsible for creating views and 
- ReactDOM library is responsible to actually render UI in the browser.

What parameter does createElement takes?
- It takes 3 paramnetes
  1 type (like tag name), 
  2 props(i.e likes html attributes id & class) OR null (empty object), 
  3 ...children(Optional) (like arrays of react element OR string, numbers,null, undefined, true, false, empty nodes)

What does React.createElement() returns?
- It returns the `React Element`.

What is heading1 & heading2 in the above code?
- They are `react elements`.

What is `react element` at the end of the day?
- It's an object.

What is the function of reader?
- render will modify the DOM.

Will render function Override or Append?
- render will override.

*/
