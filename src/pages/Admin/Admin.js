import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
	Card,
	Construction,
	Home,
	Location,
	Person,
	Toifalar,
} from "../../assets/images/images";
import { AdminHeader } from "../../components/AdminHeader/AdminHeader";
import { Buyurtmalar } from "../../components/Buyurtmalar/Buyurtmalar";
import { Customers } from "../../components/Сustomers/Сustomers";
import { ToifalarCategory } from "../../components/Toifalar/Toifalar";
import {
	AdminWrapperStyled,
	AdminTabsWrapperStyled,
	AdmininnerStyled,
} from "./Admin.styled";
import { Mahsulotlar } from "../../components/Mahsulotlar/Mahsulotlar";
import { Texnologiyalar } from "../../components/Texnologiyalar/Texnologiyalar";
import { Manzil } from "../../components/Manzil/Manzil";
export const Admin = () => {
	return (
		<>
			<AdminHeader />
			<AdminWrapperStyled>
				<AdminTabsWrapperStyled>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='/'
					>
						<Home />
						Buyurtmalar
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='customers'
					>
						<Person />
						Сustomers
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='toifalar'
					>
						<Toifalar />
						Toifalar
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='mahsulotlar'
					>
						<Card />
						Mahsulotlar
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='texnologiyalar'
					>
						<Construction />
						Texnologiyalar
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='manzil'
					>
						<Location />
						Manzil
					</NavLink>
				</AdminTabsWrapperStyled>
				<AdmininnerStyled>
					<Routes>
						<Route path='/' element={<Buyurtmalar />} />
						<Route path='/customers' element={<Customers />} />
						<Route path='/toifalar' element={<ToifalarCategory />} />
						<Route path='/mahsulotlar' element={<Mahsulotlar />} />
						<Route path='/texnologiyalar' element={<Texnologiyalar />} />
						<Route path='/manzil' element={<Manzil/>} />
					</Routes>
				</AdmininnerStyled>
			</AdminWrapperStyled>
		</>
	);
};
