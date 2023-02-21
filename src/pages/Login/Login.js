import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	LoginBtnStyled,
	LoginFormStyled,
	LoginInputStyled,
	LoginLockStyled,
	LoginProfilStyled,
	LoginTitleStyled,
} from "./Login.styled";
export const Login = () => {
	const loginRef = useRef("");
	const lockRef = useRef("");
	const navigate = useNavigate();
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(lockRef?.current.value);
		console.log(loginRef?.current.value);
		axios
			.post(`http://localhost:1212/admin/login`, {
				userName: loginRef.current?.value,
				password: lockRef.current?.value,
			})
			.then((data) => {
				if (data.status === 200) {
					console.log(data);
					navigate("/");
					localStorage.setItem("token", data.data.token);
				}
			});
	};
	return (
		<Container>
			<LoginFormStyled onSubmit={(evt) => handleSubmit(evt)}>
				<LoginTitleStyled>Kirish</LoginTitleStyled>
				<LoginProfilStyled>
					<LoginInputStyled ref={loginRef} placeholder='Login' />
				</LoginProfilStyled>

				<LoginLockStyled>
					<LoginInputStyled ref={lockRef} placeholder='Parol' />
				</LoginLockStyled>
				<LoginBtnStyled>Kirish</LoginBtnStyled>
			</LoginFormStyled>
		</Container>
	);
};
