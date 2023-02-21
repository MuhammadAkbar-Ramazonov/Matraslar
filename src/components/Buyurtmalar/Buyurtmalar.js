import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";



export const Buyurtmalar = () => {
	const IOSSwitch = styled((props) => (
		<Switch
			focusVisibleClassName='.Mui-focusVisible'
			disableRipple
			{...props}
		/>
	))(({ theme }) => ({
		width: 45,
		height: 23,
		padding: 0,
		"& .MuiSwitch-switchBase": {
			padding: 0,
			margin: 2,
			transitionDuration: "300ms",
			"&.Mui-checked": {
				marginTop: "2",
				transform: "translateX(21px)",
				color: "#fff",
				"& + .MuiSwitch-track": {
					backgroundColor:
						theme.palette.mode === "dark" ? "#2ECA45" : "#12af1833",
					opacity: 1,
					border: 0,
				},
				"&.Mui-disabled + .MuiSwitch-track": {
					opacity: 0.5,
				},
			},
			"&.Mui-focusVisible .MuiSwitch-thumb": {
				color: "#33cf4d",
				border: "6px solid #fff",
			},
			"&.Mui-disabled .MuiSwitch-thumb": {
				color:
					theme.palette.mode === "light"
						? theme.palette.grey[100]
						: theme.palette.grey[600],
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
			},
		},
		"& .MuiSwitch-thumb": {
			boxSizing: "border-box",
			width: 18,
			height: 18,
			backgroundColor: "#12AF18",
		},
		"& .MuiSwitch-track": {
			borderRadius: 26 / 2,
			backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
			opacity: 1,
			transition: theme.transitions.create(["background-color"], {
				duration: 500,
			}),
		},
	}));
	const [buyurtmalar, setBuyurtmalar] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:1212/admin/orders/1`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((data) => {
				setBuyurtmalar(data.data.data);
				console.log(data.data.data);
			});
	}, []);

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead sx={{ backgroundColor: "#01384D" }}>
						<TableRow>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
							>
								ID
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Ismi
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Telefon Raqami
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Mahsulot Nomlari
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Miqdor
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							>
								Qayta aloqa
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{buyurtmalar?.map((row) => (
							<TableRow
								key={row.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									component='th'
									scope='row'
								>
									{row.id}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{row.name}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{row.number}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{row.product_name}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									{row.count}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									align='center'
								>
									<FormControlLabel
										control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
									/>
								</TableCell>
							</TableRow>
						))}

					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
