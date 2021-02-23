import React,{useEffect,useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles } from '@material-ui/core/styles';
export default function SimpleContainer() {


const useStyles=makeStyles({
  map:{
height: '100vh',
width:"98vw",
"@media (max-width:700px)":{
  height: '50vh'
},
  },
  
})

const classes=useStyles();
  return (
    

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters	>
        <Typography component="div" style={{minheight: '100vh' }}>
    <iframe src="https://www.healthmap.org/covid-19/" className={classes.map} title="W3Schools Free Online Web Tutorials"></iframe>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
