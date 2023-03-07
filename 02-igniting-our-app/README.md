# 02 - Igniting Our App

Today was about creating production-ready react app from scratch without using create-react-app. The concept of bundlers (Parcel) was explained in detail. We all assume React is the one superpower that makes the application faster, though it is partially right, the major credit goes to the other packages/helper utilities (Bundler) for speeding up the application, optimizing the code, improving the performance and lots more.

#### Topic Covered:

<ul> 
    <li>Bundler: Parcel</li> 
    <li>npm</li> 
    <li>npx</li> 
    <li>Setup React App</li> 
</ul>

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2002%20-%20Igniting%20our%20App%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2002%20-%20Igniting%20our%20App%20-%20Digital%20Notes.pdf)
- [Github [Link]](https://github.com/Learn-React-With-Harshi/chapter-02-igniting-react-app/blob/main/class-notes.md)

## Theory:

<details>
    <summary>What is `NPM`?</summary>
    <br>
    <blockquote>
<b>It is a tool used for package management</b> and the default package manager for Node projects. 
<br> NPM is installed, when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. <br><br>
        
- `npm` alternative is `yarn`
<br>
<b>NOTE:</b> NPM does not stand for Node Package Manager but everything else.        
        
### How to initialize `npm`?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


    </blockquote> <br><br>

 </details>

<details>
    <summary>What is `Parcel/Webpack`? Why do we need it?</summary>
    <br>
    <blockquote>
<b>Parcel/Webpack</b> is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features. <br>

### Parcel Features:

- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- DEV and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

### installation commands:

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands :

  - For development build:

  ```
  npx parcel <entry_point>
  ```

  - For production build :

  ```
  npx parcel build <entry_point>
  ```

     </blockquote> <br><br>
  </details>

<details>
    <summary>What is `.parcel-cache`</summary>
    <br>
    <blockquote>
        <b>.parcel-cache</b> is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
    </blockquote> <br>
 </details>

<details>
    <summary>What is `npx` ?</summary>
    <br>
    <blockquote>
  
  - `npx` npx is a tool that is used to execute the packages registered on the `npm registry` without installing them.
       
  - `npx` is a `npm package runner` that is used to execute the command without installing the package (just use on the go). When you run a package using `npx`, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, `npx` downloads the package files and installs the package, but it will only cache the files instead of saving it.

  Examples : 
  
  ```npx parcel index.html``` -> npx searches for `parcel` package in your environment and if not found, downloads it and then runs the command. (with index.html as entry point. you can remove index.html and put it in the source of package.json as well)
  
  ```npx create-react-app my-app``` -> npx seraches for `create-react-app` package in your environment, if not found, downlaods it and then creates my-app using create-react-app in the current project directory.
    </blockquote> <br>
 </details>

<details>
    <summary>What is difference between `dependencies` vs `devDependencies`</summary>
    <br>
    <blockquote>

First, lets understand what is dependencies:-         
- `Dependencies` are nothing but it is a third party package or we can say that modules installed using npm. <br><br>
Or <br><br>
- The `dependencies value` is used to specify `any other modules` that a given module (represented by the package. json ) requires to work. <br> When you run `npm install` from the root folder of a given module, it will install any modules listed in that dependencies object. <br><br>
        
| dependencies                                                    | devDependencies           | 
| -------------                                                   |:-------------:             | 
| Packages that are required in the production environment      | Packages that are required only in the development environment, and not in prod/testing environment| 
| Command : ```npm install <package-name>```| Command : ```npm install -D <package-name>```or ```npm install --save-dev <package-name>``` |  
| Eg : react, react-dom, redux, express, nodemon, babel, mocha (testing)      | Eg: parcel     |
</blockquote> <br><br>
 </details>

<details>
    <summary>What is Tree Shaking?</summary>
    <br>
    <blockquote>
    
`Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

OR
        
`Tree shaking` is a concept in JavaScript to describe the removal of dead code. Tree shaking is done by module bundler like parcel/webpack while bundling multiple javascript files into single files thus improving the web performance.
      
Steps to implement tree shaking : 
  1. Declare ES6 import and exports for the modules
  2. Bundler analyses the dependency tree during compilation phase.
  3. Any uncode code is removed from the final build.       
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is Hot Module Replacement (HMR)?</summary>
    <br>
    <blockquote>
        
The process of adding, removing or updating the modules while the application is running without full reload is called `Hot Module Replacement`. This feature is available in all module bundlers like Parcel, Webpack,etc.
        
There are many advantages of this features : 
  1) The application state is retained which is usually lost during full reload
  2) Instantly updates the browser when source css/js code is modified.

<b>Parcel</b> automatically does HMR, when the application is using library/framework like:React, Vue, Angular. If no library/framework is used, then HMR can be opted using `module.hot` API. <br>
Parcel provides HMR properties to keep track of files changes by using `file watcher algorithms`.
       
<b>Webpack</b> needs some configuration to be done for using HMR 
</blockquote> <br><br>
 </details>

<details>
    <summary>List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is `.gitignore`? What should we add and not add into it?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is the difference between `package.json` and `package-lock.json`</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>Why should I not modify `package-lock.json`?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is `node_modules` ? Is it a good idea to push that on git?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is the `dist` folder?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is `browserlists`</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
</details>

<details>
    <summary>Read about dif bundlers: vite, webpack, parcel</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
</details>

<details>
    <summary>Read about: ^ - caret and ~ - tilda</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
</details>

<details>
    <summary>Read about Script types in html (MDN Docs)</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
</details>

## Coding:

- In your existing project
  - intialize `npm` into your repo
  - install `react` and `react-dom`
  - remove CDN links of react
  - install parcel
  - ignite your app with parcel
  - add scripts for “start” and “build” with parcel commands
  - add `.gitignore` file
  - add `browserlists`
  - build a production version of your code using `parcel build`

## References

- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- BrowsersList: https://browserslist.dev/
