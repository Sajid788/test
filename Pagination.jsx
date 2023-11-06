import React from 'react'

function Pagination({onChange, arr, current}) {
 
    // const Pre = (
    //   <button onClick = {(() => onChange(-1))} 
    //     disabled = {current===1}>
    //     pre
    //   </button>
    // )

    // const Next = (
    //     <button onClick={(()=>onChange(1))}
    //         disabled = {current===total}
    //     >Next</button>
    // )



  return (
    <div>
    <h1>Pagination</h1>
      {/* {Pre}
      {current}
      {Next}
      <br/>
      <br/> */}
      {arr?.map((item)=>{
        return <button key={item} onClick={()=>onChange(item)} disabled = {item===current}>{item}</button>
      })}
    </div>
  )
}

export default Pagination
