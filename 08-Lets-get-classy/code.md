# `Class Based Components` Vs `Fuctional Components`:

## Topics:

1. Basic Example
2. Example: of using `props`
3. Example of using `state`
4. Best place for API calls
5. `React Life Cycle`: Tell the order in which console will be printed? [Parent -> Child]
6. `React Life Cycle`: Tell the order in which console will be printed? [Parent -> Child1 & Child2]
7. `React Life Cycle`
8. `React Life Cycle Diagram`
9. Example: Calling `Github API` & checking the order of execution as per `React Life Cycle`
10. Comparing the way of writing code in Functional Based Component & Class Based Component.
    1. Dependency Array case:
    2. Dependency Array (with 2 dependency):
    3. setTimeOut in `componentDidMount()` (i.e using `componentWillUnmount()`):
    4. setTimeOut in `useEffect()` (i.e using `return` in useEffect()):

<hr>
<br>

### 1. Basic Example:

- Class Based Component ``

  ```
  import React from "react"

  class ProfileClassComponent1 extends React.Component {
    render() {
      console.log("Inside Class Component")
      return (
        <div>
          <h3>Profile: Class Component</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      )
    }
  }
  ```

  > **Note**:
  >
  > - we can't create class based components without `render()` method.
  > - This is the only mandatory method for class based components.
  > - By using `extends React.Component`, we are specifing that it is NOT a Normal Class but a React Component

- Funtional Component

  ```
  const ProfileFunctionalComponent = props => {
    console.log("Inside Functional Component")
    return (
      <div>
        <hr />
        <h3>Profile: Functional Component</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <hr />
      </div>
    )
  }

  export default ProfileFunctionalComponent
  ```

- Using above components:

  ```
  import React from "react"
  import ProfileFunctionalComponent from "./ProfileFunctionComponent"
  import ProfileClassComponent from "./ProfileClassComponent1"

  const About = () => {
    return (
      <div className="flex-container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci?</p>
        <ProfileFunctionalComponent/>
        <ProfileClassComponent" />
      </div>
    )
  }

  export default About
  ```

### 2. Example: of using `props`

- Class Based Component

  ```
  import React from "react"

  class ProfileClassComponent1 extends React.Component {
    render() {
      console.log("Inside Profile Class Component")
      return (
        <div>
          <h3>Profile: Class Component</h3>
          <p>NAME: {this.props.name}</p>
          <p>ADDRESS: {this.props.address}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent1
  ```

  > **Note**:
  >
  > - `this.props` is used to access the `props` in class based components.
  > - Note, we have not used `constructer` & we are still using `this.props`

- Funtional Component

  ```
  const ProfileFunctionalComponent1 = props => {
    return (
      <div>
        <hr />
        <h3>Profile: Functional Component</h3>
        <p>NAME: {props.name}</p>
        <p>ADDRESS: {props.address}</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <hr />
      </div>
    )
  }

  export default ProfileFunctionalComponent1

  ```

- Using above components:

  ```
  import React from "react"
  import ProfileFunctionalComponent1 from "./ProfileFunctionComponent1"
  import ProfileClassComponent1 from "./ProfileClassComponent1"

  const About = () => {
    return (
      <div className="flex-container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci?</p>
        <ProfileFunctionalComponent1 name="Ram" address="India" />
        <ProfileClassComponent1 name="Ram" address="India" />
      </div>
    )
  }

  export default About
  ```

### 3. Example of using `state`

- Class Based Component

  ```
  import React from "react"

  class ProfileClassComponent2 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count1: 11,
        count2: 22
      }
    }

    render() {
      console.log("Inside Profile Class Component")
      return (
        <div className="warning">
          <h3>Profile: Class Component</h3>
          <p>NAME: {this.props.name}</p>
          <p>ADDRESS: {this.props.address}</p>
          <p>Count1: {this.state.count1}</p>
          <p>Count2: {this.state.count2}</p>
          <button onClick={() => this.setState({ count2: this.state.count2 + 1 })}>Increase</button>
          <button onClick={() => this.setState({ count2: this.state.count2 - 1 })}>Decrease</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent2
  ```

  > **Note**:
  > use `this.state{ stateVariable: value}` to create state variable
  > WE DO NOT MUTATE STATE DIRECTLY (Eg: `this.state = value`).
  > Instead use `this.setState{stateVariable: value}` to update state variable

- Funtional Component

  ```
  import { useState } from "react"

  const ProfileFunctionalComponent2 = props => {
    const [count1] = useState(1)
    const [count2, setCount2] = useState(2)
    return (
      <div>
        <hr />
        <h3>Profile: Functional Component</h3>
        <p>NAME: {props.name}</p>
        <p>ADDRESS1111: {props.address}</p>
        <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
        <p>Lorem ipsum dolor sit amet.</p>
        <hr />
      </div>
    )
  }

  export default ProfileFunctionalComponent2
  ```

- Using above components:

  ```
  import React from "react"
  import ProfileFunctionalComponent2 from "./ProfileFunctionComponent2"
  import ProfileClassComponent2 from "./ProfileClassComponent2"
  import { Outlet } from "react-router-dom"

  const About = () => {
    return (
      <div className="flex-container">
        <h2 className="warning">About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci?</p>
        <Outlet />
        <ProfileFunctionalComponent2 name="Ram111" address="India" />
        <ProfileClassComponent2 name="Ram" address="India" />
      </div>
    )
  }

  export default About
  ```

### 4. Best place for API calls

- Class Based Component

  ```
  import React from "react"

  class ProfileClassComponent2 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    componentDidMount() {
      console.log("API CALL inside Class Component")
    }

    render() {
      console.log("Inside Profile Class Component")
      return (
        <div className="warning">
          <h3>Profile: Class Component</h3>
          <p>Count: {this.state.count}</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent2
  ```

  > **Note**:
  >
  > - componentDidMount() is only called in the initial render.
  > - React has a Life Cycle Methods that are call:
  >   - First constructor() is called
  >   - then render() is called
  >   - then componentDidMount() is called

- Funtional Component

  ```
  import { useState, useEffect } from "react"

  const ProfileFunctionalComponent3 = props => {
    const [count] = useState(0)

    useEffect(() => {
      console.log("API CALL inside Functional Component")
    }, [])

    return (
      <div>
        <hr />
        <h3>Profile: Functional Component</h3>
        <p>Count: {count}</p>
        <hr />
      </div>
    )
  }

  export default ProfileFunctionalComponent3
  ```

### 5. `React Life Cycle`: Q: Tell the order in which console will be printed? [Parent -> Child]

- Class Based Component `About.js` (Parent)

  ```
  import React from "react"
  import ProfileClassComponent from "./ProfileClassComponent4"

  class AboutClassComponent extends React.Component {
    constructor() {
      super()
      console.log("Parent: constructor()")
    }

    componentDidMount() {
      console.log("Parent: componentDidMount()")
    }

    render() {
      console.log("Parent: render()")
      return (
        <div className="flex-container">
          <h2 className="warning">About</h2>

          <ProfileClassComponent />
        </div>
      )
    }
  }

  export default AboutClassComponent
  ```

- Class Based Component `Profile.js` (Children)

  ```
  import React from "react"

  class ProfileClassComponent4 extends React.Component {
    constructor(props) {
      super(props)

      console.log("Child: Constructor()")
    }

    componentDidMount() {
      console.log("Child: ComponentDidMount()")
    }

    render() {
      console.log("Child: Render()")
      return (
        <div>
          <h3>Profile: Class Component</h3>
          <p>Count: 0</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent4
  ```

- Output:

  ```
  Parent: constructor()
  Parent: render()

  Child: Constructor()
  Child: Render()
  Child: ComponentDidMount()

  Parent: componentDidMount()
  ```

  > **Reason**:
  >
  > - Because react tries to patch up the `render phase`, that is why,
  >   - Parent: Constructor()
  >   - Parent: Render()
  >   - Child: Constructor()
  >   - Child: Render()
  > - Then, DOM is UPDATED [i.e displaying some UI to the user Eg: shimmer ]
  > - Then, `Commit Phase` is completed,
  >   - Child: ComponentDidMount()
  >   - Parent: ComponentDidMount()

### 6. `React Life Cycle`: Q: Tell the order in which console will be printed? [Parent -> Child1 & Child2]

- Class Based Component `About.js` (Parent)

  ```
  import React from "react"
  import ProfileClassComponent1 from "./ProfileClassComponent5"
  import ProfileClassComponent2 from "./ProfileClassComponent6"

  class AboutClassComponent extends React.Component {
    constructor() {
      super()
      console.log("Parent: constructor()")
    }

    componentDidMount() {
      console.log("Parent: componentDidMount()")
    }

    render() {
      console.log("Parent: render()")
      return (
        <div className="flex-container">
          <h2 className="warning">About</h2>

          <ProfileClassComponent1 />
          <ProfileClassComponent2 />
        </div>
      )
    }
  }

  export default AboutClassComponent
  ```

- Class Based Component `Profile1.js` (Child-1)

  ```
  import React from "react"

  class ProfileClassComponent5 extends React.Component {
    constructor(props) {
      super(props)

      console.log("Child-1: Constructor()")
    }

    componentDidMount() {
      console.log("Child-1: ComponentDidMount()")
    }

    render() {
      console.log("Child-1: Render()")
      return (
        <div>
          <h3>Profile: Class Component [Child 1]</h3>
          <p>Count: 0</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent5
  ```

- Class Based Component `Profile2.js` (Child-2)

  ```
  import React from "react"

  class ProfileClassComponent6 extends React.Component {
    constructor(props) {
      super(props)

      console.log("Child-2: Constructor()")
    }

    componentDidMount() {
      console.log("Child-2: ComponentDidMount()")
    }

    render() {
      console.log("Child-2: Render()")
      return (
        <div>
          <h3>Profile: Class Component [Child 2]</h3>
          <p>Count: 0</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent6
  ```

- Output:

  ```
  Parent: constructor()
  Parent: render()

  Child-1: Constructor()
  Child-1: Render()
  Child-2: Constructor()
  Child-2: Render()

  Child-1: ComponentDidMount()
  Child-2: ComponentDidMount()
  Parent: componentDidMount()
  ```

  > **Reason**:
  >
  > - Because react tries to patch up the `render phase`, that is why,
  >   - Parent: constructor()
  >   - Parent: render()
  >   - Child-1: Constructor()
  >   - Child-1: Render()
  >   - Child-2: Constructor()
  >   - Child-2: Render()
  >   - So, react tries to complete the `render phase` for the parent as well as all the children.
  > - Then, DOM is UPDATED [i.e displaying some UI to the user. Eg: shimmer ]
  > - Then, `Commit Phase` is completed,
  >   - Child-1: ComponentDidMount()
  >   - Child-2: ComponentDidMount()
  >   - Parent: ComponentDidMount()

### 7. `React Life Cycle`

When `react` is rendering, then render happens in 2 PHASES: **`Render Phase`** & **`Commit Phase`**

- In `Render Phase`:
  - first, `constructor() is called &
  - then, `render() is called
- In `Commit Phase`:
  - first, react will `update the DOM`
  - then, `componentDidMount() is called

### 8. `React Life Cycle Diagram`

- Reference: (Diagram of React Life Cycle Method)[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]

### 9. Example: Calling `Github API` & checking the order of execution as per `React Life Cycle`

- Class Based Component `About.js` (Parent)

  ```
  import React from "react"
  import ProfileClassComponent from "./ProfileClassComponent7"

  class AboutClassComponent extends React.Component {
    constructor() {
      super()
      console.log("Parent: constructor()")
    }

    componentDidMount() {
      console.log("Parent: componentDidMount()")
    }

    render() {
      console.log("Parent: render()")
      return (
        <div className="flex-container">
          <h2 className="warning">About</h2>

          <ProfileClassComponent />
        </div>
      )
    }
  }

  export default AboutClassComponent
  ```

- Class Based Component `Profile.js` (Child)

  ```
  import React from "react"

  class ProfileClassComponent7 extends React.Component {
    constructor(props) {
      super(props)

      console.log("Child: Constructor()")
    }

    async componentDidMount() {
      console.log("Child: ComponentDidMount() - START")
      const user = "deltanode"
      const data = await fetch("https://api.github.com/users/" + user)
      const json = await data.json()
      console.log(json)
      console.log("Child: ComponentDidMount() - END")
    }

    render() {
      console.log("Child: Render()")
      return (
        <div>
          <h3>Profile: Class Component</h3>
          <p>Count: 1001</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent7

  ```

- Output:

  ```
  - Parent: constructor()
  - Parent: render()
  - Child: Constructor()
  - Child: Render()

  - Child: ComponentDidMount() - START
  - Parent: componentDidMount()

  - {login: 'deltanode', id: 114831, avatar_url: '...', gravatar_id: '...', …}
  - Child: ComponentDidMount() - END

  ```

  > **Note**:
  >
  > - As, the `componentDidMount()` is a **async** function.
  > - So, when it will start executing it will console log `Child: ComponentDidMount() - START`
  > - After that a API call will be made.
  > - Then, parent `componentDidMount()` will be called.
  > - Now, when the response will be received for the API call then then it will be console logged.
  > - So, because of **async**, `Child: ComponentDidMount() - END` will be console logged at last.

> - **Never Ever Compare `React Life Cucle Method` with `Fuctional Component Hooks**
> - Eg: Don't compare `useEffect()` with `componentDidMount()` bcz useEffect() is NOT using componentDidMount() behind the seen.

## Comparing the way of writing code in Functional Based Component & Class Based Component.

### 1. Dependency Array case of useEffect() in Class Based Component:

- Case1: when no array is passed, i.e `useEffect(callback):

  - As, we know that `componentDidMount()` is called during the initial render only.
  - Now, there is one more `react life cycle method` known as **`componentDidUpdate()`**
  - This **`componentDidUpdate()`** is called every time after **every `re-render`**

- Case1: when dependency array is passed, i.e `useEffect(callback,[someStateVariable]):
  - In this case we will be using **if & else** inside `componentDidMount()` & `componentDidUpdate()`.
  - So, when there are many dependancy then it become a mess as per the redability.

### 2. Dependency Array (with 2 dependency):

- In this case we will be using **if & else** inside `componentDidMount()` & `componentDidUpdate()`.
- So, when there are many dependancy then it become a mess as per the redability.

  ```
  componentDidUpdate(prevProps, prevState) {
      if (this.state.count !== prevState.count) {
        // code
      }
      if (this.state.count2 !== prevState.count2) {
        // code
      }
      console.log("Component Did Update");
  }

  ```

### 3. setTimeOut in `componentDidMount()` (i.e using `componentWillUnmount()`):

- Class Based Component

  ```
  import React from "react"

  class ProfileClassComponent8 extends React.Component {
    componentDidMount() {
      this.timer = setInterval(count => {
        console.log("Hello")
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.timer) // Code Clean Up
    }

    render() {
      return (
        <div>
          <h3>Profile: Class Component</h3>
          <p>Count: 1001</p>
        </div>
      )
    }
  }

  export default ProfileClassComponent8
  ```

  > **Note**:
  >
  > - We are creating a Single Page Application
  > - As it has only one page, So, `setInterval` will continue forever, even after new component is renderend.
  > - Thus, we are writing the **clear interval** in `componentWillUnmount()`
  > - As, `componentWillUnmount()` will be called when the component will Unmount.
  > - Reference: (Life Cycle Method)[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]

### 4. setTimeOut in `useEffect()` (i.e using `return` in useEffect()):

- Funtion Based Component (useEffect() & return)

  ```
  import { useState, useEffect } from "react"

  const ProfileFunctionalComponent4 = props => {
    const [count] = useState(0)

    useEffect(() => {
      // API Call

      const timer = setInterval(() => {
        console.log("Hi")
      }, 1000)

      return () => {
        clearInterval(timer)
        console.log("useEffect Return")
      }
    }, [])

    return (
      <div>
        <hr />
        <h3>Profile: Functional Component</h3>
        <p>Count: {count}</p>
        <hr />
      </div>
    )
  }

  export default ProfileFunctionalComponent4
  ```

  > **Note**:
  >
  > - We are creating a Single Page Application (SPA)
  > - As it has only one page, So, `setInterval` will continue forever, even after new component is renderend.
  > - Thus, we are writing the **clear interval** in the **`return`** of useEffect()
  > - So, when the component will unmount, then `return of useEffect()` will be called.

  > **Note**:
  >
  > - Functional Component **DOESN'T** have `Life Cycle Methods`.
  > - It has `HOOKS` to achieve the same functionality

  > **DISCLAMER**:
  >
  > - Never compare `Life Cycle Methods` in class component with 'HOOKS' of funtional component.
  > - Eg: Don't say `useEffect()` of functional compoment is same as `componentDIDMount()` of class component.
