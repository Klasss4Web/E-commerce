import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { CallToActionSection } from '../components/homeComponents/CallToActionSection'
import { ContactInfo } from '../components/homeComponents/ContactInfo'
import { ShopSection } from '../components/homeComponents/ShopSection'

export const HomeScreen = () => {
  window.scroll(0, 0)

  return (
    <div>
      <Header />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default HomeScreen