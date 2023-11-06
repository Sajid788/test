import React from 'react'

const Sort = ({onChange}) => {
  return (
    <div>
      <h1>Sorting</h1>
      <button onClick={()=>onChange("asc")}>Sort by Asc</button>
      <button onClick={()=>onChange("desc")}>Sort by Desc</button>
    </div>
  )
}

export default Sort
