import styled from "styled-components";

export const AdminHeaderStyled = styled.header`
	background-color: #01384d;
`;
export const AdminHeaderWrapperStyled = styled.div`
	display: flex;
	align-items: center;
`;
export const AdminHeaderInnerStyled = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 16px;
	padding-bottom: 16px;
	padding-right: 60px;
	padding-left: 15px;
`;
export const AdminHeaderLogoStyled = styled.div`
	padding: 19px 47px 20px 30px;
	box-shadow: 0px 0px 0px 1px #022837;
`;

export const AdminHeaderFormStyled = styled.form``;

export const AdminHeaderInputStyled = styled.input`
	width: 400px;
	padding: 12px 20px;
	background-color: #ffffff;
	border-radius: 7px;
	border: 0;
	background-image: url(${({ InputImg }) => InputImg});
	background-repeat: no-repeat;
	background-size: 22px 22px;
	background-position: right 22px center;
	::placeholder {
		font-weight: 500;
		font-size: 13px;
		line-height: 16px;
		color: #000000;
		opacity: 0.5;
	}
`;
export const AdminHeaderAvatarWrapperStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const AdminHeaderTextStyled = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 10px;
	color: #ffffff;
`;
