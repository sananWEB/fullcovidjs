import React,{useState,useEffect,useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Button,Select,MenuItem,InputLabel,FormControl} from '@material-ui/core';
import {BrowserRouter,Route,Link,useHistory,useRouteMatch} from "react-router-dom"
import{ Context } from "../App"
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typist from 'react-typist';
import axios from "axios";
import CustomizedDialogs from "./dialog"

export default function SimpleContainer() {


      

  const {user,setuser}=useContext(Context)

console.log(user)
  const [open, setOpen] = React.useState(false);
    const [info, setinfo] = useState({
      deaths1:"none",
      continent:"none",
      population:"none",
      recovered:"none",
      todayCases:"none",
      todayDeaths:"none",
      cases:"none"
    })

  const handleClickOpen = (e) => {
    setOpen(true);
    setSelect(e.target.value)
    };
  const handleClose = () => {
    setOpen(false);
   // setSelect("none")
  };


  const [api, setapi] = useState([]);
useEffect(()=>{
  axios.get("https://corona.lmao.ninja/v2/countries").then(promise=>{
    setapi(promise.data)
  }).catch(error=>console.log(error))
},[])


const [select,setSelect] = useState(0);
 
  

  const useStyles=makeStyles({
    
    image:{
            minHeight:"100vh",
      //height:"660px",
         backgroundImage: "url("+process.env.PUBLIC_URL + "./main/main"+7+"-min.jpg)",
         backgroundPosition:" center",
         backgroundSize:" cover",
         backgroundRepeat:"no-repeat",
         alignItems:"center",
      color:"white",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5px",
      paddingRight:"5px"
    },

    svg:{
      height:"100px",
      width:"100px"
    },
    text:{
      paddingTop:'15%',
      fontWeight:"bold",
      '@media (max-width:1200px)': {
        paddingTop: '30%',
        fontWeight:"bold",
        
      }
    },
    formControl: {
      margin:1,
    minWidth: 120,
    marginTop:'5%',
    },
    Select:{
      color:"#35baf6",
      fontSize:"20px",
      padding:"10px",
     // paddingLeft:"10px",
      //paddingRight:"10px",
      margin:"10px",
      backgroundColor:"white",
      '@media (max-width:500px)': {
               fontSize:"15px"
        
      }
     
    }
  })

  
  const classes=useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="xl" disableGutters  id="country">
        <Typography component="div" className={classes.image}>
        <center>
      <Typography  variant="h4"  className={classes.text}>
      { user.login==false?null:<Typography style={{fontWeight:"bold",color:"white"}} variant="h4">
      Wellcome {user.name}
        </Typography>}
      Wash   Your hands and always wear mask
        </Typography>
      <Typography variant="h4"  style={{color:"white"}}

      >COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.</Typography>
     <Typography variant="h4" style={{paddingTop:'2%'}}>Choose a Country</Typography>
  <select id="cars" value={select} onChange={handleClickOpen} className={classes.Select}>
  <option value="none" disabled selected>Loading...</option>
  {api.map((r,i)=>
  <option value={i} >{r.country}</option>
    )}
 </select>
</center>
         </Typography>
         <CustomizedDialogs open={open} setOpen={open} handleClickOpen={handleClickOpen}
         handleClose={handleClose} select={select} api={api} 
         />
         </Container>
    </React.Fragment>
  );
}