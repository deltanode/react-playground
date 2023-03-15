## `Chapter-05 Let's get hooked`

1. File structure in React
  - structure on the bases of `types` (i.e based on features & type of file)
  - Created folder structure 
    - src -> all code
    - components -> all components
    
     ```
     src 
      |-- components
      |   |-- Header.js
      |   |-- Body.js
      |   |--RestaurantCard.js
      |-- App.js
      |-- config.js
      
      ```

2 Different ways to export:
  - __export default__ Component - only one component can be exported in default - then in import we use default import
  - __export by name__ - then in import we use `named import`
  - Eg: there can be many components in the same file. So,
    - __Named export__ :
      ```
      import {Title, Header} from './components/Header';
      ```
    - __Default export__ :
      ```
      import Header from './components/Header';
      ```
    - Using both __Default export__ & __named export__ :
      ```
      import Header, {Title} from './components/Header';
      ```
    - Using __`* as "anyname"`__ 
      ```
      import * as Obj from './components/Header';
      
      Obj.Title
      ```
  - Note: `name` can be different when exporting component. 
    Eg: exporting `Header` component using `default export`
    ```
    import NewHeader from './components/Header';
    ```
  - __file name__ can be `.js` or `.jsx` (but generally .js is  prefered.)
    Eg: `Header.js` or `Header.jsx`
    - __without using extention__
      ```
      import Header, {Title} from './components/Header';
      ```
    - __using `.js` extention__
      ```
      import Header, {Title} from './components/Header.js';
      ```
    - __using `.jsx` extention__
      ```
      import Header, {Title} from './components/Header,jsx';
      ```
    

- Best convention :
  - export default ComponentName
  - import Component from '/Path'

- Create `config.js` (or `constant.js`) file & put all "hard coded" values & data in it using export.

- In App
  - Search box [but can't change value in input box]

- __One way binding__ in react

- If we need to change the value,
  - __Every componenet in react maintains a state__
  - So, You can put all variables in the state. Everytime you use local variable you should use state.

- __Hook__: just like normal function. 
  - Eg: `useState()`: is used to create state variable

- Why `hooks` ?
  - Hooks allow you to `reuse stateful logic` without changing your component hierarchy.
  - Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

- `useState()` hook:
  - returns as array 
    - and first element is a variable, which is local state variable and value is passed through useState(value)
    - second arg is function to modify the state variable

- get { useState() } from 'react';
  ```
  const [searchText] = useState(value);
  const [searchText, setSearchText] = useState(value);

  const searchVariable = useState(value);
  const [searchText, setSearchText] = searchVariable;

  setSearchText(e.target.value)
  value = { searchText }
  ```

- __Why do we need state ?__ [Interview question]

- `Two way binding` Eg: updating state & displaying updated data on the fly (reading and writing )

- Syntactic events Eg: e in `(e) => e.target.value

- when `useState()` is used React __re-renders the whole component__ (i.e reconciliation happens & only that small portion is updated where data has changed)

- ```
  const [restaurants, setRestaurants] = useState(restaurantList);

  onclick()
  const data = filterData(searchText, restaurants)

  setRestaurants(data);

  funciton filterData(searchText, restaurants) 
  {
    restaurants.filter (res => {
      res.data.name
    })
  }

- #### Note: In react we are using useState like this `const [searchText, setSearchText] = useState("")` isn't is against javascript rule as we are able to change the value of searchText which is of type const

- When we change this state variable using setSearchText it forces the component to re-render.
  Every time the component re-renders, the const is a new version of const with updated value.
