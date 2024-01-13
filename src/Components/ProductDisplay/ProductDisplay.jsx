import React from 'react'

import "./ProductDisplay.css"

import star_icon from "../Assets/star_icon.png"
import start_dull_icon from "../Assets/star_dull_icon.png"

const ProductDisplay = ({product}) => {
  
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="product-img-list">
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                 <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
              <h1>{product.name}</h1>
              <div className="productdisplay-right-start">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={start_dull_icon} alt="" />
                <p className='numbner-of-rating'>122</p>
              </div>
              <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">{product.old_price}</div>
                <div className="productdisplay-right-price-new">{product.new_price}</div>
              </div>
              <div className="productdisplay-right-description">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis neque, veniam quod nam sequi omnis? Commodi quibusdam beatae minus
                dignissimos tempore eos vel cum odit quaerat. Tempora odit quisquam nostrum hic inventore at, quis minima illum, impedit accusantium
                eum perspiciatis  quos ullam, laudantium quidem magni dicta mollitia laboriosam dolorem velit.
              </div>
              <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
              </div>
              <button>ADD TO CART</button>
              <p className="productdisplay-right-category"><span>Category :<span> Women , T-shirt, Crop Top</span></span></p>
              <p className="productdisplay-right-category"><span>Tags :<span> Modern , Latest</span></span></p>
        </div>
    </div>
  )
}

export default ProductDisplay