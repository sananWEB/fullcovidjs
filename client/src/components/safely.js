
import React,{useContext} from 'react';
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Grid,Paper} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import Main2 from "./main2"
import Title from "./title"

export default function Safely() {
  const {user,setuser,seturl}=useContext(Context)
  seturl(useRouteMatch().url)
  Title("Prevention")
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Main2 image="h44-min.jpg" text="Prevention Tips"/>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ minheight: '100vh' }}>
    
    <Typography variant="body1" style={{marginBottom:"20px",marginTop:"20px",listStylePosition:"inside"}}>
    <Grid container spacing={2}>
<Grid item>
      <Paper variant="outlined"  style={{padding:"20px"}}>
<li>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</li>
</Paper>
</Grid>

<Grid item >
<Paper variant="outlined"  style={{padding:"20px"}} >
<li>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</li>
</Paper>
</Grid>

<Grid item >
<Paper variant="outlined"  style={{padding:"20px"}}>
<li>Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</li>
</Paper>
</Grid>

<Grid item >
<Paper variant="outlined"  style={{padding:"20px"}}>
<li>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>
</Paper>
</Grid>

<Grid item >
<Paper variant="outlined"  style={{padding:"20px"}}>
<li>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.
</li>
</Paper>
</Grid>
<Grid item>
<Paper variant="outlined" style={{padding:"20px"}}>
<li>If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
</li>
</Paper>
</Grid>


<Grid item >
<Paper variant="outlined" style={{padding:"20px"}}>
<li>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</li>
</Paper>

</Grid>

</Grid>
</Typography>
        </Typography>
        
      </Container>
      {/* <FooterPage/> */}
    </React.Fragment>
  );
}
