import React, { useState } from 'react'
// import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import { updateProfile } from '../../redux/actions/userActions';
import Message from '../loadingError/Error';
import Loading from '../loadingError/Loading';
import Toast from '../loadingError/Toast';

const ProfileTabs = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false)
  // const toastId = useRef(null)

  const dispatch = useDispatch()

  const userProfile = useSelector((state) => state.userProfile);
  const { error, loading, user } = userProfile;

  const userUpdateProfile = useSelector((state) => state?.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile

  // const ToastObject = {
  //   pauseOnFocusLoss: false,
  //   draggable: false,
  //   pauseOnHover: false,
  //   autoClose: 2000
  // }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(e.timeStamp);
    //Password Match
    if(password !== confirmPassword) {
      // if(!toast.isActive(toastId.current)) {
      //   toastId.current = toast.error("Password does not match", ToastObject)
      // }
      setErrorPassword(true);
      setTimeout(()=>{setErrorPassword(false)}, 3000);
    }
    else {
      //UPDATE PROFILE
      dispatch(updateProfile({id: user._id, name, email, password}));
      // if(toast.current(toastId.current)) {
      //   toastId.current = toast.success("Profile updated", ToastObject)
      // }
    }
  }

  useEffect(() => {
    if(user?.email && user?.name) {
      setName(user.name)
      setEmail(user.email)
    }
  },[dispatch, user])

  return (
    <div>
      <Toast />
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <form className="row form-container" onSubmit={handleUpdateProfile}>
        <div className="col-md-6">
          <div className="form">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">Email Address</label>
            <input
              className="form-control"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">New Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {
              errorPassword && <Message variant={"alert-danger"}>Password dont match</Message>
            }
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfileTabs
