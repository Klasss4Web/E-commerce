import React from 'react'
import Footer from '../components/Footer'
// import Header from '../components/Header'
import { CallToActionSection } from '../components/homeComponents/CallToActionSection'
import { ContactInfo } from '../components/homeComponents/ContactInfo'
import { ShopSection } from '../components/homeComponents/ShopSection'

export const HomeScreen = ({ match }) => {
  window.scroll(0, 0)

  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber;

  return (
    <div>
      {/* <Header /> */}
      <ShopSection keyword={keyword} pageNumber={pageNumber} />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default HomeScreen