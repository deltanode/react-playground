import { useState, useRef, useEffect } from "react"

const DemoUseRef = () => {
  let x = 0
  const [y, setY] = useState(0)
  const z = useRef(0)
  /**
   * Note: ref valiable are Not like:
   *       z = 0
   *       Instead, they are like:
   *       z = {current: 0}
   *
   */

  console.log("Rendering....")
  // console.log(x)
  // console.log(y)
  // console.log(z.current)

  /* Use Case of "ref variable" is for setInterval() */
  const i = useRef(null)
  // const [i] = useState({ current: null })
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("To stop this setInterval(), Go to 'useRef Demo' page", Math.ceil(Math.random() * 10))
    }, 1000)

    return () => {
      clearInterval(i.current)
      console.log("DemoUseRef unmounted ----")
    }
  }, [])

  return (
    <div className={"col-span-3 border-2 m-2 px-10 py-2"}>
      <h2 className="text-gray-700 font-medium text-center mb-4 pb-1 border-b">Demo of useRef() hook</h2>

      <div>
        <button
          className="mt-10 px-3 py-2 bg-green-200 rounded-sm hover:bg-green-300"
          onClick={() => {
            x++
            console.log("let x = ", x)
          }}
        >
          Increase: Let variable "x = 0":
        </button>
        <span className="ml-2 my-3 text-xl font-medium">Let = {x}</span>
      </div>

      <div>
        <button className="mt-10 p-2 bg-green-200 rounded-sm hover:bg-green-300" onClick={() => setY(y + 1)}>
          Increase: State Variable "y":
        </button>
        <span className="ml-2 my-3 text-xl font-medium">State = {y}</span>
      </div>

      <div>
        <button
          className="mt-10 p-2 bg-green-200 rounded-sm hover:bg-green-300"
          onClick={() => {
            z.current = z.current + 1
            console.log("ref = ", z.current)
          }}
        >
          Increase Ref Variable "z = 0":
        </button>
        <span className="ml-2 my-3 text-xl font-medium">Ref = {z.current}</span>
      </div>

      <div className="text-red-600 py-6 bg-slate-0">** open Browser Console</div>

      <button onClick={() => clearInterval(i.current)} className="mt-10 px-4 py-2 bg-yellow-600 rounded-sm text-white hover:bg-yellow-700">
        Clear: setInterval()
      </button>
    </div>
  )
}

export default DemoUseRef
