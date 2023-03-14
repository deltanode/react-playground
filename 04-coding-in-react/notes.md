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

### Case 1: Using Hard Coded Data (without Props)

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

const RestrauntCard = (props) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant?.imageId} alt="restaurant image" />
      <h2>{props.restaurant?.name}</h2>
      <h3>{props.restaurant?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant?.approxDeliveryTime} minutes</h4>
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

const RestrauntCard = (props) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant?.imageId} alt="restaurant image" />
      <h2>{props.restaurant?.name}</h2>
      <h3>{props.restaurant?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant?.approxDeliveryTime} minutes</h4>
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

### Case 4: Passing Sample data(Array) throught `Props` [Object destructuring]

- Object Destructuring
  ```
  (props) => ({restaurant})
  ```
  
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

const RestrauntCard = ({restaurant}) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant?.imageId} alt="restaurant image" />
      <h2>{restaurant?.name}</h2>
      <h3>{restaurant?.cuisines.join(", ")}</h3>
      <h4>{restaurant?.approxDeliveryTime} minutes</h4>
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

- We can also destructure `({restaurant})` further:
  ```
  (props) => ({restaurant})
  
   Now,
   const { imageId, name, cuisines, approxDeliveryTime } = restaurant
  
  ```
  
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

const RestrauntCard = ({restaurant}) => {
  const { imageId, name, cuisines, approxDeliveryTime } = restaurant
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{approxDeliveryTime} minutes</h4>
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

### Case 5: Passing Sample data(Array) throught `Props` [Object destructuring on the fly & passing individual Props]

- Object destructuring on the fly & passing individual Props (**without spread operator**)

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

const RestrauntCard = ({restaurant}) => {
  const { imageId, name, cuisines, approxDeliveryTime } = restaurant
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestrauntCard name={restaurantDataArray[0].name} imageId={restaurantDataArray[0].imageId} cuisines={restaurantDataArray[0].cuisines} approxDeliveryTime={restaurantDataArray[0].approxDeliveryTime} />
        <RestrauntCard name={restaurantDataArray[1].name} imageId={restaurantDataArray[1].imageId} cuisines={restaurantDataArray[1].cuisines} approxDeliveryTime={restaurantDataArray[1].approxDeliveryTime} />
    <>
  )
}

```

- Object destructuring on the fly & passing individual Props (**using spread operator**)

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

const RestrauntCard = ({restaurant}) => {
  const { imageId, name, cuisines, approxDeliveryTime } = restaurant
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestrauntCard {...restaurantDataArray[0]} />
      <RestrauntCard {...restaurantDataArray[1]} />
    <>
  )
}

```

### Case 6: Passing Sample data(Array) throught `Props` [using Map() + Spread Operator + Destructuring]

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

const RestrauntCard = ({restaurant}) => {
  const { imageId, name, cuisines, approxDeliveryTime } = restaurant
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      
      {/* <RestrauntCard {...restaurantDataArray[0]} /> */}
      {/* <RestrauntCard {...restaurantDataArray[1]} /> */}
      
      {restaurantDataArray.map(restaurantDataObj => {
          return <RestrauntCard {...restaurantDataObj} />
      })}
    <>
  )
}

```

### So, now it is clear that 
 - What all `attribute` we pass in __React Component__ when rendering(function call) it, those attributes gets attached to a empty object & this object is know as Props, is passed to that React Component (function defination)
 
#### Eg1: Passing `Style` using props:-   

```
const restaurantData = {
  imageId: "bdcd233971b7c81bf77e1fa4471280eb",
  name: "KFC",
  cuisines: ["Burger", "Biryani", "American"],
  approxDeliveryTime: "45"
}

const RestrauntCard = props => {
  // console.log(props)                  // Output: {style: {color: 'red'}, restaurant: {restaurant: {imageId: 'bdcd233971b7c81bf77e1fa4471280eb', name: 'KFC', cuisines: Array(3), approxDeliveryTime: '45'}}}
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.imageId} alt="restaurant image" />
      <h2 style={props.style}>{props.restaurant.name}</h2>
      <h3 style={props.style}>{props.restaurant.cuisines.join(", ")}</h3>
      <h4 style={props.style}>{props.restaurant.approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
       <HeaderComponent />
       
       <RestrauntCard style={{ color: "red" }} restaurant={restaurantData} />
    </>    
  )
}
```

#### Eg2: Passing `Style` using props + Destructuring + Spread operator:- 

```
const restaurantData = {
  imageId: "bdcd233971b7c81bf77e1fa4471280eb",
  name: "KFC",
  cuisines: ["Burger", "Biryani", "American"],
  approxDeliveryTime: "45"
}

const RestrauntCard = ({ imageId, name, cuisines, approxDeliveryTime, style }) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2 style={style}>{name}</h2>
      <h3 style={style}>{cuisines.join(", ")}</h3>
      <h4style={style}>{approxDeliveryTime} minutes</h4>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
       <HeaderComponent />
       
       {/*<RestrauntCard style={{ color: "red" }} restaurant={restaurantData} /> */}
       
       <RestrauntCard style={{ color: "red" }} {...restaurantData} />
    </>    
  )
}
```
