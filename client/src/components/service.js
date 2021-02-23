import React,{useContext} from 'react';
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Paper} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import Main2 from "./main2"
import Title from "./title"
export default function Service() {
  const {user,setuser,seturl}=useContext(Context)
  seturl(useRouteMatch().url)
  Title("Terms and Conditions")
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Main2 image="h10-min.jpg" text="Terms and Conditions"/>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ minheight: '100vh' }}>
        <Typography variant="h1" component="div" style={{minheight: '100vh' }}>
          <Paper variant="outlined" style={{marginBottom:"20px",marginTop:"20px",padding:"20px"}}>
          

<Typography variant="h5" style={{fontWeight:"bold"}}>1. Terms</Typography>
<Typography variant="body2">By accessing this Website, accessible from www.google.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law. These Terms of Service has been created with the help of the.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>2. Use License</Typography>
<Typography variant="body2">Permission is granted to temporarily download one copy of the materials on CovidInfo's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</Typography>
<Typography variant="body2">
<ul style={{listStylePosition:"inside"}}>
    <li>modify or copy the materials;</li>
    <li>use the materials for any commercial purpose or for any public display;</li>
    <li>attempt to reverse engineer any software contained on CovidInfo's Website;</li>
    <li>remove any copyright or other proprietary notations from the materials; or</li>
    <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
</ul>
</Typography>
<Typography variant="body2">This will let SoftTech to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>3. Disclaimer</Typography>

<Typography variant="body2">All the materials onCovidInfo's Website are provided "as is". CovidInfo's makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, CovidInfo's does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>4. Limitations</Typography>

<Typography variant="body2">CovidInfo's or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on CovidInfo's Website, even if SoftTech or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>5. Revisions and Errata</Typography>

<Typography variant="body2">The materials appearing on CovidInfo's Website may include technical, typographical, or photographic errors. CovidInfo's will not promise that any of the materials in this Website are accurate, complete, or current. CovidInfo's may change the materials contained on its Website at any time without notice. CovidInfo's does not make any commitment to update the materials.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>6. Links</Typography>

<Typography variant="body2">SoftTech has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by SoftTech of the site. The use of any linked website is at the user’s own risk.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>7. Site Terms of Use Modifications</Typography>

<Typography variant="body2">CovidInfo's may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>8. Governing Law</Typography>

<Typography variant="body2">Any claim related toCovidInfo's Website shall be governed by the laws of pk without regards to its conflict of law provisions.</Typography>
          </Paper>
        </Typography>
        </Typography>
      </Container>
      <FooterPage/>
    </React.Fragment>
  );
}
