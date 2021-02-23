import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography,Grid,Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical, faCoffee ,faHeart, faHospitalUser, faPills, faProcedures } from '@fortawesome/free-solid-svg-icons'

export default function Worldwide() {

    const [total, settotal] = useState([])

    useEffect(()=>{
        axios.get("https://covid2019-api.herokuapp.com/v2/total")
        .then(promise=>{
            settotal(promise.data.data); 
     }).catch(error=>console.log(error))
    },[])
    
   // console.log(total)

    const useStyle=makeStyles({
container:{
  //backgroundColor: '#cfe8fc',
    minHeight: '48vh',
    marginBottom:"10px"
   // height:"100vh"
    
     
},
paper: {
    display:"flex",
    padding: 2,
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    height:"200px",
    color:"white",
    "@media (max-width:900px)":{
        height:"150px",
    },
  
    
  },

    })

    const classes=useStyle();
    return (
      

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" id="worldwide" >
          <Typography component="div" className={classes.container}>
    <Typography variant="h4" style={{textAlign:"center",padding:"20px",color:"#35baf6",fontWeight:"bold"}}>WORLDWIDE</Typography>
    <Grid container spacing={3}>
    <Grid item lg={3} xs={12} md={3} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor:"#c0392b",backgroundImage:"url("+process.env.PUBLIC_URL + "./chart2.jpg)",        backgroundSize:" cover"
}}>
          <Typography variant="h5">
            <center>
            <b> DEATHS</b><br/><br/>
          <FontAwesomeIcon icon={faProcedures}/><br/><br/>
         {total.deaths}
         </center>
         </Typography>
          </Paper>
          </Grid>


          <Grid item lg={3} xs={12} md={3} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor:"#27ae60",
        backgroundImage:"url("+process.env.PUBLIC_URL + "./chart3.jpg)",        backgroundSize:" cover"}}>
          <Typography variant="h5" >
              <center>
             <b> RECOVERED</b><br/><br/>
             <FontAwesomeIcon icon={faHeart}/><br/><br/>
              {total.recovered}
              </center>
          </Typography>
          </Paper>
          </Grid>


          <Grid item lg={3} xs={12} md={3} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor:"#2980b9",backgroundImage:"url("+process.env.PUBLIC_URL + "./chart1.jpg)",        backgroundSize:" cover"}}>
          <Typography variant="h5" >
              <center>
         <b> CONFIRMED</b><br/><br/>
         <FontAwesomeIcon icon={faHospitalUser}/><br/><br/>
              {total.confirmed}
              </center>
          </Typography>
          </Paper>
          </Grid>


          <Grid item lg={3} xs={12} md={3} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor:"#f1c40f",backgroundImage:"url("+process.env.PUBLIC_URL + "./chart4.jpg)",        backgroundSize:" cover"}}>
          <Typography variant="h5">
              <center>
              <b>ACTIVE</b><br/><br/>
              <FontAwesomeIcon icon={faClinicMedical}/><br/><br/>
              {total.active}
              </center>
          </Typography>
          </Paper>
          </Grid>


          </Grid>
          </Typography>
        </Container>
      </React.Fragment>
     
    );
  }


/* <Paper className={classes.paper} style={{backgroundColor:"#2980b9"}}>
          <Typography variant="h4" style={{fontWeight:"bold"}}>
              <center>
          confirmed<br/>
              {total.confirmed}
              </center>
          </Typography>
          
          </Paper>*/