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
   > Will `npm run parcel index.html` work ???
   
   > No, It will not work. It will give error:
   ```
   npm ERR! Missing script: "parcel index.html"
   npm ERR! 
   npm ERR! To see a list of scripts, run:
   npm ERR!   npm run
   ```
   
   Because `npm run` will run a script, To run the package directly use `npx`:-  
   ```
   npx parcel index.html   
   or
   npm run start      // where "start" is script. (i.e "start": parcel index.html")
   
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


## Try & Run:-

### Q: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
```
const header = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
        "h2",
        {
          key: "h2",
        },
        "This is h2 Tag"
      ),
      React.createElement(
        "h3",
        {
          key: "h3",
        },
        "This is h3 Tag"
      )
  ]
);
```


### Q: Create the `same element using JSX`
```
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
```


### Q: Create a `functional component of the same with JSX`
```
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
```


### Q: Pass `attribute into the tag in JSX`
```
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```


### Q: `Composition of Component` (Add a component inside another)
```
const AnotherComponent = function(){
    return <h2> This is Another Component</h2>
}

const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <AnotherComponent/>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```


### Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
```
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
```


### Q: Create a `Header Component from scratch` using `Functional Component with JSX`
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```
const Header = () => {
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search anything you want..."/>
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={userIcon} alt="User Icon"/>
            </div>
        </header>
        </>
    )
}
```

