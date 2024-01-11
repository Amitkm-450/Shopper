import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'

function Shop() {
  return (
    <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-between"}}>
        <Hero />
        <Popular />
        <Offers />
    </div>
  )
}

export default Shop