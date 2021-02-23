import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles,Grid,Paper} from '@material-ui/core';
import axios from "axios"
import {Bar,Line} from 'react-chartjs-2';

export default function Graph() {

        
 
 

    const useStyles=makeStyles({
      paper: {
        height: "50vh",
      },
    })

     const [totaldeathsC, settotaldeathsC] = useState([])
     const [totaldeathsD, settotaldeathsD] = useState([])
    const [totalcases, settotalcases] = useState([])
    const [totalrecovery, settotalrecovery] = useState([])
    const [totalrecovery1, settotalrecovery1] = useState([])
    const [growthFactor, setgrowthFactor] = useState([])
    const [growthFactor1, setgrowthFactor1] = useState([])
   useEffect(()=>{
             axios.get("https://covid19-update-api.herokuapp.com/api/v1/cases/graphs").then(
                 promise=>{
                  settotaldeathsC(promise.data.graphs.totalDeaths.categories)
                  settotalrecovery1(promise.data.graphs.recoveryRate.categories)
                  settotaldeathsD(promise.data.graphs.totalDeaths.data)
                      settotalcases(promise.data.graphs.totalCases.data)
                      settotalrecovery(promise.data.graphs.recoveryRate.data)
                      setgrowthFactor(promise.data.graphs.growthFactor.data)
                      setgrowthFactor1(promise.data.graphs.growthFactor.categories)
                      //console.log(promise.data.graphs.growthFactor.data)
                 }
             ).catch(error=>console.log(error))
   },[])
   var data={
    labels:totaldeathsC,
    datasets: [{
        label: 'Total Deaths',
        data:totaldeathsD,
        backgroundColor: "#e74c3c",
       
        borderWidth: 1
    }]
}

var data1={
  labels:totaldeathsC,
  datasets: [{
      label: 'Total Cases',
      data:totalcases,
      backgroundColor: "#2980b9",
     
      borderWidth: 1
  }]
}

var data2={
  labels:totalrecovery1,
  datasets: [{
      label: 'Total Recovery',
      data:totalrecovery,
      backgroundColor: "#27ae60",
     
      borderWidth: 1
  }]
}

var data3={
  labels:growthFactor1,
  datasets: [{
      label: 'growthFactor',
      data:growthFactor,
      backgroundColor: "#f39c12",
     
      borderWidth: 1
  }]
}
   //console.log(totaldeaths.categories)
   //console.log(totaldeaths.data)
     const classes=useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" id="graph">
        <Typography component="div" style={{maxheight: '100vh',paddingBottom:"3%"}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} >
          <Paper className={classes.paper} elevation={0}>
        <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Custom Chart Title',
            fontSize:"12px",
            position:"top"
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      }
 }
 }
  width={100}
  height={100}
  options={{ maintainAspectRatio: false }}
/>
</Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper} elevation={0}>
        <Bar
        data={data1}
        options={{
          title: {
            display: true,
            text: 'Custom Chart Title',
            fontSize:"12px",
            position:"top"
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      }
 }
 }
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper} elevation={0}>

        <Bar
        data={data2}
        options={{
          title: {
            display: true,
            text: 'Custom Chart Title',
            fontSize:"12px",
            position:"top"
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      }
 }
 }
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
         </Paper>
        </Grid>


        <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper} elevation={0}>

        <Bar
        data={data3}
        options={{
          title: {
            display: true,
            text: 'Custom Chart Title',
            fontSize:"12px",
            position:"top"
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      }
 }
 }
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
         </Paper>
        </Grid>
           </Grid>
        
        </Typography>
      </Container>
    </React.Fragment>
  );
}
