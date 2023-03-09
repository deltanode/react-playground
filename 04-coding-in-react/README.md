# 04 - Coding in React

We started to develop a config-driven UI for food ordering platform. First, we created LLD of the web application, continued working on creating layouts, components and data manipulation from mock data. Concepts of props(properties), virtual DOM, importance of unique key were discussed.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2004%20-%20Talk%20is%20Cheap%2C%20show%20me%20the%20code%20-%20Digital%20Notes.pdf)
- [Github [Link]](https://github.com/deltanode/react-playground/blob/main/04-coding-in-react/notes.md)

## Theory:

- Is `JSX` mandatory for React?
- Is `ES6` mandatory for React?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
- How can I write `comments` in JSX?
- What is `<React.Fragment></React.Fragment>` and `<></>`?
- What is `Reconciliation` in React?
- What is `React Fiber`?
- Why do we need `keys` in React?
- Can we use `index as keys` in React?
- What is `props in React`? Ways to.
- What is `Config Driven UI`?

## Coding:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
      - `Render` your cards with `dynamic data of restaurants`
      - Use `Array.map` to render all the restaurants

### PS. Basically do everything that I did in the class, in the `same sequence`. `Don't skip small things`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
