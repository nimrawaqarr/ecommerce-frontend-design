import React from 'react'
import Automobiles from './Automobiles'
import DealsOffers from './DealsOffers'
import HomeCategoryGrid from './HomeCategoryGrid'
import ConsumerGagets from './ConsumerGagets'
import RequestForm from './RequestForm'
import Recommended from './Recommended'
import ExtraServices from './ExtraServices'
import Suppliers from './Suppliers'
import NavbarPage from '../headers/NavbarPage'
import FooterPage from '../footers/FooterPage'


export const PageOne = () => {
  return (
    <div>
         
        <NavbarPage/>

        <Automobiles/>
        <DealsOffers/>
        <HomeCategoryGrid/>
        <ConsumerGagets/>
        <RequestForm/>
        <Recommended/>
        <ExtraServices/>
        <Suppliers/>

        <FooterPage/>

    </div>
  )
}
