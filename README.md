# React Playground

A playground to practice & learn react. This is where the magic happens! 

<!--  **************************************************************************************************************************************  -->
<!-- ## [&rarr; Inception](01-inception) -->
## [1. Inception](01-inception)


<details>
    <summary>What is Emmet?</summary>
    <br>
  <blockquote> Emmet is a free <strong>add-on</strong> for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.</blockquote> <br>
  </details>

  <details>
    <summary>Difference between a Library and Framework?</summary>
    <br>
    <blockquote>
    - A <strong>library</strong> is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control. <br><br>
    - A <strong>framework</strong>, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input. <br><br>
    - <strong>Both Frameworks and Libraries</strong> are code written by someone else that is used to help solve common problems or to optimise performance. <br><br>
    - A key difference between the two is the <strong>inversion of control</strong>. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.
    </blockquote> <br>
  </details>

  <details>
    <summary>What is CDN? Why do we use it?</summary>
    <br>
    <blockquote>
    - A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery. <br><br>
    - The primary goal of a CDN is to improve web performance by reducing the time needed to send content and rich media to users. <br><br>
    - CDN architecture is also designed to reduce network latency caused by hauling traffic over long distances and across several networks. Eliminating latency is important as more dynamic content, video and software as a service are delivered to an increasing number of mobile devices.
    </blockquote> <br>
  </details>
  
   <details>
    <summary>Why is React known as React?</summary>
    <br>
    <blockquote>
      - React is a JavaScript library that helps developers to build user interfaces – the things you interact with on websites. It has become popular because of its simplicity and flexibility. <br><br>      
      - React is named <strong>React</strong> because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date. <br><br>
    - React was created by Jordan Walke, a software engineer at Facebook. It was first used internally at Facebook to power News Feed and other user interface elements. After seeing how well it performed, Jordan open-sourced React and made it available to the world.
    </blockquote><br>
  </details>
  
   <details>
    <summary>What is crossorigin in script tag?</summary>
    <br>
    <blockquote>
      - The crossorigin attribute sets the <strong>mode</strong> of the request to an HTTP CORS Request. <br><br> 
    - Web pages often make requests to load resources on other servers. Here is where CORS comes in. <br><br> 
    - A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. <br><br>
    - CORS is used to manage cross-origin requests. <br><br> 
    - CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things. <br><br> 
      - <strong>Tip:</strong> The opposite of cross-origin requests is <strong>same-origin</strong> requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain). <br><br>  
    - CORS is a standard mechanism used to retrieve files from other domains.
    </blockquote> <br>
  </details>
  
   <details>
    <summary>What is difference between React and ReactDOM ?</summary>
    <br>
    <blockquote>
    - In order to work with <strong>React</strong> in the <strong>browsers</strong>, we need to include 2 libraries: React and ReactDOM. <br><br>
    - <strong>React</strong> library is responsible for creating views and <strong>ReactDOM</strong> library is responsible to actually render UI in the browser. <br><br>
    - Include these two libraries before your main JavaScript file. 
    </blockquote> <br>
  </details>
  
   <details>
    <summary>What is difference between react.development.js and react.production.js files via CDN ?</summary>
    <br>
    <blockquote>
    - react.production.js are the minified files. <br><br>
    - Both react.development.js and react.production.js contains the similar code. The code difference between both files is nothing. <br><br>
    - But, react.production.js is much more optimised for production use. The size of react.production.js will be very less then react.development.js
    </blockquote> <br>
  </details>
  
   <details>
    <summary>What is async and defer ?</summary>
    <br>
    <blockquote>
      - When we load a webpage then 2 major things happens, <strong>HTML Parshing</strong> and <strong>Loading of scripts</strong>.<br>
      - Now, <strong>Loading of scripts</strong> contains 2 parts, <strong>Fetching the script from the network</strong> & <strong>Executing it line by line</strong>. <br>
      - Now, there are 3 scenario: <strong>Normal</strong>, using <strong>Async</strong> & using <strong>Defer</strong>. <br><br> 
      - Normal Case: <script src="..." > <br>
      - In Normal case, during HTML parshing, when the browser encounter the script tag, it pauses the HTML parshing & start fetching the scripts from the network & then it executed them & again continues the HTML parshing after that. <br><br>
      - Using Async: <script async src="..." > <br>
      - In Async case, during HTML parshing, the browser parallelly fetches the script from the network. After fetching the script, it pauses the the HTML parshing & starts executing the script & then it again continues the HTML parshing after that.<br><br>
      - Using Defer: <script defer src="..." > <br>
      - In Async case, during HTML parshing, the browser parallelly fetches the script from the network. Now, when the HTML parshing completes, it then start executing the script at last. <br><br>
      - Also know, the Async does not guarantee the <strong>order of execution</strong> of the scripts but Defer does. <br><br>
      <img src="async-vs-defer-attributes.jpg"> <br><br>
      - When it comes to loading external JavaScript files on your website, should you use async or defer? <br><br>
      - Async allows your script to run as soon as it’s loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading. In most cases, async is the better option — but there are exceptions. Understanding when to use each one will help you create a faster and more efficient website. <br><br>
       - <strong>Async</strong> in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading. <br>
      - If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel. <br>
      - To use async, simply add the async  attribute to your script tag: <script async src="script.js"></script> <br><br>
      - By using the <strong>Defer</strong> attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load. <br>
      - To use defer, simply add the defer attribute to your script tag: <script defer src="script.js"></script> <br><br>
      - <a href="https://www.youtube.com/watch?v=IrHmpdORLu8"> reference video</a>
    </blockquote> <br>

  </details>
  

<!--  **************************************************************************************************************************************  -->
## [02 Igniting Our App](02-igniting-our-app)


<!--  **************************************************************************************************************************************  -->
## [03 Laying the foundation](03-laying-the-foundation)


<!--  **************************************************************************************************************************************  -->
## [04 Coding in React](04-coding-in-react)


<!--  **************************************************************************************************************************************  -->
## [05 Let's get hooked](05-lets-get-hooked)


<!--  **************************************************************************************************************************************  -->
## [06 Exploring the world](06-exploring-the-world)


<!--  **************************************************************************************************************************************  -->
## [07 Finding the path](07-finding-the-path)


<!--  **************************************************************************************************************************************  -->
## [08 Let's get Classy](08-Lets-get-classy)


<!--  **************************************************************************************************************************************  -->
## [09 Optimizing our App](09-optimizing-our-app)


<!--  **************************************************************************************************************************************  -->
## [10 What is seen is sold](10-what-is-seen-is-sold)


<!--  **************************************************************************************************************************************  -->
## [11 Data is the new oil](11-data-is-the-new-oil)


<!--  **************************************************************************************************************************************  -->
## [12 Let's build our store](12-lets-build-our-store)


<!--  **************************************************************************************************************************************  -->
## [13 Time for the test](13-time-for-the-test)


<!--  **************************************************************************************************************************************  -->
## [14 Machine Coding Interview](14-machine-coding-interview)


<!--  **************************************************************************************************************************************  -->
## [15 Building Advanced Features](15-building-advanced-features)


<!--  **************************************************************************************************************************************  -->


<!--
| S.No | Description | Topic | Link |
| --- | --- | --- | --- |
| 1 | Inception| <ul><li>Getting started with React</li><li>React vs ReactDOM</li><li>Create react element</li><li>Nested react Element</li></ul> | [Questions + Code](01-inception) |
| 2 | Igniting Our App | <ul> <li>Bundler: Parcel</li> <li>npm</li> <li>npx</li> <li>Setup React App</li> </ul> | [Questions + Code](02-igniting-our-app) |
-->


<!--
| S.No | Description | Topic|
| --- | --- | --- |
| 1 | [Inception](01-inception)| <ul><li>Getting started with React</li><li>React vs ReactDOM</li><li>Create react element</li><li>Nested react Element</li></ul> |
| 2 | [Igniting Our App](02-igniting-our-app) | <ul> <li>Bundler: Parcel</li> <li>npm</li> <li>npx</li> <li>Setup React App</li> </ul> |
-->


<!--
| * | chaperName | <ul> <li></li> <li></li> <li></li> <li></li> </ul> | [Questions + Code](enterlink) |
-->
