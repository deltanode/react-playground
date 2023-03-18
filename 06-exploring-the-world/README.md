# 06 - Exploring the world

Until last chapter, we were using mock data to render the UI. In this chapter, we learnt about working with real time data from the Web (Our world basically). Then, we covered different types of System Architectures, different approaches to fetch API and render in UI. Today's important concept was one of the basic React Hooks useEffect. We tried using useEffect in all combinations and understanding it in depth. Importance of conditional rendering and Shimmer in UI were explained.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2006%20-%20Exploring%20the%20world%20-%20Handwritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2006%20-%20Exploring%20the%20world%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/06-exploring-the-world/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>What is `Microservice`?</summary><br>
<blockquote>

`Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

- Benefits of Microservices:
  - Flexible Scaling
  - Easy Deployment
  - Technological Freedom
  - Reusable Code
  - Resilience
  
 _More_:
 
- Microservice Architecture is an architectural style that structures the application as a collection of services which are independently deployable, based on Separation of Concern (SoC),  loosely coupled, owned by small teams, highly maintainable and testable , communicating through lightweight protocols (APIs). The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

- Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

- Examples : Netflix became one of the first high-profile companies to successfully migrate from a monolith to a cloud-based microservices architecture in 2009.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Monolith architecture`?</summary><br>
<blockquote>

Monolith Architecture is the traditional model of software development where the application is self-contained and independent of other applications. It is also called Single Tier (One tier) architecture where a single application acts as both client and server. A small change in a single function requires compiling and testing the entire application, which is against the today's agile approach.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `difference` between `Monolith and Microservice?</summary><br>
<blockquote>

![Monolith and Microservice](/img/monolith-microservices.png)


| Parameters   | Monolith Architecture  | Microservices Architecture  |
 | ------------ | --------------------   | :-------------------------: |
 | Development | When an application is built with one code base, it is easier to develop. This is true for small applications, but when the application takes larger, development becomes slower and complex    | Micro services add more complexity compared to monolith arch. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance.   |
 | Testing | Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application. | Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services. |
 | Performance | In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices | Though performance could be an issue in microservices, it could be over come by various performance optimisation techniques | 
 | Debugging  | With all code located in one place, it’s easier to follow a request and find an issue. |  Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging. |
 | Scalability | You can’t scale individual components |If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure.|
 | Relaibility | If there’s an error in any module, it could affect the entire application’s availability. | You can deploy changes for a specific service, without the threat of bringing down the entire application.|
 | Tech Adoption | Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming. | Any new tech changes can eaily be adopted as an independent service | 
 | Deployment |    One executable file or directory makes deployment easier. But, a small change to a monolithic application requires the redeployment of the entire monolith.      |  Microservices make it easier for teams to update code and accelerate release cycles with continuous integration and continuous delivery (CI/CD).   |
 | Agility | There is no agility in monolith | Promote agile ways of working with small teams that deploy frequently. |
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we need a `useEffect Hook`?</summary><br>
<blockquote>

`useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to  `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```
The `() => {}` is callback function and `[]` is called a empty dependency array. 
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.
```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Optional Chaining`?</summary><br>
<blockquote>

The optional chaining `(?.)` operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null`, it returns `undefined` instead of throwing an error.

The `?.` operator is like the `. chaining operator`, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

*Uses of Optional chaining* : 
1. Exploring the content (nested properties) of an object before accessing its deeply nested sub-porperties. 
2. By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj?.prop is not null or undefined before attempting to access its sub-porperties obj?.prop?.subprop
3. Optional chaining cannot be used on a non-declared root object, but can be used with a root object with value undefined.
Eg : const obj = undefined ; ---> This is possible 
But undeclaredVar?.prop; ---> This throws ref error
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Shimmer UI`?</summary><br>
<blockquote>

From a user experience (UX) perspective, the most important thing is to show your users that loading is taking place. One popular approach to communicate to users that data is loading is to display a chrome color with a shimmer animation over the shapes that approximate the type of content that is loading. Earlier, page loaders were used where a loading progress bar might be displayed before the page is rendered. But, that approach was not that UX friendly. So, Shimmer was introduced.

Shimmer can be skeleton to the actual layout that will be displayed before the data fetch. This will make the user understand what type of layout is loading.


`MORE`:

A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the `difference` between `JS expression and JS statement`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `Conditional Rendering`? explain with a code example.</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `CORS`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `async and await`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is the use of `const json = await data.json()`; in `getRestaurants()`?</summary><br>
<blockquote>

</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when `data is not loaded`.
- `Render your UI` with `actual API data`.
- Make `Search functionality` work.
- Make a `Login Logout` button that `toggles with a state`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
