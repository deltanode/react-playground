import SearchResult from "./SearchResult"

const SearchContainer = ({ suggestionList }) => {
  // console.log(suggestionList)
  return (
    <div className="absolute bg-white shadow-xl w-[480px] rounded-lg top-14 mt-1.5 ml-1 p-2">
      {suggestionList.map((suggestion, index) => (
        <SearchResult searchResult={suggestion} key={index} />
      ))}
    </div>
  )
}

export default SearchContainer
