### `Chapter - 06 Exploring the world`

1. Revising last chapter - useState() and Hooks

2. Why React is fast ?
    - It's because of its fast DOM manipulation -> Using Reconciliation (diff algorithm)

3. Why use state ?
    - React only tracks variables which are state variables.

4. In this chapter, we are going to get data from outside our application through API. Earlier, we got data from mock data.

5. Architecture:
    - Monolithic Architecture -> Both Client & Server running in the same system
    - Micro Services -> Separate projects for Client & Server and lot of services for specific funtionality
      - SoC (Separation of Concern) -> Every service in microservices serves a single functionality

6. We are going to build -> UI microservices
   - UI microservices -> Explore the world through API

7. fetch -> to call API
   - on page load -> fetch the api data and show all the restaurants

8. Two approaches :
  1. On load -> call API -> render
  2. on load -> render some defaults -> call API -> updates UI

9. React Hook -> **useEffect()** -> render something -> do some operation -> update the UI
   - useEffect(callback) -> useEffect will call callback function after intial render if there are no dependencies (only once)
   - What if we want to re-render after every state changes -> Pass state in dependency array.

10. When component re-renders:-  
    1. when state changes
    2. when props changes

11. useEffect (callback, [dependencies]);

12. Where to make API call ?
    ```
    useEffect(()=>{
    //API call
    },[])
    ```
    - Steps :
      1. First, component will be rendered
      2. useEffect() and render with intial data
      3. When API call is made,

13. Shimmer ->

14. Conditional rendering
    - On page load, shimmer UI -> when restaurants empty
    - when res data -> actual data UI

15. **Early return** -> not render

16. How to avoid rendering components ? optional chaining or
