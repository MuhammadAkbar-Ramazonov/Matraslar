import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete, EditDelete } from "../../assets/images/images";
import { AddButton } from "../AddButton/AddButton";
import axios from "axios";
import { Box, FormControlLabel, FormGroup, Input, Switch } from "@mui/material";
import { Modal } from "../Modal/Modal";
import { Label } from "@mui/icons-material";

export const Texnologiyalar = () => {
	const [addPostModal, setAddPostModal] = useState(false);
	const [addPutModal, setAddPutModal] = useState(false);
	const [idPut, setIdPut] = useState();

	const [technology, setTechnology] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:1212/admin/technology`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((data) => {
				console.log(data.data);
				setTechnology(data.data);
			});
	}, []);

	const handlePost = (evt, id) => {
		console.log(evt);
		axios
			.post(
				`http://localhost:1212/admin/technology${id}`,
				{
					name: evt.target[0].value,
					thumbnail: evt.target[1].value,
					link: evt.target[3].value,
					description: evt.target[2].value,
					isActive: evt.target[4].value === "on" ? true : false,
				},
				{
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				},
			)
			.then((data) => {
				console.log("post", data);
			});
	};
	const handleFormSubmit = (evt, id = "") => {
		evt.preventDefault();
		handlePost(evt, id);
	};

	const handlePut = (evt) => {
		console.log(evt.target[0].value);
		console.log(idPut);
		axios
			.put(
				`http://localhost:1212/admin/technology/${idPut}`,
				{
					name: evt.target[0].value,
					thumbnail: evt.target[1].value,
					link: evt.target[3].value,
					description: evt.target[2].value,
					isActive: evt.target[4].value === "on" ? true : false,
				},
				{
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				},
			)
			.then((data) => {
				console.log("post", data);
			});
	};
	const handleFormPutSubmit = (evt) => {
		evt.preventDefault();
		handlePut(evt);
	};

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:1212/admin/technology/${id}`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((data) => {
				prompt("Deleted");
				console.log(data);
			});
	};
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead sx={{ backgroundColor: "#01384D" }}>
						<TableRow>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
							>
								Nomlari
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
							>
								Matn
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
							>
								Video
							</TableCell>
							<TableCell
								sx={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}
								align='center'
							></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>

						{technology.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									component='th'
									scope='row'
								>
									{row.name}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									component='th'
									scope='row'
								>
									{row.description}
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", fontWeight: "500" }}
									component='th'
									scope='row'
								>
									{row.link}
								</TableCell>
								<TableCell
									sx={{
										fontSize: "15px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "10px",
										fontWeight: "500",
									}}
									align='right'
								>
									<Box
										sx={{ cursor: "pointer" }}
										onClick={() => {
											setAddPutModal(true);
											setIdPut(row.id);
										}}
									>
										<EditDelete />
									</Box>
									<Box
										sx={{ cursor: "pointer" }}
										onClick={() => handleDelete(row.id)}
									>
										<Delete />
									</Box>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{addPostModal ? (
				<Modal title='Qo’shish' setModal={setAddPostModal}>
					<form
						className='row w-100 px-4'
						onSubmit={(evt) => handleFormSubmit(evt)}
					>
						<label className='col-6'>
							Nomi
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Rasm
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Nomi
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Video
							<input className='form-control' type='text' />
						</label>
						<div className='col-12  mt-5'>
							<div className='row'>
								<FormGroup className='col-6 d-flex flex-row align-items-center justify-content-between'>
									Navinla
									<Switch color='success' aria-label='login switch' />
								</FormGroup>
								<button
									type='submit'
									className='col-6'
									style={{
										border: "none",
										fontWeight: "600",
										fontSize: "15px",
										lineHeight: "18px",
										textAlign: "center",
										color: "#FFFFFF",
										background: "#01384D",
										borderRadius: "8px",
										padding: "14px 79px",
									}}
								>
									Qo’shish
								</button>
							</div>
						</div>
					</form>
				</Modal>
			) : (
				""
			)}

			{addPutModal ? (
				<Modal title='Qo’shish' setModal={setAddPutModal}>
					<form
						className='row w-100 px-4'
						onSubmit={(evt) => handleFormPutSubmit(evt)}
					>
						<label className='col-6'>
							Nomi
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Rasm
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Nomi
							<input className='form-control' type='text' />
						</label>
						<label className='col-6'>
							Video
							<input className='form-control' type='text' />
						</label>
						<div className='col-12  mt-5'>
							<div className='row'>
								<FormGroup className='col-6 d-flex flex-row align-items-center justify-content-between'>
									Navinla
									<Switch color='success' aria-label='login switch' />
								</FormGroup>
								<button
									type='submit'
									className='col-6'
									style={{
										border: "none",
										fontWeight: "600",
										fontSize: "15px",
										lineHeight: "18px",
										textAlign: "center",
										color: "#FFFFFF",
										background: "#01384D",
										borderRadius: "8px",
										padding: "14px 79px",
									}}
								>
									Qo’shish
								</button>
							</div>
						</div>
					</form>
				</Modal>
			) : (
				""
			)}
			<div onClick={() => setAddPostModal(true)}>
				<AddButton />
			</div>
		</>
	);
};
