# 09 - Optimizing our App

The first half of the chapter was about Why to use, How to create, Where to create and When to use Custom Hooks were explained. Difference between helper functions and custom hooks were discussed with examples. We created a helper function (filtering logic) and two custom hooks (check network connection and fetch API data). The second half of the chapter was about optimizing our app using lazy loading/on demand loading mechanism.

### Topics Coverd:-

While Creating `food ordering app` covered:
- Keeping all the helper & utility function in `utils` folder.
- What is `Custom Hooks`
- Why do we need Custom Hooks
- When should I create Custom Hooks
- Created custom hooks `useRestaurant` [we offloaded the responsibilty of fetch() over there]
- Created a custom hooks `useOnline` from scrach.
- `Chunking` / `Code Spliting` / `Dunamic Bundling` / `Lazy Loading` / `On Demand Loading` / `Dynamic Import` / `Bundle Chunking`
- How to `Lazy Load`?
- Why do we lazy load things?
- How do we do `Chunking` ?
- How to do `Bundle Spiliting? (i.e load on demand)


## Notes:

- [Handwritten [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20%20-%20HandWritten%20Notes.pdf)
- [Digital [PDF]](https://github.com/deltanode/react-playground/blob/main/00-React-Notes/Chapter%2009%20-%20Optimizing%20our%20App%20-%20Digital%20Notes.pdf)
- [Notes.md](https://github.com/deltanode/react-playground/blob/main/09-optimizing-our-app/notes.md)

> **Credit**: `Digital Notes:` [Arpan Kesh](https://www.linkedin.com/in/arpan-kesh-687740194/) | `Handwritten Notes:`[Ashraya KK](https://github.com/Ashrayaa/Namaste-React) | `Notes.md:` [Harshitha Solai](https://github.com/Learn-React-With-Harshi)

## Theory:

<!-- *******************************-->
<details>
<summary>When and why do we need `lazy()`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>What is `suspense`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>`Advantages and Disadvantages` of using this `code splitting pattern`?</summary><br>
<blockquote>

</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>When `do we and why do we need suspense`?</summary><br>
<blockquote>

</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://beta.reactjs.org/reference/react/lazy)
