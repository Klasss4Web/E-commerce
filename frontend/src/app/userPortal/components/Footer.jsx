import React from 'react'

const Footer = () => {

  const masterCard =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOWW2kP8u2RS_pKq5NbNBhm-Z3Hmo3AelVQ&usqp=CAU";

  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            height={"40px"}
            width="50px"
            alt="master card"
            src={masterCard}
          />
        </div>
        <div className="card-name" style={{ marginRight: "20px", marginLeft: "20px"}}>
          <img
            height={"40px"}
            width="50px"
            alt="Visa card"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPBpIHHIOncGXhBZ0Owqj7sGfRkoNSWXuTqHCeo812XG3b5A7Sjdm&usqp=CAE&s"
          />
        </div>
        <div className="card-name">
          <img
            height={"50px"}
            width="100px"
            alt="paypal"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0H2GDv1mx-8kIJ51OEwAfyri7_i7hUaUXw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
