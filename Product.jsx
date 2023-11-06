import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import Filtering from "./Filtering";
import Sort from "./Sort";

const geturl = (url, search, current, limit,filtering, sort) =>{
   
    if(current){
        url = url + `?_page=${current}&_limit=${limit}`
    }
    if(search){
        url = url + (current ? `&q=${search}` :`?q=${search}`);
    }
    if(filtering){
      url = url + (current ? `&catogery=${filtering}` :`?catogery=${filtering}`);
    }
    if(sort){
        url = url + (current ? `&_sort=price&_order=${sort}` :`?_sort=price&_order=${sort}`);
      }
    
    return url
}

function Product() {
 const [loading, setLoading] = useState(null);
 const [total, setTotal] = useState(5)
  const [data, setData] = useState([]); 
  const [current, setCurrent] = useState(1)
  const [limit, setLimit] = useState(6)
  const [search, setSearch] = useState("")
  const [filtering, setFiltering] = useState("")
  const [sort, setSort] = useState("asc")

  const fetchData = async (search,current,filtering,sort) =>{
    try {
    setLoading(true);  
    let url = `https://cwproject-unit5.onrender.com/products`;
    url = geturl(url, search,current, limit,filtering,sort)
    // console.log (url)
     const res = await fetch (url);
     setLoading(false)
     const data = await res.json();
     setData(data)
     console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
   fetchData(search,current,filtering,sort);
  },[search, current,filtering,sort])

  const handlepage = (key) =>{
    setCurrent(key);
  }

  const arr = [];
  for(let i = 1; i<=total; i++){
    arr.push(i);
  }
 
  return (
    <div style={{textAlign:"center"}}>
     <h1>This is loding page</h1>
     {/* <div>
        <Pagination onChange = {(ele) => setCurrent(current + ele )} current = {current} total={total}/>
        <button onClick={()=>setCurrent(1)} disabled = {current===1}>reset</button>
     </div> */}

     <br/>
     <Search value = {search} onChange = {setSearch}/>
    
     <Filtering onChange = {setFiltering}/>
     
     <Sort onChange={setSort}/>
     {loading && <h1>Loading....</h1>}
     <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridGap:"20px", margin:"20px"}}>
     {data?.map((data)=>(
       <ProductCard key={data.id} {...data}/>
      ))}
      </div>
      <Pagination onChange={handlepage} arr = {arr} current={current}/>
      <button onClick={()=>setCurrent(1)} disabled = {current===1}>Reset</button>
    </div>
    
  )
}
<br/>
export default Product