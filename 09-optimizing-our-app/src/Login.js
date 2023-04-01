import React from "react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.password) {
    errors.password = "required"
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more"
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less"
  }

  return errors
}

const Login = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  //   console.log(formik)
  //   console.log(formik.initialValues)
  //   console.log(formik.initialValues.email)
  //   console.log(formik.initialValues.password)
  return (
    <div className="login flex-container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? <div className="warning">*{formik.errors.email}</div> : null}
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
        {formik.touched.password && formik.errors.password ? <div className="warning">*{formik.errors.password}</div> : null}
        <br />

        <button type="submit">Login</button>
      </form>
      <Link to="/">Back to HOME</Link>
    </div>
  )
}

export default Login
