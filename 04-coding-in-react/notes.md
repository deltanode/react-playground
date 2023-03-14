## `Chapter-04 Talk is cheap, show me in code`

1. Recap on Chapter-03 - functional component, react elements

2. Creating food ordering app - Food Villa in this session

3. Writing comments in jsx

4. We don't need ES6, jsx, typescript to work in react

5. Create low level design - Create app layout
```
header

- logo (Title)
- nav items (right side)
- cart

body

- search bar
- restaurantList
- restaurantCard
  - image
  - Name
  - Rating
  - Cuisine

footer
```
- Create HeaderComponent
   - Add TitleComponent -> it has logo img and a tag for the image.
   - div nav-items (ul and li )

- Create Body and Footer Component

- Create AppLayout: put header, body and footer within <></>

- JSX has only one parent 
  - use React.Fragment: `<React.Fragment> </React.Fragment>`)
  - its shorthand is like  empty tag:  `<> </>`

- but if you want to give attrbutes, `style` in div tag
  - style = { border : red 1px soild} ; is not possible 
  - So, wrap inside () inside jsx

- **Config driven UI** : Different UI layout for different users - Backend driven config

- Optional chaining  i.e `?.`

- **Props** (Properties) 
   - attributes passed through component tag 
   - similar to arguments passed in function in js 
   - received as parameters in the function (component in react)

- <Component attributes /> : const Component = (props)=>{()} :: func(arguments) : const func = (parameters) => {}

- **Virtual DOM** -> representation/copy of DOM with us

- Purpose : **React Reconciliation** 
  - React uses diff Algorithm to diff one tree (actually dom) from another which determines what needs to be updated and only re-renders the diff
  - re-render everything if key is not mentioned

- **react fiber**

- never use index as key

## Code:

### Case 1: Using Hard Coded Data

```
const restaurantData = {
  imageId: "bdcd233971b7c81bf77e1fa4471280eb",
  name: "KFC",
  cuisines: ["Burger", "Biryani", "American"],
  approxDeliveryTime: "45"
}

const RestrauntCard = () => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantData?.imageId} alt="restaurant image" />
      <h2>{restaurantData?.name}</h2>
      <h3>{restaurantData?.cuisines.join(", ")}</h3>
      <h4>{restaurantData?.approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestrauntCard/>
    <>
  )
}

```

### Case 2: Passing Sample data(Object) throught `Props`

```
const restaurantData = {
  imageId: "bdcd233971b7c81bf77e1fa4471280eb",
  name: "KFC",
  cuisines: ["Burger", "Biryani", "American"],
  approxDeliveryTime: "45"
}

const RestrauntCard = (prop) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + prop.restaurant?.imageId} alt="restaurant image" />
      <h2>{prop.restaurant?.name}</h2>
      <h3>{prop.restaurant?.cuisines.join(", ")}</h3>
      <h4>{prop.restaurant?.approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestrauntCard restaurant={restaurantData} />
    <>
  )
}

```

### Case 3: Passing Sample data(Array) throught `Props`
```
const restaurantDataArray = [
  {
    imageId: "bdcd233971b7c81bf77e1fa4471280eb",
    name: "KFC",
    cuisines: ["Burger", "Biryani", "American"],
    approxDeliveryTime: "45"
  },
  {
    imageId: "bdcd233971b7c81bf77e1fa4471280eb",
    name: "Burger king",
    cuisines: ["Burger", "American"],
    approxDeliveryTime: "15"
  }
]

const RestrauntCard = (prop) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + prop.restaurant?.imageId} alt="restaurant image" />
      <h2>{prop.restaurant?.name}</h2>
      <h3>{prop.restaurant?.cuisines.join(", ")}</h3>
      <h4>{prop.restaurant?.approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestrauntCard restaurant={restaurantDataArray[0]} />
      <RestrauntCard restaurant={restaurantDataArray[1]} />
    <>
  )
}

```

### Case 4: Passing Sample data(Array) throught `Props`
```

```
