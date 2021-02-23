import React,{useState,useContext,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Grid,Paper,makeStyles} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import axios from "axios"
import Main2 from "./main2"
import Title from "./title"
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
 
export default function Agegroup() {
  const {user,setuser,seturl}=useContext(Context)



  const useStyles=makeStyles({
    paper:{
      height:"30vh",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:"column"

    }
  })
   const [detail, setdetail] = useState(null)
   const [title, settitle] = useState(null)
   const [data1,setdata1] = useState({ age:"Loading...",
    death:"Loading.."})
   const [data2,setdata2] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data3,setdata3] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data4,setdata4] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data5,setdata5] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data6,setdata6] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data7,setdata7] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data8,setdata8] = useState({ age:"Loading...",
   death:"Loading.."})
   const [data9,setdata9] = useState({ age:"Loading...",
   death:"Loading.."})
  useEffect(()=>{
    axios.get("https://covid19-update-api.herokuapp.com/api/v1/fatality-rate/ageGroup").then(
      promise=>{
       // console.log(promise.data.fatality)
    setdetail(promise.data.fatality.details)
    settitle(promise.data.fatality.title)
    setdata1({
      age:promise.data.fatality.data[0][0],
      death:promise.data.fatality.data[0][2],
    })
    setdata2({
      age:promise.data.fatality.data[1][0],
      death:promise.data.fatality.data[1][2],
    })
    setdata3({
      age:promise.data.fatality.data[2][0],
      death:promise.data.fatality.data[2][2],
    })
    setdata4({
      age:promise.data.fatality.data[3][0],
      death:promise.data.fatality.data[3][2],
    })
    setdata5({
      age:promise.data.fatality.data[4][0],
      death:promise.data.fatality.data[4][2],
    })
    setdata6({
      age:promise.data.fatality.data[5][0],
      death:promise.data.fatality.data[5][2],
    })
    setdata7({
      age:promise.data.fatality.data[6][0],
      death:promise.data.fatality.data[6][2],
    })
    setdata8({
      age:promise.data.fatality.data[7][0],
      death:promise.data.fatality.data[7][2],
    })
    setdata9({
      age:promise.data.fatality.data[8][0],
      death:promise.data.fatality.data[8][2],
    })
      }
    ).catch(error=>console.log(error))
  },[])
  seturl(useRouteMatch().url)
  const classes=useStyles();
  Title("AgeGroup")
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Main2 image="h22-min.jpg" text="AGEGROUP" />
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{minheight: '100vh'}}>
          <center>
        <Typography variant="h3" style={{color:"#35baf6",fontWeight:"bold",padding:"13px"}}>{title}</Typography>
  <Typography>{detail}</Typography>
<Grid container spacing={3} style={{paddingTop:"20px",paddingBottom:"20px"}}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart1.jpg)"}}>
                    <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data9.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>{data9.death}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart2.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data8.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data8.death}</Typography>
            </Paper>
        </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart3.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data7.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data7.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart4.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data6.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data6.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart3.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data5.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data5.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart1.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data4.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data4.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart3.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data3.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data3.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart4.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data2.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data2.death}</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart2.jpg)"}}>
          <Typography variant="h4" style={{color:"white",fontWeight:"bold"}}>{data1.age}</Typography>
                    <Typography variant="h5" style={{color:"white",fontWeight:"bold"}}>Death Rate: {data1.death}</Typography>
            </Paper>
        </Grid>
        
      </Grid>
  </center>
        </Typography>
      </Container>
      <FooterPage />
    </React.Fragment>
  );
}
