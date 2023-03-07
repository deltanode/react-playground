# 02 - Igniting Our App

Today was about creating production-ready react app from scratch without using create-react-app. The concept of bundlers (Parcel) was explained in detail. We all assume React is the one superpower that makes the application faster, though it is partially right, the major credit goes to the other packages/helper utilities (Bundler) for speeding up the application, optimizing the code, improving the performance and lots more.

#### Topic Covered:

- Bundlers
 - Parcel setup
 - About `npm` & `npx`
 - About `node_modules`
 - Understanding `package.json` and `package-lock.json`
 - installing react as a packge using `npm`
 - Setting up our own `create-react-app` setup without using `create-react-app`

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
<b>NOTE:</b> `NPM` DOESN'T stand for `Node Package Manager` but everything else.        
        
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
    </blockquote> <br>
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
</blockquote> <br>
 </details>

<details>
    <summary>List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.</summary>
    <br>
    <blockquote>
        
Superpowers of `parcel`: 
  1. `minification` (Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on.)
  2. `image optimizations` (By default, Parcel includes lossless image optimization for JPEGs and PNGs in prod. mode, which reduces the size of images without affecting their quality.) 
  3. `compression`(renaming variables)
  4. `cleaning our code` (Note: parcel & babel, itself doesn't remove consol.log. To achieve that, we need to config it & we will be installing a plugin `npm install babel-plugin-transsform-remote-control`)
  5. `super fast build`
  6. `dev and prod builds`
  7. `caching while development` (Parcel caches everything it builds. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build.)
  8. `Old browser competibility` (Parcel allows support for older broser also, by using `BrowserList` in package.json)     
  9. `Https on dev as well npx parcel index.html (--https)`
  10. `Consistent Hashing Algorithm`
  11. `Zero configuration` (Unlike Webpack, Parcel requires zero configurations to setup.)
  12. `Tree shaking` (Removing unwanted code or dead code.)
  13. `API proxy`
  14. `Hot module replacement` (Parcel provides HMR properties to keep track of files changes by using file watcher algorithms.)        
  </blockquote> <br>
 </details>

<details>
    <summary>What is `.gitignore`? What should we add and not add into it?</summary>
    <br>
    <blockquote>
        
- This file contains the list of files that we should not commit to the repository.

OR
        
- The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
    </blockquote> <br>
 </details>

<details>
    <summary>What is the difference between `package.json` and `package-lock.json`</summary>
    <br>
    <blockquote>
        
| package.json    | package-lock.json    | 
| -------------   |:-------------:       |
| It contains metadata about the project like name, version, author, scripts and dependencies required by the project  | It contains dependencies required by the project with the exact version with which it was created |
| It contains only direct dependencies | It contains nested/transitive dependencies (dependencies of dependencies) | 
| This file is created as soon as `npm init` command is fired | This file is automatically generated after an `npm install` (i.e when npm modifies either `node_modules` tree or `package.json`) |
| This file must not be put in `.gitignore` file |  This file must also not be put in `.gitignore` file |
| During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended | During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended. (Also, it also allows to go back to the past version of the dependencies without actual ‘committing the node_modules folder.) | 
| ^ or ~ can be used in version of dependencies in package.json | Only exact version of dependencies must be used in package-lock.json |

<br>
        
**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.
        
</blockquote> <br>
 </details>

<details>
    <summary>Why should I not modify `package-lock.json`?</summary>
    <br>
    <blockquote>
        
As the name suggests, it locks the package-lock.json file,
        `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.
        
</blockquote> <br>
 </details>

<details>
    <summary>What is `node_modules` ? Is it a good idea to push that on git?</summary>
    <br>
    <blockquote>
    
In simple words, `node_modules` holds the source code of the packages that are installed through npm. It is a very bad practice to push `node_modules` to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in `node_modules` can be re-generated using `package.json` file. 
</blockquote> <br>
 </details>

<details>
    <summary>What is the `dist` folder?</summary>
    <br>
    <blockquote>
    
The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
        
OR
        
The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

</blockquote> <br>
 </details>

<details>
    <summary>What is `browserlists`</summary>
    <br>
    <blockquote>
    
`Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

The  `browserslist` field in package.json can be used to specify which browsers/node.js versions the application supports. The value of this object can be an array of statistics ( % coverage), last versions, Node.js versions, Browser versions or even unreleased versions.

```
"browsersList" : ["last 2 versions", "> 1%", "not dead"]

```

</blockquote> <br>
</details>

<details>
    <summary>Read about diff bundlers: vite, webpack, parcel</summary>
    <br>
    <blockquote>
        
`Babel`
- Babel is a JavaScript compiler that allows you to use new features of ECMAScript before they are implemented in browsers.
- Consider Babel if you want to use new JavaScript features that are not yet implemented in browsers.

`Webpack`
- Webpack is a module bundler for modern JavaScript applications. It is a module bundler that can be used in a variety of ways, from a build-time tool to a development-time tool.
- Consider webpack if you want to bundle your JavaScript application for production.
- Consider Webpack if you want to bundle JavaScript files for usage in a browser.

`Parcel`     
- Parcel is a zero configuration web application bundler that is fast and easy to use.
- Consider Parcel if you want a fast and easy to use bundler for your web application.
- Consider Parcel if you want a zero-configuration bundler that supports all module formats and works with any JavaScript library.
- Consider Parcel if you want to automate tasks such as minification, compilation, unit testing, linting, etc. and want to use a JavaScript bundler.
        
`Vite`
- Vite is a web-based IDE that is designed to be a fast and lightweight alternative to traditional IDEs. It is a cloud-based IDE that runs on any device and is accessible from any browser.
- Consider Vite if you want a lightweight IDE that is accessible from any browser.
      
`Rollup`
- Rollup is a module bundler for JavaScript modules. It is a minimalistic alternative to webpack and is best suited for smaller projects.
- Consider Rollup if you are looking for a minimalistic alternative to webpack.
- Consider Rollup if you want a module bundler that supports ES6 modules and can be used with any module format.
        
`Gulp`
- Gulp is a JavaScript task runner that automates tasks such as minification, compilation, unit testing, linting, etc. Gulp is a streaming build system, meaning it doesn't have to wait for tasks to finish before executing the next one.
- Consider Gulp if you want to automate tasks such as minification, compilation, unit testing, linting, etc.
        
</blockquote> <br>
</details>

<details>
    <summary>Read about: ^ - caret and ~ - tilda</summary>
    <br>
    <blockquote>
    
| ^ version | ~ version | 
| --- | :----: | 
| In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with `^` , then it will be updated to all future `minor` versions and not any major version | In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with `~` , then it will be updated to all future `patch` versions and not minor/major versions | 
| Eg: "react": "^18.2.0" will use releases from 18.2.0 to < 19.0.0 | Eg: "~18.2.0" will use releases from "18.2.0" < 18.3.0 |

Patch version is used for any bug fixes. Minor version is used for adding new functionality. Major version may contain major functionality changes/ some existing features may be deprecated.
So if ~ is used , user will be updated to all bug fixed patch versions. If ^ is used, user will be updated to all new functionality/ features included minor version.

</blockquote> <br>
</details>

<details>
    <summary>Read about Script types in html (MDN Docs)</summary>
    <br>
    <blockquote>
    
`type` attribute of the <script> tag indicates the type of script.Until HTML 4,  type is a required attribute. The value of type can be any of the following : 

```
<script type="" src="app.js"></script>
```
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

```
<script type="module" src="app.js"></script>
```
If the type attribute is set `module`, then the code in that js file is treated as module.

```
<script type="importmap" src="app.js"></script>
```
If the type attribute is set `importmap`, the body of teh element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

```
<script type="{$anyothervalue}" src="app.js"></script>
```
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the `src` attribute.
        
</blockquote> <br>
</details>

<details>
    <summary>Why `node_module` has a another `package-lock.json`(Hidden Lockfiles) </summary>
    <br>
    <blockquote>

In order to avoid processing the node_modules folder repeatedly, npm as of v7 uses a "hidden" lockfile present in node_modules/.package-lock.json. This contains information about the tree, and is used in lieu of reading the entire node_modules hierarchy provided that the following conditions are met:
  - All package folders it references exist in the node_modules hierarchy.
  - No package folders exist in the node_modules hierarchy that are not listed in the lockfile.
  - The modified time of the file is at least as recent as all of the package folders it references.
        
That is, the hidden lockfile will only be relevant if it was created as part of the most recent update to the package tree. If another CLI mutates the tree in any way, this will be detected, and the hidden lockfile will be ignored.        
        
</blockquote> <br>
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
