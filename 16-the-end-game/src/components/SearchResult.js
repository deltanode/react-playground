const SearchResult = ({ searchResult }) => {
  return (
    <div className="p-2 rounded-lg hover:bg-slate-100">
      <span> {"🔍"} </span>
      <span> {searchResult}</span>
    </div>
  )
}

export default SearchResult
