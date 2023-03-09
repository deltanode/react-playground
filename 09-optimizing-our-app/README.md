# 09 - Optimizing our App

The first half of the chapter was about Why to use, How to create, Where to create and When to use Custom Hooks were explained. Difference between helper functions and custom hooks were discussed with examples. We created a helper function (filtering logic) and two custom hooks (check network connection and fetch API data). The second half of the chapter was about optimizing our app using lazy loading/on demand loading mechanism.

## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20-%20Digital%20Notes.pdf)
- [Github [Link]](https://github.com/deltanode/react-playground/blob/main/09-optimizing-our-app/notes.md)

## Theory:

- When and why do we need `lazy()`?
- What is `suspense`?
- Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
- `Advantages and Disadvantages` of using this `code splitting pattern`?
- When `do we and why do we need suspense`?

## Coding:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://beta.reactjs.org/reference/react/lazy)
