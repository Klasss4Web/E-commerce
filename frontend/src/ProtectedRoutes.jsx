
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");
        if(token) {
          return <Component {...props} />
        }else {
          return <Redirect to={"/login"} />
        }
      }}
    />
  )
}
