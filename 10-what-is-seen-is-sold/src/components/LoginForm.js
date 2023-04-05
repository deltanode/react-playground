const LoginForm = () => {
  return (
    <div className="w-[1024px] mx-auto my-4 h-[80vh] flex justify-center items-center">
      <form action="" className="border shadow-lg p-4">
        <label className="text-gray-800" htmlFor="email">
          Email:
        </label>
        <br />
        <input className="border mb-4" type="text" name="email" /> <br />
        <label className="text-gray-800" htmlFor="password">
          Password:
        </label>
        <br />
        <input className="border mb-2" type="password" name="password" /> <br />
        <button className="p-2 mt-4 bg-orange-400  text-white rounded-md">Login In</button>
      </form>
    </div>
  )
}

export default LoginForm
