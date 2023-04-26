# 08 - Let's get Classy

Today, it was all about understanding the creating class-based component, it's different lifecycle methods, whats happening under the hood. It was an amazing session as we can easily grasp the concept since we already know how component are rendered in react using functional components. We even discussed about various possible interview questions.

### Topics Coverd:-

- Create `Class Based Component`.
- Pass `props` from Parent to child in Class Based Component.
- Create a `state variable` inside child in Class Based Component.
- `Lifecycle method` in React.
- Play with the console logs to `find out the correct order` of their execution.
- Use `clearInterval` to fix the issue caused by the interval in class based component.
- Use `clearInterval` to fix the issue caused by the interval in useEffect() (i.e using return in useEffect()).


## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2008%20-%20Let's%20get%20Classy%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2008%20-%20Let's%20get%20Classy%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/08-Lets-get-classy/notes.md)
- [Code.md](https://github.com/deltanode/react-playground/blob/main/08-Lets-get-classy/code.md)

> **Credit**: `Digital Notes:` [Arpan Kesh](https://www.linkedin.com/in/arpan-kesh-687740194/) | `Handwritten Notes:`[Ashraya KK](https://github.com/Ashrayaa/Namaste-React) | `Notes.md:` [Harshitha Solai](https://github.com/Learn-React-With-Harshi)

## Theory:

<!-- *******************************-->
<details>
<summary>How do you create `Nested Routes react-router-dom` configuration?</summary><br>
<blockquote>

We can create a `Nested Routes` inside a react router configuration as follows:
- First call `createBrowserRouter()` for routing different pages:
  ```
  const router = createBrowserRouter([
     {
        path: "/",                     // show path for routing
        element: <Parent />,           // show component for particular path
        errorElement: <Error />,       // show error component for path is different
        children: [                    // show children component for routing
           {
              path: "/path",
              element: <Child />
           }
        ],
     }
  ])
  ```
- Now we can create a nested routing for `/path` using `children` again as follows:
  ```
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Parent />,
        errorElement: <Error />,
        children: [
           {
              path: "/path",
              element: <Child />,
              children: [              // nested routing for subchild
                 {
                    path: "/child",
                    element: <SubChild />,
                 }
              ],
           }
        ],
     }
  ])
  ```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Read about `createHashRouter`, `createMemoryRouter` from React Router docs.</summary><br>
<blockquote>

`createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `order of life cycle method calls` in `Class Based Components`?</summary><br>
<blockquote>

Following is the order of lifecycle methods calls in `Class Based Components`:
  1. constructor()
  2. render ()
  3. componentDidMount()
  4. componentDidUpdate()
  5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

**More Details**

Class based components are executed in two phases :  `Render phase` & `Commit phase`. 

- `Render phase` is pure and no side effects. It may be paused, restarted or aborted by React (when child component is created for eg). The `constructor()`, `render()` and `componentDidMount()` happens in this phase. 
- In constructor, the props are passed to its parents. 

**These methods are called in the following order**, when an instance of a component is being created and inserted into the DOM:

- `Mounting`: 
   - **constructor**
       - The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
       - Initializing local state by assigning an object to this.state
       - Binding event handler methods to an instance.
       - __NOTE:__ Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

   - **componentDidMount()**
       - componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
       - You may call setState() immediately in componentDidMount() so that it triggers re-render before the browser updates the screen.

- `Updating`: 
   - **componentDidUpdate()**
       - componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

- `Unmounting` :
   - **componentWillUnmount()** 
       - componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we use `componentDidMount`?</summary><br>
<blockquote>

- The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). 
- This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
- We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

**More Details**

If you need to load data from a remote endpoint, then this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. 
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we use `componentWillUnmount`? Show with `example`.</summary><br>
<blockquote>

- `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. 
- Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. 
- So, it is required to stop those processes before leaving the page. Otherwise. if we revisit the same page, a new process will starts along with the previous process which will affects the browser performance.

**For example**, in Repo class, during `componentDidMount()` a timer is set with an interval of every 1 second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>(Research) Why do we use `super(props)` in `constructor`?</summary><br>
<blockquote>

- `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
- super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. 
- If super() is not used, then `Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor` is thrown in the console.
- A component that extends `React.Component` must call the `super()` constructor in the derived class since it’s required to access this context inside the derived class constructor.
- When you try to use props passed on parent to child component in child component using `this.props.name`, it will still work without super(props). Only super() is also enought for accessing props in render method. 
- The main difference between super() and super(props) is the `this.props` is undefined in *child's constructor* in super() but `this.props` contains the passed props if super(props) is used.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>(Research) Why `can't we have` the `callback function` of `useEffect async`?</summary><br>
<blockquote>

- `useEffect` expects it's callback function to *return nothing* or *return a function* (i.e cleanup function that is called when the component is unmounted). 
- If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
- **Solution** to this is, **not** making the callback function async, but creating **another** async function inside callback function of useEffect() 
</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## Quick Code Reference

| Project | Tech Stack | Source Code |
| --- | --- | --- |
| Food Delivery App | React | <ul><li>- [x] [About.js](./src/components/About.js)</li><li>- [x] [ProfileFunctionComponent1.js](./src/components/ProfileFunctionComponent1.js)</li><li>- [x] [ProfileClassComponent1.js](./src/components/ProfileClassComponent1.js)</li><li>- [x] [ProfileFunctionComponent2.js](./src/components/ProfileFunctionComponent2.js)</li><li>- [x] [ProfileClassComponent2.js](./src/components/ProfileClassComponent2.js)</li><li>- [x] [ProfileFunctionComponent3.js](./src/components/ProfileFunctionComponent3.js)</li><li>- [x] [ProfileClassComponent3.js](./src/components/ProfileClassComponent3.js)</li><li>- [x] [ProfileFunctionComponent4.js](./src/components/ProfileFunctionComponent4.js)</li><li>- [x] [AboutClassComponent.js](./src/components/AboutClassComponent.js)</li><li>- [x] [ProfileClassComponent4.js](./src/components/ProfileClassComponent4.js)</li><li>- [x] [ProfileClassComponent5.js](./src/components/ProfileClassComponent5.js)</li><li>- [x] [ProfileClassComponent6.js](./src/components/ProfileClassComponent6.js)</li><li>- [x] [ProfileClassComponent7.js](./src/components/ProfileClassComponent7.js)</li><li>- [x] [ProfileClassComponent8.js](./src/components/ProfileClassComponent8.js)</li></ul> |

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
