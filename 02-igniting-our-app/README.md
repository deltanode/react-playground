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
    - `It is a tool used for package management` and the default package manager for Node projects. NPM is installed, when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.
    - `npm` alternative is `yarn`
    <b>How to initialize npm?</b>
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
`Parcel/Webpack` is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

<b>Parcel Features:<b>

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
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is `npx` ?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is difference between `dependencies` vs `devDependencies`</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is Tree Shaking?</summary>
    <br>
    <blockquote>
    - 
    </blockquote> <br><br>
 </details>

<details>
    <summary>What is Hot Module Replacement?</summary>
    <br>
    <blockquote>
    - 
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
