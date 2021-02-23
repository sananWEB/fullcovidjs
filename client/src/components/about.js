import React,{useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Paper,Grid} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import Main2 from "./main2"
import CCard from "./card"
import Title from "./title"
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
  
export default function About() {
  const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)
Title("About");
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Main2 image="h55-min.jpg" text="ABOUT" />
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{marginTop:"20px",marginBottom:"20px", minheight: '100vh' }}>
        <Paper variant="outlined" style={{marginTop:"30px",marginBottom:"30px",padding:"20px"}}>
        <Typography variant="body1">CovidJS.com is an online corona tracker which is run by SOFTTECT IT Company based on Peshawar Pakistan.
        <br/>
<br/>
It goes about as a gateway for the general population to monitor the most recent news improvement about the COVID-19, close by gathering information for additional examination. All the substance are handpicked, sifted, and curated by volunteers to our best degree to guarantee that sources are solid with insignificant scams and phony news, in the best advantage of the general population. Common Language Processing (NLP) is utilized to investigate slanting substance and distinguish important themes over different news sources and online networking stages preceding being checked by our group. 

<br/>
<br/>
Our group of information researchers use OSEMN system to gather, clean, investigate, model, and run their own examination. For simplicity of open comprehension, it is introduced utilizing realistic representations and dashboards. Through the information got, we would like to assemble AI models very soon. 
<br/>
<br/>
We were motivated by the Coronavirus Outbreak Map by John Hopkins University that was exceptionally educational. We likewise perceived the trouble to accumulate information for inside and out examination through different wellsprings of dispersed information on various news entryways just as in various dialects. 
We aim to use technology and make information more accessible, gather talented people all around the world to win the fight!
</Typography>
<hr style={{margin:"20px"}}/>
<center>
<Typography variant="h4" style={{textAlign:"center",fontWeight:"bold",marginBottom:"20px",color:"#03A9F4"}}>Our Team</Typography>

<Grid container spacing={5}>
  <Grid item xs={12} sm={6} md={3}>
<CCard name="Shaizad Khan" title=" ReactNative Developer" pic="./p1.jpg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Israj khan" title="ReactNative Developer" pic="./p2.jpg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Muhammad Sanan" title="JavaScript Developer" pic="./p3.jpeg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Muhammad Rahim" title="ElectronJS Developer" pic="./p4.jpg"/>
</Grid>


<Grid item xs={12} sm={6} md={3}>
<CCard name="Mustafa Haider" title="PHP Developer" pic="./p6.jpg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Muhammad Daniyal" title="C# Developer" pic="./p5.jpeg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Tahir Khan" title="Wordpress Developer" pic="./p7.jpg"/>
</Grid>

<Grid item xs={12} sm={6} md={3}>
<CCard name="Muzamill Idress" title="SEO Expert" pic="./p8.jpg"/>
</Grid>
</Grid>
</center>
</Paper>
        </Typography>
        
      </Container>
      <FooterPage />
    </React.Fragment>
  );
}
