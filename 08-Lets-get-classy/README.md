# 08 - Let's get Classy

Today, it was all about understanding the creating class-based component, it's different lifecycle methods, whats happening under the hood. It was an amazing session as we can easily grasp the concept since we already know how component are rendered in react using functional components. We even discussed about various possible interview questions.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2008%20-%20Let's%20get%20Classy%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2008%20-%20Let's%20get%20Classy%20-%20Digital%20Notes.pdf)

## Theory:

- How do you create `Nested Routes react-router-dom` configuration?
- Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?

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

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
