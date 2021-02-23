import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles,Grid,Paper} from '@material-ui/core';
import axios from "axios"

export default function Gender() {
    const [details, setdetails] = useState("")
    const [gender, setgender] = useState([])
    const [male, setmale] = useState([])
    const [female, setfemale] = useState([])
const useStyle=makeStyles({
    paper:{
        height: "30vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:"20px",
        color:"white",
        backgroundColor:"transparent"
    },
    title:{
        textAlign:"center",padding:"10px",fontWeight:"bold",color:"white",
        "@media (max-width:500px)":{
            fontSize:"15px"
        },
    },
    title2:{
        textAlign:"center",padding:"10px",fontSize:"15px",color:"white",
    }
})
    useEffect(()=>{
          axios.get("https://covid19-update-api.herokuapp.com/api/v1/fatality-rate/sexRatio").
          then(promise=>{
              //console.log(promise.data.fatality.data)
              setmale(promise.data.fatality.data[0])
              setfemale(promise.data.fatality.data[1])
             setgender(promise.data.fatality.headers)
              setdetails(promise.data.fatality.details)
          })
    },[])
    const classes=useStyle();
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="xl" id="gender">
        <Typography component="div" style={{backgroundColor: '#5393ff', backgroundImage:"url("+process.env.PUBLIC_URL+"/h77-min.jpg)",
        backgroundPosition:"center",
        backgroundSize:" cover",
        backgroundRepeat:"no-repeat", maxheight: '100vh',
    marginBottom:"3%" }}>
       <Typography variant="h4" className={classes.title}>COVID-19 Fatality Rate by Gender</Typography>
  <Typography variant="h4" className={classes.title2}>{details}</Typography>

 <Grid container spacing={3} >
 <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
              <center>
              GENDER :  {male[0]}<br/>
              {gender[1]} :  {male[1]}<br/>
              {gender[2]} :  {male[2]}<br/>
              </center>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper  elevation={0} className={classes.paper}>
          <center>
          GENDER :  {female[0]}<br/>
              {gender[1]} :  {female[1]}<br/>
              {gender[2]} :  {female[2]}<br/>
              </center>
              </Paper>
        </Grid>
 </Grid>

    </Typography>
      </Container>
    </React.Fragment>
  );
}
