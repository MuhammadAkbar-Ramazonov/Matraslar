import { Button } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

export const AddButton = () => {
	return (
		<Button
			sx={{
				fontWeight: "600",
				fontSize: "15px",
				lineHeight: "18px",
				textAlign: "center",
				color: "#FFFFFF",
				background: "#01384D",
				borderRadius: "8px",
				padding: "11px 34px",
			}}
		>
			Qo’shish
		</Button>
	);
};
