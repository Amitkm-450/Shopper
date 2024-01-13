import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

function Product() {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))

  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
    </div>

  )
}

export default Product