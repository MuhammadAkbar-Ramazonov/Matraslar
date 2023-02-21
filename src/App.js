import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/Global.styles";
import { Admin } from "./pages/Admin/Admin";
import { Login } from "./pages/Login/Login";

export const App = () => {
	const navigate = useNavigate();
	return (
		<>
			<Routes>
				<Route
					path='/*'
					element={localStorage.getItem("token") ? <Admin /> : navigate("/login")}
				/>
				<Route path='/login' element={<Login />} />
			</Routes>
			<GlobalStyle />
		</>
	);
};
