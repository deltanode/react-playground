import { useRouteError, Link } from "react-router-dom"

const PageNotFound = () => {
  const { error } = useRouteError()
  // console.log("error:", error)
  // console.log("error.status:", error.status)
  // console.log("error.msg:", error.message)
  return (
    <div className="w-full  flex justify-center mt-6">
      <section className="w-[980px]">
        <h2 className="font-semibold text-3xl text-orange-400 pb-2">404 Not Found</h2>
        <p className="text-slate-600 text-lg">{error?.message}</p>
        {/* <p>The resource could not be found.</p> */}
        <Link to="/" className="inline-block border px-4 py-2  my-4 bg-orange-400 text-white hover:bg-orange-500 ">
          HOME
        </Link>
      </section>
    </div>
  )
}

export default PageNotFound
