import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'

function Shop() {
  return (
    <div style={{display: 'flex', flexDirection: "column", justifyContent: "space-between"}}>
        <Hero />
        <Popular />
    </div>
  )
}

export default Shop