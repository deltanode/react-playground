import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../utils/appSlice"
import SearchContainer from "./SearchContainer"
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant"
import { setSearchCache } from "../utils/searchCacheSlice"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [isSearchFocus, setSearchFocus] = useState("false")

  // toggle sidebar
  const dispatch = useDispatch()
  function handleSideBar() {
    dispatch(toggleSideBar())
  }

  const searchCache = useSelector(store => store.search.searchCache)

  useEffect(() => {
    //  debounding 140ms
    const timer = setTimeout(() => {
      // first check data in cache
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      } else {
        // If data not found in cache, then call API
        getSearchSuggestion()
      }
    }, 150)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  async function getSearchSuggestion() {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
    const json = await data.json()
    setSuggestion(json[1])
    // Update Cache
    dispatch(setSearchCache({ [searchQuery]: json[1] }))
  }

  return (
    <header className="shadow-md p-2">
      <nav className="max-w-7xl mx-auto p-1 flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <button onClick={() => handleSideBar()}>
            <img className="w-6 " alt="hanburger-menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU" />
          </button>
          <Link to="/">
            <img className="w-24 hover:opacity-80" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzqLGj4nnVHSqs3ydU8FFlP7JjOq50ccCWg&usqp=CAU" />
          </Link>
        </div>

        <div className="flex">
          <input type="text" placeholder="Search" value={searchQuery} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} onChange={e => setSearchQuery(e.target.value)} className="border-2 py-2 px-6 rounded-l-full w-[500px] focus:outline focus:outline-blue-500 focus:border focus:border-black " />
          <button className="bg-slate-200 pl-2 pr-3 rounded-r-full text-gray-900">Search</button>
          {isSearchFocus && (suggestion?.length ? <SearchContainer suggestionList={suggestion} /> : null)}
        </div>

        <div className="">
          <img className="w-8 cursor-pointer hover:opacity-80" alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
        </div>
      </nav>
    </header>
  )
}

export default Header
