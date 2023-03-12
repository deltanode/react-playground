### `Chapter - 06 Exploring the world`

Revising last chapter - useState() and Hooks

Why React is fast ?

It's because of its fast DOM manipulation -> Using Reconciliation (diff algorithm)

Why use state ?

React only tracks variables which are state variables.

In this chapter, we are going to get data from outside our application through API. Earlier, we got data from mock data.

Monolithic Architecture -> Both Client & Server running in the same system

Micro Services -> Separate projects for Client & Server and lot of services for specific funtionality

SoC (Separation of Concern) -> Every service in microservices serves a single functionality

We are going to build -> UI microservices

UI microservices -> Explore the world through API

fetch -> to call API

on page load -> fetch the api data and show all the restaurants

Two approaches :

1. On load -> call API -> render
2. on load -> render some defaults -> call API -> updates UI

React Hook -> useEffect() -> render something -> do some operation -> update the UI

useEffect(callback) -> useEffect will call callback function after intial render if there are no dependencies (only once)

What if we want to re-render after every state changes -> Pass state in dependency array.

When component re-renders ? when state/props changes

useEffect (callback, [dependencies]);

Where to make API call ?

useEffect(()=>{
//API call
},[])

Steps :

1. First, component will be rendered
2. useEffect() and render with intial data
3. When API call is made,

Shimmer ->

Conditional rendering

On page load, shimmer UI -> when restaurants empty
when res data -> actual data UI

Early return -> not render

How to avoid rendering components ? optional chaining or
