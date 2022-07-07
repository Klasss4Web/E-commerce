import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { getUserProfile } from '../redux/actions/userActions'
import Orders from "./../components/profileComponents/Orders"
import ProfileTabs from "../components/profileComponents/ProfileTabs"
import moment from "moment"

export const ProfileScreen = () => {

  window.scrollTo(0, 0)

  const dispatch = useDispatch()
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getUserProfile("PROFILE"))
  },[dispatch])


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
                    <strong>{userInfo?.name}</strong>
                  </h5>
                  <span className='author-card-position'>Joined {moment(userInfo.createdAt).format("LL")}</span>
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
            <ProfileTabs />
          </div>
        </div>
      </div>
    </div>
  )
}
