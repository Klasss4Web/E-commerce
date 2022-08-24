import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../redux/actions/userActions";
import Toast from "../../userPortal/components/loadingError/Toast";
// import Header from "../components/Header";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";

import bgImage from "../../images/bgImg.jpg"

export const Login = ({ history }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

   useEffect(() => {
     if (userInfo) {
       history.push("/");
     }
   },[history, userInfo]);

  return (
    <div className="background">
      {/* <Header /> */}
      <Toast />
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form className="login col-md-8 col-lg-4 col-11" onSubmit={handleLogin}>
          <input
            type={"email"}
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ marginBottom: "20px" }}
            type={"password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to="#"
              // to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
