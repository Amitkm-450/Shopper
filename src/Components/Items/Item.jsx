import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{textDecoration: "none", color: "inherit"}}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-old">${props.old_price}</div>
            <div className="item-price-new">${props.new_price}</div>
        </div>
      </Link>
    </div>
  )
}

export default Item