import React from 'react';
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {useStyles} from "./StyleListOfCurrencies";

function CardInfoDiff(props) {
	const classes = useStyles();
	return (
		 <Toolbar className={classes.container}>
			 <Typography variant='h6'
							 className={props.priceRise ? classes.green : classes.red}>
				 {props.priceRise ?
					  <ArrowUpwardIcon/> :
					  <ArrowDownwardIcon/>}
				 {props.diff}
			 </Typography>
		 </Toolbar>
	);
}

export default CardInfoDiff;