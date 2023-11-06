import React from 'react'

const Search = ({onChange}) => {
  return (
    <div>
       <label>
        search: 
        <input type="text"
        placeholder="search"
        onChange={(e)=>onChange(e.target.value)}/>
      </label>
    </div>
  )
}

export default Search
