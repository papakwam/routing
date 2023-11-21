import React from 'react'
import { Link } from 'react-router-dom'



const foodItems =  [
    {name : "Waakye", id:1},
    {name : "Jollof", id:2},
    {name : "BankuFish", id:3},
    {name : "Yam", id:4}  
]

function Items() {
  return (

    <div>
        {foodItems.map((item) =>
        {
            return <Link key={item.id} to={`/items/${item.id}`} >
            <h1>{item.name} </h1>
            </Link>
        })}
        
        


        
    </div>
    
  )
}


export default Items
