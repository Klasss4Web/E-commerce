import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Header from "../components/Header";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { login } from "../../../redux/actions/userActions";
// import Toast from "../components/loadingError/Toast";

export const Login = ({ history, location }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <div>
     
      {/* <Header /> */}
      <div className="container d-flex flex-column justify-content-center align-items-center">
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
          style={{ marginBottom: "20px"}}
            type={"password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
