import React from 'react'
import NavbarFive from './NavbarFive'
import Footer from '../footers/Footer'
import FooterLine from '../footers/FooterLine'
import CartPage from './CartPage'
import DiscountBanner from './DiscountBanner'
import InfoSection from './InfoSection'
import SavedForLater from './SavedForLater'

const PageFive = () => {
  return (
    <div>
        
        <NavbarFive/>

        {/* <CartPage/>
        <InfoSection/>
        <SavedForLater/>
        <DiscountBanner/> */}

        <Footer/>
        <FooterLine/>

    </div>
  )
}

export default PageFive