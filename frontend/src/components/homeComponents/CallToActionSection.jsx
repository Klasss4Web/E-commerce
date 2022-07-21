import React from 'react'

export const CallToActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Be the first</h2>
              <p>Sign up and be the first to see new products.</p>
              <form className="form-section">
                <input placeholder="Yor Email..." name="email" type="email" />
                <input value="Yes, Send me alert!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
