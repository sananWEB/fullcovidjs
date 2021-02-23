import React,{useEffect,useState,useContext} from 'react';
import {Context} from "../App"
  
import Main2 from "./main2"
import ButtonAppBar from "./Navbar2"
import {Grid,Box,Paper,Container,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Urls from "../urls"
import FooterPage from "./footer"
import { faPills,faDisease,faVirusSlash,faProceduresfaViruses,faViruses,faHeadSideMask,faStethoscope,faVirus,faHospitalUser,faShieldVirus,faClinicMedical,faProcedures } from '@fortawesome/free-solid-svg-icons'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
import 'react-circular-progressbar/dist/styles.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BrowserRouter,Route,Link,useHistory,useRouteMatch,Redirect,useParams,useLocation, Switch} from "react-router-dom"
const useStyles = makeStyles({
   paper:{
      height:"auto",
      
     // padding:"10px",
     
   },
   border:{
     //  border:"2px solid black",
     display:"flex",
     justifyContent:"space-around",
     flexDirection:"column",
     alignItems:"center"
     
   },
   circle:{
       height:"auto",
       width:"105px"
   }
  });

  

function Pakistan() {
  const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)
//  console.log(useRouteMatch().url)
  console.log(Urls(useRouteMatch().url))

    const [api, setapi] = useState({});
    const [api1, setapi1] = useState({});
  useEffect(()=>{
    axios.get("https://corona.lmao.ninja/v2/countries/pakistan").then(promise=>{
      setapi(promise.data.countryInfo)
      setapi1(promise.data)
    }).catch(error=>console.log(error))
  },[])

console.log(api1)

const contrydata=[
    {data:api1.active,name:"Active",icon:faPills,color:"#0A79DF"},
    {data:api1.deaths,name:"Deaths",icon:faProcedures,color:"#B83227"},
    {data:api1.recovered,name:"Recovered",icon:faClinicMedical,color:"#43BE31"},
   {data:api1.updated,name:"Updated",icon:faViruses,color:"#616C6F"},
   {data:api1.todayCases,name:"TodayCases",icon:faStethoscope,color:"#AE1438"},
  
  {data:api1.todayDeaths,name:"TodayDeaths",icon:faVirus,color:"#4834DF"},
  {data:api1.todayRecovered,name:"TodayRecovered",icon:faHospitalUser,color:"#6AB04A"},
  {data:api1.critical,name:"Critical",icon:faShieldVirus,color:"#1BCA9B"},
  {data:api1.casesPerOneMillion,name:"CasesPerOneMillion",icon:faDisease,color:"#F3B431"},
  {data:api1.tests,name:"Tests",icon:faPills,color:"#1287A5"},
  {data:api1.oneDeathPerPeople,name:"OneDeathPerPeople",icon:faHeadSideMask,color:"#E74292"},
  {data:api1.criticalPerOneMillion,name:"CriticalPerOneMillion",icon:faVirusSlash,color:"#10A881"}
]

console.log(contrydata[0].active)
    const classes = useStyles();
    return (
     <>
           <ButtonAppBar/>
     <Main2 image="pakistan1.jpg" text="Pakistan" />
     <br/>
     <Container maxWidth="xl" >
     <Grid container spacing={3} >
         
         <Grid item xs={12} sm={12} md={6} >
          
             <Paper variant="outlined" className={classes.paper}>


             <Grid container >


                 <Grid item xs={6} className={classes.border} >
                 <img src={api.flag} style={{margin:"20px",border:`1px solid #CBD5E0`, width: "60%",
  height: "auto"}}  />

                 </Grid>

                   <Grid item xs={6} className={classes.border}>
                       
            <Typography variant="h5" style={{fontWeight:"bold",color:"#35BAF6"}}>POPULATION</Typography>
    <Typography variant="h6">{api1.population}<br/>(22 crore)</Typography>

                       
                 </Grid>



             </Grid>
               




             </Paper >
         </Grid>
         <Grid item xs={12} sm={12} md={6}>
             <Paper variant="outlined" className={classes.paper} style={{padding:"20px"}}>

            <Grid container>
                <Grid item xs={6}>
                    <center>
                <CircularProgressbar  styles={buildStyles({
          textColor: "#01411C",
          pathColor: "#01411C",
          //trailColor: "#01411C"
        })} className={classes.circle} value={66} text={`66%`} />

        
                <Typography>Recovery Rate</Typography>
                </center>
                </Grid>
                <Grid item xs={6}>
                <center>
                <CircularProgressbar
                styles={buildStyles({
                    textColor: "#992C34",
                    pathColor: "#992C34",
                    //trailColor: "#01411C"
                  })}
                 className={classes.circle} value={2} text={`2%`} 
                />
                <Typography>Fatality Rate</Typography>
                </center>
                </Grid>
            </Grid>             
             </Paper>
         </Grid>  
     </Grid>
    
 
          <br/>

      
              <Grid container spacing={2}> 
              {contrydata.map((i,v)=>
                  <Grid item xs={6} sm={6} md={3} >
                   <Paper variant="outlined" style={{height:"150px",display:"flex",justifyContent:"space-around",flexDirection:"column" ,alignItems:"center",
                   border:`1px solid ${i.color}`}}>
                    <Typography variant="h5" style={{fontWeight:"bold"}}>
              {i.name}
               </Typography>
               <FontAwesomeIcon size="2x" style={{color:`${i.color}`}} icon={i.icon}/>
                   <Typography variant="h6">
                   {i.data}
                   </Typography>
                   
                  </Paper>
                    </Grid>
                  )}
              </Grid>
              </Container>
              <br/>
        <FooterPage/>
     </>
    )
}

export default Pakistan
