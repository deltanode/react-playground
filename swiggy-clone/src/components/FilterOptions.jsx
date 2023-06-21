import { useState } from "react"

const FilterOptions = ({ title, options, filterSearchValue, setFilterSearchValue }) => {
  // use below state just to re-render component on adding & removing filterSearchValue
  const [changed, setChecked] = useState(false)

  const handleChange = e => {
    // console.log([e.target.value])
    // console.log("filterSearchValue: ", filterSearchValue)
    if (filterSearchValue.has(e.target.value)) {
      // console.log("Deleted: ", e.target.value)
      setChecked(prev => !prev)
      setFilterSearchValue(prev => {
        prev.delete(e.target.value)
        return prev
      })
    } else {
      // console.log("Added: ", e.target.value)
      setChecked(prev => !prev)
      setFilterSearchValue(prev => {
        prev.add(e.target.value)
        return prev
      })
    }
  }

  return (
    <div className="mb-4">
      <h4 className="font-bold py-2">{title}</h4>

      <div className=" flex flex-wrap gap-2">
        {options.map(optionObj => {
          return (
            <div key={optionObj.option} className="w-[45%]">
              {/* <Checkbox setFilterSearchValue={setFilterSearchValue} optionObj={optionObj} /> */}
              <label htmlFor={optionObj.option}>
                <input data-testid="checkbox" type="checkbox" name={optionObj.option} checked={filterSearchValue.has(optionObj.option) ? true : false} value={optionObj.option} onChange={handleChange} className="mr-2" />
                {optionObj.option}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterOptions
