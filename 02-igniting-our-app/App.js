// 02 - Igniting the APP

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 * BrowserList
 *
 * npx parcel index.html
 * npx parcel build index.html
 */

import React from "react"
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { className: "h1", key: "#1" }, "Welcome Everyone")
const para = React.createElement("p", { className: "para", key: "#2" }, "This is React App.")

const container = React.createElement("div", { className: "wrapper" }, [heading, para])

// console.log("React: ", React)
// console.log("ReactDOM: ", ReactDOM)
// console.log("heading: ", heading)
// console.log("paragraph: ", para)
// console.log("container: ", container)

const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log("root: ", root)
root.render(container)
