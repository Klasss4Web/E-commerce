import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Message from "../components/loadingError/Error";
import Loading from "../components/loadingError/Loading";
import { register } from "../redux/actions/userActions";

const Register = ({ history, location }) => {
  window.scrollTo(0, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <div>
      <Header />
      <div className="container d-flex flex-column justify-content-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="login col-md-8 col-lg-4 col-11"
          onSubmit={handleRegister}
        >
          <input
            type={"text"}
            placeholder="User name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <p>
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              Have an account?<strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
