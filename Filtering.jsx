import React from 'react'

const Filtering = ({onChange}) => {
  return (
    <div>
      <h1>Filter by category</h1>
      <button onClick={(e)=>onChange("face")}>face</button>
      <button onClick={(e)=>onChange("Eyes")}>Eyes</button>
      <button onClick={(e)=>onChange("Tools")}>lips</button>
      <button onClick={(e)=>onChange("")}>reset</button>
     
    </div>
  )
}

export default Filtering
