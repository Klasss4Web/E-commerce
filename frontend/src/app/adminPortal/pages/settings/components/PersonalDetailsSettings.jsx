import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateAdminProfile } from "../../../../../redux/actions/userActions";
import Toast from "../../../../userPortal/components/loadingError/Toast";


export const PersonalDetailsSettings = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;

  const userUpdateProfile = useSelector((state) => state?.adminUpdateProfile);
  const { loading } = userUpdateProfile;


  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   console.log(e.timeStamp);
  //   //Password Match
  //   if (password !== confirmPassword) {
      
  //     setErrorPassword(true);
  //     setTimeout(() => {
  //       setErrorPassword(false);
  //     }, 3000);
  //   } else {
  //     //UPDATE PROFILE
  //     dispatch(updateProfile({ id: user._id, name, email, password }));

  //   }
  // };

  useEffect(() => {
    if (user?.email && user?.name) {
      setName(user.name);
      setEmail(user.email);
      setImage(user?.image)
    }
  }, [dispatch, user]);


  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const payload = {
      name,
      email,
      image,
      phoneNumber,
    };
    dispatch(updateAdminProfile(payload));
  }
  return (
    <div className="mt-3">
      <Toast />
      <form onSubmit={(e)=>handleUpdateProfile(e)}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "200px",
            marginBottom: "20px",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "20px",
            backgroundImage: `url(
              "https://image.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
            )`,
          }}
        >
          <img
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            src={image ||
              "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
            }
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ width: "49%" }}>
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div
          className="my-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="form-group" style={{ width: "49%" }}>
            <label for="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+2347034564774"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ width: "49%" }}>
            <label for="designation">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              placeholder="admin"
            />
          </div>
        </div>
        <div className="form-group my-4">
          <label for="exampleFormControlTextarea1">Bio</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group" style={{ display: "flex" }}>
          {/* <input type="file" className="form-control my-3" /> */}
          {loading ? (
            <>
              <button>
                {" "}
                <i class="fa fa-spinner fa-spin"></i>Loading
              </button>
            </>
          ) : (
            <button>Update</button>
          )}
        </div>
      </form>
    </div>
  );
};
