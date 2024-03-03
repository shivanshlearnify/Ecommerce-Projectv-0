import React from 'react'
import Layout from "../../components/layout/Layout"
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductcard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
const Homepage = () => {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Homepage