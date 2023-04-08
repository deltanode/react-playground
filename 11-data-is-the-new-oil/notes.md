### `Chapter-11 Data is the new oil`

1. Data is the new oil

2. UI layer & Data layer

3. Data layer

   - states & props
   - state: local variable/ scope is only within a component
   - props: values passed from one component to another component

4. **Props Drilling** :- Passing props from one component to another which inturn passes to another component

   - Example:

   ```
   AppLayout -> state (user)
   pass as prop to Body
   Body ->
   pass as prop to Body
   RestaurantCard ->
   ```

5. **State Lifting** (Example of Accrodian & Closing Accordian)

6. **React Developer tool** [chrome extension]: For Debugging data layer:
      - Component (in browser console)
      - Profiler (in browser console)

7. Data layer:
   - props
   - State
   - Hooks
   - rendered by
   - source

- Data from child to parent ?

9. **Context**: for storing a data that we can used throughout application
      - why not global variable ?
         - Because react will not be able to track and trigger reconciliation
      - Create Context in `utils` folder
      - Creating Context
         - `createContext()`
      - Using Context:
         - `useContext` (hook)
      - Context Consumer: (using context in class based component)
         - `<<ContextName.Consumer>`
      - **Context Provider**
         - `<ContextName.Provider value={}>` (Modifing/Overriding)
      - To "Display Name" of context in brower console during debugging in React Developer extenion Tools use:
         - `ContextName.displayname = "Name of Context"`
