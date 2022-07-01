import React from 'react'
import Header from '../components/Header'

export const ProfileScreen = () => {
  return (
    <div>
      <Header />
      <div className='container mt-lg-5 mt-3'>
        <div className='row align-items-start'>
          <div className='col-lg-4 p-0 shadow'>
            <div className='author-card pb-0 pb-md-3'>
              <div className='author-card-cover'></div>
              <div className='author-card-profile row'>
                <div className='author-card-avatar col-md-5'>
                  <img src='./images/user.png' alt="" />
                </div>
                <div className='author-card-details col-md-7'>
                  <h5 className='author-card-name mb-2'>
                    <strong>Admin Doe</strong>
                  </h5>
                  <span className='author-card-position'>Joined Jan 1, 2022</span>
                </div>
              </div>
            </div>
            <div className='wizard pt-3'>
              <div className='d-flex align-items-start'>
                <div className='nav align-items-start flex-column col-12 nav-pills me-3'
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                  <button
                   className="nav-link active"
                   id="v-pills-home-tab"
                   data-bs-toggle="pills"
                   data-bs-target="#v-pills-home"
                   role="tab"
                   type="button"
                   aria-controls="v-pills-home"
                   aria-selected="true"
                   >
                    Profile Settings
                   </button>
                   <button
                   className="nav-link d-flex justify-content-between"
                   id="v-pills-profile-tab"
                   data-bs-toggle="pills"
                   data-bs-target="#v-pills-profile"
                   role="tab"
                   type="button"
                   aria-controls="v-pills-profile"
                   aria-selected="false"
                   >
                    Order List
                    <span className='badge2'>3</span>
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* Panels */}
          <div
           className='tab-content col-lg-8 pb-5 pt-lg-0 pt-3'
           id='v-pills-tabContent'
          >
            
          </div>
        </div>
      </div>
    </div>
  )
}
