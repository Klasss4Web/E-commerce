import React from 'react'
import flutterWave from "../images/flutterwave.png"

const Footer = () => {

  const masterCard =
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png";

  return (
    <div className="footer">
      <div className="justify-content-center align-items-center d-flex flex-column flex-md-row">
        <div className="card-name">
          <img
            // height={"40px"}
            width="120px"
            alt="master card"
            src={masterCard}
          />
        </div>
        <div
          className="card-name"
          style={{ marginRight: "20px", marginLeft: "20px" }}
        >
          <img
            height={"50px"}
            width="120px"
            alt="stripe logo"
            src="https://banner2.cleanpng.com/20180601/lje/kisspng-stripe-payment-gateway-paypal-e-commerce-linkedin-5b110ef782f6b7.4138399715278445995364.jpg"
          />
        </div>
        <div className="card-name">
          <img
            height={"50px"}
            width="120px"
            alt="paypal"
            src="https://logolook.net/wp-content/uploads/2021/06/Paypal-Logo.png"
          />
        </div>
        <div
          className="card-name"
          style={{ marginRight: "20px", marginLeft: "20px" }}
        >
          <img height={"50px"} width="120px" alt="paypal" src={flutterWave} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
