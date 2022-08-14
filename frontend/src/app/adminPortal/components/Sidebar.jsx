import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas-aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src=""
              style={{ height: "46px" }}
              className="logo"
              alt="One Stop Shop logo"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/products"
                exact={true}
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/add-products"
                exact={true}
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/categories"
                exact={true}
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/orders"
                exact={true}
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/users"
                exact={true}
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Customers</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className={"menu-link"}
                to="/merchants"
                exact={true}
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Merchants</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link disabled"
                to="/transactions"
                exact={true}
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Transactions</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
}
