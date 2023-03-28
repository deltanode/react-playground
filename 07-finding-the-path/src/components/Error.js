import React from "react"
import { useRouteError, Link } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  //   console.log(error.status)
  //   console.log(error.statusText)
  return (
    <div className="error flex-container">
      <h1>Error:{error.status + " | " + error.statusText}</h1>
      <h2>Opps!! Something went wrong.</h2>
      <Link to="/">Go back to HOME</Link>
    </div>
  )
}

export default Error
