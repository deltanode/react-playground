# `Class Based Components` Vs `Fuctional Components`:

## Topics:

1. Basic Example
2. Example: of using `props`
3. Example of using `props` & `state`
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

### 3. Example of using `props` & `state`

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 4. Best place for API calls

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 5. `React Life Cycle`: Q: Tell the order in which console will be printed? [Parent -> Child]

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 6. `React Life Cycle`: Q: Tell the order in which console will be printed? [Parent -> Child1 & Child2]

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 7. `React Life Cycle Diagram`

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 8. `React Life Cycle Diagram`

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 9. Example: Calling `Github API` & checking the order of execution as per `React Life Cycle`

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

> - **Never Ever Compare `React Life Cucle Method` with `Fuctional Component Hooks**
> - Eg: Don't compare `useEffect()` with `componentDidMount()` bcz useEffect() is NOT using componentDidMount() behind the seen.

## Comparing the way of writing code in Functional Based Component & Class Based Component.

### 1. Dependency Array case:

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 2. Dependency Array (with 2 dependency):

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 3. setTimeOut in `componentDidMount()` (i.e using `componentWillUnmount()`):

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```

### 4. setTimeOut in `useEffect()` (i.e using `return` in useEffect()):

- Class Based Component

  ```

  ```

  > **Note**:
  >
  > -

- Funtional Component

  ```

  ```

- Using above components:

  ```

  ```
