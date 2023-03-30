## `Class Based Components` Vs `Fuctionl Components`:

### 1. Basic Example:
  - Class Based Component
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
    > __Note__: 
    > - we can't create class based components without `render()` method.
    > - This is the only mandatory method for class based components.
    > - By using `extends React.Component`, we are specifing that it is NOT a Normal Class but a  React Component


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
    import ProfileClassComponent1 from "./ProfileClassComponent1"

    const About = () => {
      return (
        <div className="flex-container">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, adipisci?</p>
          <ProfileFunctionalComponent/>
          <ProfileClassComponent1" />
        </div>
      )
    }

    export default About
    ```
  
### 2. Example of using `props`
  - Class Based Component
    ```
    ```
    > __Note__: 
    > - 
    
  - Funtional Component
    ```
    ```
    
  - Using above components:
    ```
    ```
  
  
