import React from "react"

const FilterOptions = ({ title, options, setFilterSearchValue }) => {
  return (
    <div className="mb-4">
      <h4 className="font-bold py-2">{title}</h4>
      <div className=" flex flex-wrap gap-2">
        {options.map(optionObj => {
          return (
            <div key={optionObj.option} className="w-[45%] flex gap-2">
              <input
                type="checkbox"
                name={optionObj.option}
                id={optionObj.option}
                value={optionObj.option}
                onChange={e =>
                  setFilterSearchValue(prev => {
                    // let a = [...prev]
                    let a = []
                    a.push(e.target.value)
                    return a
                  })
                }
              />
              <label htmlFor={optionObj.option}>{optionObj.option}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterOptions
