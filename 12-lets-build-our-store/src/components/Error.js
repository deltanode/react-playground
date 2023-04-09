import { useRouteError, Link } from "react-router-dom"

const Error = () => {
  const errorResponse = useRouteError()
  return (
    <div className="bg-amber-50 h-screen  flex justify-center pt-8">
      <main className="w-[900px]">
        <h1 className="text-red-500 text-3xl mb-2">
          Error: {errorResponse.status} | {errorResponse.statusText}
        </h1>
        <p className="text-gray-800 text-xl pb-4">
          Oops! Something went wrong. <br /> Please try again later.
        </p>
        <p className="text-gray-800">
          Back to{" "}
          <Link to="/" className="text-orange-400 uppercase hover:text-orange-800">
            Home
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Error
