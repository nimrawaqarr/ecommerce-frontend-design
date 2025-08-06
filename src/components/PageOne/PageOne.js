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
import { useEffect } from "react";


export const PageOne = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
         
        <NavbarPage/>

        <Automobiles/>

        <div id="deals">
          <DealsOffers />
        </div>

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
