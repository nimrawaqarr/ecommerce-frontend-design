import React from 'react'
import NavbarPage from '../headers/NavbarPage'
import SectionNavbar from '../PageTwo/SectionNavbar'
import Footer from '../footers/Footer'
import FooterLine from '../footers/FooterLine'
import DiscountBanner from '../PageFive/DiscountBanner'
import RelatedProducts from './RelatedProducts'
import ProductView from './ProductView'
import Recommendations from './Recommendations'

const PageFour = () => {
  return (
    <div>
        
        <NavbarPage/>
        <SectionNavbar/>

        <ProductView/>
        <Recommendations/>
        <RelatedProducts/>
        <DiscountBanner/>

        <Footer/>
        <FooterLine/>

    </div>
  )
}

export default PageFour