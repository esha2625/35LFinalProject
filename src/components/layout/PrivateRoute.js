import React from "react"
import { Route, useNavigate, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../store/auth-context"

export const PrivateRoute = () => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return currentUser ? <Outlet /> : <Navigate to="/login-page" />;
}

/*
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : navigate("/login")
      }}
    ></Route>
  )
}*/