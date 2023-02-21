import styled from "styled-components";

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

export const LoginFormStyled = styled.form`
	margin: 157px auto;
	max-width: 330px;
	padding: 35px 30px 30px 30px;
	border: 1px solid #01384d4d;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const LoginTitleStyled = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	margin-top: 0;
	margin-bottom: 40px;
	text-align: center;
	color: #01384d;
`;

export const LoginProfilStyled = styled.div`
	position: relative;
    ::before {
		content: "";
		position: absolute;
        
        z-index: 1;
		width: 13px;
		height: 16px;
		background-image: url("../../assets/images/Profile.svg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
`;
export const LoginLockStyled = styled.div`
	position: relative;
	::before {
		content: "";
		position: absolute;
        top: 10px;
        
        z-index: 1;
		width: 13px;
		height: 16px;
		background-image: url("../../assets/images/Lock.svg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
`;

export const LoginInputStyled = styled.input`
	display: block;
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #01384d;
	margin: 0 auto;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.5);
	border: 1px solid #01384d4d;
	border-radius: 7px;
	margin-bottom: 13px;
	::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #01384d;
		opacity: 0.5;
	}

`;

export const LoginBtnStyled = styled.button`
	display: block;
	width: 100%;
	margin-top: 22px;
	font-weight: 600;
	font-size: 16px;
	padding: 17px 0;
	border: 0;
	background: #01384d;
	opacity: 0.5;
	border-radius: 7px;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
`;
