import { Avatar } from "@mui/material";
import React from "react";
import { AdminLogo, Profil } from "../../assets/images/images";
import {
	AdminHeaderAvatarWrapperStyled,
	AdminHeaderFormStyled,
	AdminHeaderInnerStyled,
	AdminHeaderInputStyled,
	AdminHeaderLogoStyled,
	AdminHeaderStyled,
	AdminHeaderTextStyled,
	AdminHeaderWrapperStyled,
} from "./AdminHeader.styled";


import InputImg from "../../assets/images/search.svg";
export const AdminHeader = () => {
	return (
		<>
			<AdminHeaderStyled>
				<AdminHeaderWrapperStyled>
					<AdminHeaderLogoStyled>
						<AdminLogo />
					</AdminHeaderLogoStyled>
					<AdminHeaderInnerStyled>
						<AdminHeaderFormStyled>
							<AdminHeaderInputStyled InputImg={InputImg} placeholder='User' />
						</AdminHeaderFormStyled>
						<AdminHeaderAvatarWrapperStyled>
							<Profil />
							<AdminHeaderTextStyled>John Doe</AdminHeaderTextStyled>
						</AdminHeaderAvatarWrapperStyled>
					</AdminHeaderInnerStyled>
				</AdminHeaderWrapperStyled>
			</AdminHeaderStyled>
		</>
	);
};
