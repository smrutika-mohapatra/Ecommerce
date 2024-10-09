import React from 'react'
import Hero from './Hero/Hero'
import ProductsCarousel from './ProductsCarousel/ProductsCarousel'
import ProductCategoryCarousel from './ProductCategoryCarousel/ProductCategoryCarousel'
import GiftSection from './GiftSection/GiftSection'
import ComboSection from './ComboSection/ComboSection'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ProductsCarousel />
      <ProductCategoryCarousel />
      <GiftSection />
      <ComboSection />
      <ComboSection />
      <ComboSection />
    </div>
  )
}

export default Homepage
