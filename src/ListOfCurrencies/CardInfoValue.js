import React from 'react';
import {Button, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./StyleListOfCurrencies";
import {setMode} from "../redux/SwitchTabsReduser";
import {useDispatch} from "react-redux";

export function CardInfoValue(props) {
	const dispatch = useDispatch()
	const classes = useStyles();
	const handleClick = () => {
		dispatch(setMode(1))
	};
	return (
		 <Toolbar className={classes.container}>
				 <Button className={classes.currency} onClick={handleClick}>
					 {(props.Value).toFixed(2)}RUB
				 </Button>
		 </Toolbar>
	);
}