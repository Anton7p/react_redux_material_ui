import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";

import HeightIcon from '@material-ui/icons/Height';
import {useStyles} from "./StyleConverter";
import {ConverterCard} from "./ConverterCard";


export function Converter(props) {
	const classes = useStyles();
	return (
		 <Container maxWidth="md" className={classes.root}>
			 <Grid container spacing={2}>
				 <Grid item sm={5} className={classes.paper}>
					 <ConverterCard {...props} id={'from'}/>
				 </Grid>
				 <Grid item sm={2} className={classes.grid}>
					 <Button
						  variant="contained"
						  className={classes.button}>
						 <HeightIcon className={classes.icon} onClick={props.handleClick}/>
					 </Button>
				 </Grid>
				 <Grid item sm={5}>
					 <ConverterCard {...props} id={'to'}/>
				 </Grid>
			 </Grid>
		 </Container>
	);
}







