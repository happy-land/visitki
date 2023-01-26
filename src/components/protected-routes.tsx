import React from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {
	//get item from localstorage

  let user: any

  const _user = localStorage.getItem("user")

	if (_user) {
		user = JSON.parse(_user)
	}
	if (user) {
		return {
			auth: true,
			role: user.tag,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}

//protected Route state
type ProtectedRouteType = {
	roleRequired?: "student" | "curator"
}

const ProtectedRoutes = (props: ProtectedRouteType) => {
	const {auth, role} = useAuth()
  
	//if the role required is there or not
	if (props.roleRequired) {
		return auth ? (
			props.roleRequired === role ? (
				<Outlet />
			) : (
				<Navigate to="/login" />
			)
		) : (
			<Navigate to="/login" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/login" />
	}
}

export default ProtectedRoutes;