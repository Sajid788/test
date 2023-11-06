import React from 'react'
import styles from './ProductCard.module.css'

function ProductCard({
 img2,
 catogery,
 price,
 star_rating,
 name
}){
  return (
    <div className={styles.product}>
     <img src= {img2} alt="not-loaded" width={200} height={200}/>
     <h2>Title : {name}</h2>
     <h3>category : {catogery}</h3>
     <h3>price : {price}</h3>
     <h3>Rating : {star_rating}</h3>
    </div>
  )
}

export default ProductCard
