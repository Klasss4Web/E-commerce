import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

const Header = () => {

  const logo =
    "https://cdn2.vectorstock.com/i/thumb-large/68/01/shopping-cart-logo-design-vector-14646801.jpg";
  
  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch();
  const history = useHistory()
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <div>
      <div className="announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+234 703 560 7059</p>
              <p>info@ecommerce.ng</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="submit"
                        className="name-button dropdown-toggle"
                        aria-haspopup="true"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link className="cart-mobile" to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems?.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group" onSubmit={handleSubmit}>
                    <input
                      type={"search"}
                      className="form-control rounded-search"
                      placeholder="Search"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src={logo} width="120px" height={"80px"} />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form
                  className="input-group"
                  style={{ width: "100%" }}
                  onClick={handleSubmit}
                >
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                {userInfo ? (
                  <div className="btn-group dropdown">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ color: "#2A9D8F" }}
                    >
                      Hi, {userInfo?.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link
                        className="dropdown-item"
                        to="/profile"
                        style={{
                          color: "#fff",
                          background: "#2A9D8F",
                          border: "1px solid #fff",
                        }}
                      >
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        style={{
                          color: "#fff",
                          background: "#2A9D8F",
                          border: "1px solid #fff",
                        }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link
                      style={{ marginRight: "20px" }}
                      className=""
                      to="/register"
                    >
                      Register
                    </Link>
                    <Link
                      style={{ marginRight: "20px" }}
                      className=""
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}

                <Link className="" to="/cart">
                  <i
                    class="fa fa-shopping-cart"
                    aria-hidden="true"
                    style={{ fontSize: "40px", color: "#264653" }}
                  ></i>
                  <span className="badge">{cartItems?.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
