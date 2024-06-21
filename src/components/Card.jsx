import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUENscPbGJ-VPONgBqOeyAJ0X5GrmzFdzeAg&s" alt="" width={275} height={270}/> 
        <h4> {props.title} </h4>
        {/* <p> {props.description} </p> */}
    </div>
  )
}

export default Card