import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../../redux/actions/userActions';

import logo from "../assets/logo.png"

export const Header = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div
            className="input-group"
            onClick={() => history.push("/dashboard")}
          >
            <img
              src={logo}
              alt="logo"
              width={"30px"}
              height="30px"
              style={{ cursor: "pointer" }}
            />
            {/* <input
              list="search_terms"
              type={"text"}
              className="form-control"
              placeholder="search..."
            /> */}
            {/* <button className="btn bg btn-light" type="button">
              <i className="far fa-search"></i>
            </button> */}
          </div>
          <datalist id="search_terms">
            <option value={"Products"} />
            <option value={"New Orders"} />
            <option value={"Samsung"} />
            <option value={"Google"} />
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          {/* <li className="nav-item">
            <Link className="nav-link btn-icon" title="Dark-mode" to={"#"}>
              <i className="fas fa-moon"></i>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to={"#"}>
              English
            </Link>
          </li> */}
          <li className="dropdown nav-item">
            <Link
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              to={"#"}
            >
              <img className="img-xs rounded-circle" width={"30px"} height="30px" src={logo} alt="user" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My Profile
              </Link>
              <Link className="dropdown-item" to="#">
                My Settings
              </Link>
              <Link
                className="dropdown-item text-danger"
                to="#"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
