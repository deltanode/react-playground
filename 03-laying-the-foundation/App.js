import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./assets/logo.png"
import avatar from "./assets/user_avatar.png"

/*Create a Nested header Element using React.createElement() (i.e h1,h2,h3 inside a div with class "title") */
const h1 = React.createElement("h1", { className: "heading" }, "Try 1")
const h2 = React.createElement("h2", { className: "main_heading" }, "Nested header Element using React.createElement")
const h3 = React.createElement("h3", { className: "sub_heading3" }, "Try & run")

const header = React.createElement("div", { className: "title" }, [h1, h2, h3])

/* Create a Nested header Element using JSX (i.e h1,h2,h3 inside a div with class "title") */
const header_jsx = (
  <div>
    <h1>Try 2</h1>
    <h2>Nested header Element using JSX</h2>
    <h3>Try & Run</h3>
  </div>
)

/* Create a Nested header Element using JSX with attributes (i.e h1,h2,h3 inside a div with class "title") */
const header_jsx_attr = (
  <div className="title">
    <h1 className="heading">Try 3</h1>
    <h2 className="main_heading">Nested header Element using JSX with attributes</h2>
    <h3 className="sub_heading">Try & run</h3>
  </div>
)

/* Create a Nested header Element using Functional Component (i.e h1,h2,h3 inside a div with class "title") */
const TitleComponent = () => {
  return (
    <div className="title">
      <h1 className="heading"> Try 4</h1>
      <h2 className="main_heading">Composition of Component (Add a component inside another)</h2>
      <h3 className="sub_heading">Try & run</h3>
    </div>
  )
}

/* Composition of Component (Add a component inside another) */
const NestedComponent = () => (
  <div>
    {"**************"}
    {1 + 5}
    {console.log("Hello")}
    {alert("Hello Everyone")}
    {header}  {/*Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.*/}
    {header_jsx}
    {header_jsx_attr}
    {TitleComponent} {/* It does not work and warning is thrown in console since TitleComponent is a component and not a react element */}
    {TitleComponent()}
    {<TitleComponent />}
    {<TitleComponent></TitleComponent>}
  </div>
)

/** Create a Header Component from scratch using Functional Component with JSX
 *  Add a Logo on Left
 *  Add a search bar in middle
 *  Add User icon on right
 *  Add CSS to make it look nice
 *  */

const HeaderComponent = () => (
  <div className="header-wrapper">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="search">
      <input type="text" key="search" placeholder="Search" />
    </div>
    <div className="avatar">
      <img src={avatar} alt="user avatar" />
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(header)                /* Rendering header created using React.createElement() */
// root.render(header_jsx)            /* Rendering header created using JSX */
// root.render(header_jsx_attr)       /* Rendering header created using JSX  and passing attributes in jsx tag*/

// root.render(TitleComponent)                      /* It does not work and warning is thrown in console since TitleComponent is a `component` and NOT a `react element` */
// root.render(TitleComponent())                    /* Rendering header created using Functional Component. As React component is a Funtion only*/
// root.render(<TitleComponent />)                  /* Rendering header created using Functional Component */
// root.render(<TitleComponent></TitleComponent>)   /* Rendering header created using Functional Component */

// root.render(<NestedComponent />)    /* Rendering header created using Functional Component (Component Composition) */

root.render(<HeaderComponent />)
