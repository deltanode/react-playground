## Laying the Foundation

- `git init` It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. 

-  Adding **script** in package.json 
   ```
   In package.json
   {
   "script": {
     "start": parcel index.html"
     "build": parcel build index.html"
     }
   }


-  npx ~= npm run 
   > will `npm run parcel index.html` work ???
   
   > No, It will not work. It will give error:
   ```
   npm ERR! Missing script: "parcel index.html"
   npm ERR! 
   npm ERR! To see a list of scripts, run:
   npm ERR!   npm run
   ```
   
   Because `npm run` will run a script.  
   ```
   npx parcel index.html   
   or
   npm run start      // where "start" is script. (i.e "start": parcel index.html")
   
   Note: `
   ```


   
 - parcel * Babel, itself does not remove console.log. For that we need a babel plugin 
   ```
   npm install babel-plugin-transform-remove-console --save-dev
   ```
   Now, create a babel conifuration file: `.babelrc`   

- In **Props** we pass **Key**. 
- Why do we pass Key? (Read: React Concilliation key)

- **JSX**
- Is JSX, HTML into javascript?
  > No, JSX is NOT html into javascript. It is HTML Like Syntex.
  ```
  const heading = <h1> Hello Everyone </h1>
  ```
  
- How does JSX executes?
  > **Babel** (which is a complier), takes the JSX code & gives back JS code
  > Babels reads our code word by word & creates an AST(Abstract Syntax Tree)
  >  JSX -> React.createElement() -> React Object => HTML(DOM)

- visit [babeljs.io](https://babeljs.io/)
  > JSX uses react.createElement() behind the scenes.
  > Babel is doing this for us.
  > Babel understand JSX & covert JSX COde into React.createElement Code
  > JSX is not a package. So, its not imported
  > JSX is a syntax

- JSX Expression
  ```
  const h1 = (
  <h1 id="title" key="123">
    Hello Everyone
  </h1>
  );
  ```
- **React Element**:

- **React Component**: Everything is a Component in react.

- Different ways to write Functional Compoment?

- Ways to render _React Element_ Vs _React Component_ ?

- How to use React Element isside React Component ?

- **Component Composition** ???
  > passing Component inside conponent is known as Component Composition



