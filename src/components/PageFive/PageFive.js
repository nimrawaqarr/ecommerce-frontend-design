import React, { useState } from 'react';
import NavbarFive from './NavbarFive';
import Footer from '../footers/Footer';
import FooterLine from '../footers/FooterLine';
import CartPage from './CartPage';
import DiscountBanner from './DiscountBanner';
import InfoSection from './InfoSection';
import SavedForLater from './SavedForLater';

const PageFive = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 78.99,
      qty: 9,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/pagefive/shirt.png',
    },
    {
      id: 2,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 39.00,
      qty: 3,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      image: '/images/pagefive/bag.jpg',
    },
    {
      id: 3,
      title: 'T-shirts with multiple colors, for men and lady',
      price: 170.5,
      qty: 1,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/pagefive/lapm.jpg',
    },
  ]);

  return (
    <div>
      <NavbarFive />
      <CartPage cartItems={cartItems} setCartItems={setCartItems} />
      <InfoSection />
      <SavedForLater setCartItems={setCartItems} />
      <DiscountBanner />
      <Footer />
      <FooterLine />
    </div>
  );
};

export default PageFive;
