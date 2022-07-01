import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='justify-content-center d-flex'>
        <div className='card-name'>
          <img
            alt="master card"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.png'
            />
        </div>
        <div className='card-name'>
          <img
            alt="Visa card"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png'
            />
        </div>
        <div className='card-name'>
          <img
            alt="paypal"
            src='https://pbs.twing.com/media/EfTZEnWAAMn1IX.png'
            />
        </div>
      </div>
    </div>
  )
}

export default Footer;
