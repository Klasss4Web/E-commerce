import React from 'react'

export const CallToActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do you need more tips?</h2>
              <p>Sign up for free and get the latest tips.</p>
              <form className="form-section">
                <input placeholder="Yor Email..." name="email" type="email" />
                <input value="Yes, I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
