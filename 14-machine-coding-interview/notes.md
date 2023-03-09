# Machine Coding Round :

- Developing/Coding - an app during the interview

- Many companies ask to develop in `HTML, CSS & Javascript`

- Some companies ask to develop in their tech stack -> `React`

- Examples of problems asked in interviews:
  todo list
  caurosel
  infinit scroll
  counter app
  bouncing
  image gallery

* Important in machine coding -> Time management \*

How to manage ?
-> Practice before interview
-> Plan before starting the interview  
-> Execution

### What are we going to build ?

**_ YOUTUBE _**

1. Requirement Clarification :

- features
- tech stack and briefly say why - UI layer & Data Layer
  JS Framework -> React
  CSS -> Tailwind CSS
  Routing -> react-router-dom
  Web bundler -> webpack
  Testing -> Jest

2. Low-level Design - There are 1000 ways to implement a project -> LLD makes sure that both you and interviewer are in the same page

Component UI Hierarchy
App
Header
Body
SideBar
MainContainer
CategoriesButtonContainer
CategoryButton
VideosListContainer
VideoCard
VideoPageContainer
VideoContainer
VideoStream
VideoDescription
VideoComments
CategoriesButtonContainer
CategoryButton
VideosListContainer
VideoCard

3. Basic features that we are going to develop in this chapter

1. Display hamburger menu, logo, search input bar, button and user login button in Header

1. Display List of menus in Sidebar (hardcoded for now)

1. On click of hamburger menu, toggle the Sidebar

1. Display CategoryButtonsContainer (group of category buttons) and VideosListContainer (list of most popular videos (video card) in India) in Main Container.

1. On Click of any video card, naviagte to `/watch` page along with videoId

1. In VideoPageContainer, Play the video, and display its description like video details and comments.

1. On right side, display the CategoryButtonsContainer and VideoListContainer (videos relevant to the currently played video)

# Steps to be followed while coding :

Note : Before start to code, get the requirements clarified with the interviewer and create a low-level design of the app in mind.

### Tech Stack:

- UI Framwork : React (Created using cerate-react-app)
- CSS Framework : Tailwind CSS
- Routing : React Router DOM
- State Management : React-Redux & Redux Toolkit
- Web Bundler : Webpack
- Testing Frameowrk : React Testing Library & Jest

1. Create React App - Executing a package CRA to start a new react app with name namaste-youtube

```
$ npx create-react-app youtube-clone
```

2. Add a remote to local repository

```
$ git remote add origin https://github.com/{username}/{repo-name}.git
```

In our case,

```
$ git remote add origin https://github.com/Learn-React-With-Harshi/youtube-clone.git
```

3. Install Tailwind CSS

```
npm install -D tailwindcss
npx tailwindcss init
```

4. Configure tailwind.config.js

```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Add the Tailwind directives to your CSS
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

6. Install react-icons

```
$ npm install react-icons --save
```

7. Install Reaact-Router-DOM

```
npm install react-router-dom
```

8. Create Components

- Create components in the hierarchy that we imagined during low level design
- Tip : Use emmet `rafce` to create a functional component code
- Import them into required components
- Create router and provider

9. Install Redux

```
npm install @reduxjs/toolkit
npm install react-redux
```

- Create store - configureStore with reducer
- craete slice with name, initialState & reducers with action functions toogleMenu
- Provider
- dispatch action toggleMenu in Header

useSelector -> only subscribe to portion of the store -> in Sidebar

10. Create config.js file and place all the external API URL there.
