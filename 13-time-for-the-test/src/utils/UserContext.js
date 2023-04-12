import { createContext } from "react"

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@name.com"
  }
})

/* For Debugging `Context` in brower console(using React Developer Tool), we can provide *name* of context  */
UserContext.displayName = "UserContext"

export default UserContext
