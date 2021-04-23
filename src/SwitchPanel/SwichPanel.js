import Box from "@material-ui/core/Box";
import React from "react";

export function SwitchPanel(props) {
	const {children, value, index, ...other} = props;
	return (
		 <div hidden={value !== index} {...other}>
			 {value === index && (<Box p={3}>{children}</Box>)}
		 </div>
	);
}