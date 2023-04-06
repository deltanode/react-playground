import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className="w-[1024px] mx-auto my-4">
      <h2 className="text-xl font-semibold py-2">About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit sit numquam neque et voluptates animi dolorem veritatis ducimus. Commodi. </p>

      <div className="pt-4">
        <h2 className="text-red-500 text-large font-medium mb-2">Nested Component</h2>
        <p>
          Go to{" "}
          <Link to="profile" className="text-blue-900">
            Profile
          </Link>{" "}
          [Nested: Functional Component]{" "}
        </p>
        <p>
          Go to{" "}
          <Link to="profile-class" className="text-blue-900">
            Profile
          </Link>{" "}
          [Nested: Class Component]{" "}
        </p>
      </div>
      <Outlet />
    </div>
  )
}

export default About
