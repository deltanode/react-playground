### `Chapter-08 Let's get Classy`

- **Class-based Components**
  - React started with components with class-based components and there was NO functional components. Functional components became popular after the introduction of Hooks.
  - Class-based Components are: 
    - less maintainable
    - little confusing
    - more code
    - difficult for new developer to understand
  - This is the right time to understand class-based components where you already know how React works and developed an app.


- Why class-based components now ? 
  - It's asked in interviews & already lot of old projects are still using it.

- Recap to routing & `Nesting Routes`: 
  ```
  localhost:1234/                  // parent
  localhost:1234/about             // children
  localhost:1234/about/profile     // children inside children
  ```
  - Read about all recommended routers.
  - `Profile.js` component inside `About.js` page (i.e children of children)
  - for children of children path is just `"profile"` not `"/profile"`

- How to tell React it's a class based component and not a normal class.
  -  using `React.Component`
      ```
      class ProfileClass extends React.Component {

      }
      ```
      
      
> **Important** : without _render() method_, we can't create class based component


- **render ()** method returns a `jsx`
    ```
    class ProfileClass extends React.Component {
      render(){
        return <h1> This is class component </h1>
      }
    }
    ```
  - In functional components, the function() itself returns a `jsx`


- How to pass **props** from parent to child? 
  - while receiving in this use `this.props.name`
  - React will collect all props and attach to 'this' and props
    ```
    class ProfileClass extends React.Component {
      render(){
        return (
          <h1> This is class component </h1>
          <h3>{this.props.name}</h3>
        )
      }
    }
    ```

- `How to create state ?`
  - In Functional Component: `useState()` hook is used to create a `state`
  - In Class Component, `this.state` in used in `constructor` method of class.
    ```
    class ProfileClass extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          stateName: value
        }
      }
      
      render(){
        return <h1> This is class component </h1>
      }
    }
    ```


- Why **super(props)** in constructor ?
  - refer [stackoverflow](https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e)

- `constructor` initialized the class instance
  - ```
    this.state = {
    stateName : value
    }
    ```

- `How to use state ?`
  - In Functional Components, {stateName}
  - In Class Component, {this.state.stateName}


- `How to create multiple states ? `
  - In Functional Components, 
    ```
    const [state1] = usestate(0);
    const [state2] = useState(0)
    ```
  - In Class Component,
    ```
    this.state = {
    state1 : 0,
    state2 : 0
    }
    ```

- `How to mutate state ?`
  - In Functional Components, 
    ```
    setStateName(newValue)
    ```
  
  - In Class Component,
    ```
    this.setState({
      stateName: newValue
    })
    ```

- `How to mutate multiple state ?`

  - In Functional Components, 
    ```
    setCount1(newValue)
    setCount2(newvalue)
    ```

  - In Class Component,
    ```
    this.setState({
      count1: newValue,
      count2 : newValue
    })


> **`React Life Cycle`**: `constructor()` is called and then `render()`, then `componentDidMount()`


- `How is API called made`
  - In FC, we use `useEffect()`
    - It render whatever we want with default state before API call
    - After update, it re-renders again.

  - In CC, we write our API code inside  `componentDidMount()` method
    - first, `constructor` will set default state, 
    - then, `render()` 
    - then, `componentDidMount()` for API call


- Question: 
  - In which order, the console.log output will be printed for `Nested Routes` -> **(Parent - Child)**
    Or
    In which order, the `constructor()`,`render()` & `componentDidMount()` will be called for `Nested Routes` -> (Parent - Child)
    - Output:
      ```
      - Parent: constructor 
      - Parent: render
      - Child: constructor
      - Child: render
      - Child: componentDidMount
      - Parent: componentDidMount
      ```
  - 

  - In which order, the console.log output will be printed for `Nested Routes` -> **(Parent - Child 1 - Child 2)***
    Or
    In which order, the `constructor()`,`render()` & `componentDidMount()` will be called for `Nested Routes` -> (Parent - Child 1 - Child 2)
    - Output:
      ```
      - Parent: constructor
      - Parent: render
      - child1: constructor
      - child1: render
      - child2: constructor
      - child2: render
      
      - child1: componentDidMount
      - child2: componentDidMount
      - Parent: componentDidMount
      ```

- React Lifecycle phases [Diagram]
  - When we render react component, then it has 2 phases: `Render phase` & `Commit phase`.
    - **Render phase**: In this phase, 
      - first, contructor() is called 
      - then, render() is called
    - **Commit phase**: In this phase, 
      - first, DOM is modified
      - then, componentDidMount() is called

- why **async** can be used in componentDidMount() but not in useEffect()
  - refer [blog](https://dev.to/stlnick/useeffect-and-async-4da8) & [stackoverflow](https://stackoverflow.com/questions/72133507/issues-upgrading-async-componentdidmount-to-async-useeffect) 

---

- Make API call in componentDidMount()
  - if async componentDidMount -> it takes time
  - this.setState() -> re-renders component

- Lifecycle :
  - child constructor
  - child render
  - child componentDidMount

  - API call
  - setState()

  - render
  - componentDidUpdate

  - componentWillUnmount

  - componentDidMount - Called Only once in a component
  - componentDidUpdate - Called when the state is updated

If there is no state, there will be no componentDidUpdate
