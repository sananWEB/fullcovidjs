import React,{useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Paper,Grid} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import Main2 from "./main2"
import Title from "./title"
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
export default function Symptoms() {

  const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)
  Title("Symptoms")
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Main2 image="h77-min.jpg" text="SYMPTOMS" />
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{minheight: '100vh' }}>
        <Paper variant="outlined" style={{marginTop:"30px",marginBottom:"30px",padding:"20px"}}>
  <Typography variant="h6" style={{color:"#35baf6"}}>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</Typography>
  <Typography variant="body1" style={{listStylePosition:"inside"}}>
  <br/><b>Most common symptoms:</b><br/>
<li>fever</li>
<li>dry cough</li>
<li>tiredness</li>
  </Typography>
  <Typography variant="body1">
  <br/>
  <b>Less common symptoms:</b>
    <ul style={{listStylePosition:"inside"}}>
<li>aches and pains</li>
<li>sore throat</li>
<li>diarrhoea</li>
<li>conjunctivitis</li>
<li>headache</li>
<li>loss of taste or smell</li>
<li> a rash on skin, or discolouration of fingers or toes</li>
</ul>
<br/>
<b>Serious symptoms:</b>
<ul style={{listStylePosition:"inside"}}>
<li>difficulty breathing or shortness of breath</li>
<li>chest pain or pressure</li>
<li>loss of speech or movement</li>
</ul>
  </Typography>
                  </Paper>
        </Typography>
        
      </Container>
      <FooterPage />
    </React.Fragment>
  );
}
