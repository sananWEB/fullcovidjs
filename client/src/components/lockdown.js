import React,{useEffect,useState,useContext} from 'react';
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
  
import Main2 from "./main2"
import ButtonAppBar from "./Navbar2"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Grid,Box,Paper,Button,Container,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import FooterPage from "./footer"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,

    },
    media: {
      height: 200,
    },
  });
function Lockdown() {

    const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)
    const classes = useStyles();
         const [carddata, setcarddata] = useState("")

    useEffect(()=>{
        axios.get("https://coronaapp19.herokuapp.com/getdata").then((res)=>{
            setcarddata(res.data)
        })
    },[])
console.log(carddata)
    return (
        <>
                   <ButtonAppBar/>
                   <Main2 image="peshawar.jpg" text="LOCKDOWN AREAs IN PESHAWAR" />
                   <br/>
                   <Container style={{minHeight:"100vh"}}>
               <Grid container spacing={2}>
               
              {carddata==""?
              <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
              <CircularProgress  />
              </Grid>
              :
                   carddata.map((i)=>

<Grid item xs={6} sm={6} md={3}>
<Card >
<CardActionArea>
<CardMedia
className={classes.media}
image={`${i.bgimg}`}
title={i.name}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
                   {i.name}
</Typography>

<Typography variant="h6" style={{color:i.lockdown=="Safe"?"#26ae60":"#B83227"}} component="p">

 {i.lockdown}
</Typography>

</CardContent>
</CardActionArea>

</Card>
</Grid>


                   )
                   } 
                   
               </Grid>
                   </Container>
                   <br/>
        <FooterPage/>
        </>
    )
}

export default Lockdown
