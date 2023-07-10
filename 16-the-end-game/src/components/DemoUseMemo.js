import { useMemo, useState } from "react"
import { findPrime } from "../utils/helper"

const DemoUseMemo = () => {
  console.log("useMeno Component ran")
  const [num, setNum] = useState(1)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // const prime = findPrime(num)
  const prime = useMemo(() => findPrime(num), [num])

  return (
    <div className={"col-span-3 border-2 m-2 px-4 py-2 " + (isDarkTheme && " bg-slate-500 text-white")}>
      <h2 className="text-gray-700 font-medium text-center mb-14 pb-1 border-b">Demo of useMemo() hook</h2>

      <input type="number" value={num} onChange={e => setNum(e.target.value)} className="p-1.5 border border-gray-400 rounded-sm text-black " placeholder="find nth prime ..." />

      <div className="my-3 text-xl font-medium">nth Prime: {prime}</div>

      <button onClick={() => setIsDarkTheme(!isDarkTheme)} className="mt-10 p-2 bg-green-200 rounded-sm text-black hover:bg-green-300">
        Toggle
      </button>
    </div>
  )
}

export default DemoUseMemo
