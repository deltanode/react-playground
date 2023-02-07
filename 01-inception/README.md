# 01 - Inception

Getting started with react.

## Theory:

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
    -   
    </blockquote> <br>
  </details>
  
   <details>
    <summary>What is async and defer ?</summary>
    <br>
    <blockquote>
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
  
  <!--
  <details>
    <summary>Question</summary>
    <br>
    <blockquote></blockquote> <br><br>
  </details>
  -->

## Coding:

- Set up all the tools in your laptop
  - VS Code
  - Chrome
  - Extensions of Chrome
- Build your first Hello World program using,
  - [Using just HTML](index.html)
  - [Using JS to manipulate the DOM](index.html)
  - [Using React](App.js)
    - use CDN Links
    - Create an Element
    - Create nested React Elements
    - Use root.render
- Learn about Arrow Functions before the next chapter.

## References:

- https://beta.reactjs.org/apis/react/createElement
