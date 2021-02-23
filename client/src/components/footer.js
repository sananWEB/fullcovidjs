import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles,Grid,Paper} from '@material-ui/core';
import FD from "./privacy"
import {BrowserRouter,Route,Link} from "react-router-dom"
export default function SimpleContainer(props) {

    const useStyles=makeStyles({
        container:{
            backgroundColor:"#3D4849",minheight: '35vh',
        },
        paper:{
        height:"30vh",
        borderRadius:"0px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
                flexDirection:"column",
                backgroundColor:"transparent" ,
                //border:"1px solid black",
                color:"white"

           },
           paper1:{
            height:"30vh",
            borderRadius:"0px",
            display:"flex",
           //alignItems:"center",
           paddingLeft:"30px",
            justifyContent:"center",
                    flexDirection:"column",
                    backgroundColor:"transparent" ,
                    //border:"1px solid black",
                    color:"white"
    
               }
    }
    )

    const classes=useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters >
        <Typography component="div" className={classes.container}>
           <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper} elevation={0}>
            <div style={{display:"flex"}}>
          <img 
      src={process.env.PUBLIC_URL+"/logo.png"}
      alt="new"
      //style={{width:"48px"}}
      width="40" height="40"
      />
              <Typography variant="h4" style={{fontWeight:"bold",paddingTop:"3px"}}>&nbsp;CovidInfo</Typography>
              </div>
              <Typography>Develop By :
              ZiaKhan
  </Typography>
              <Typography>powered By:
              Beta byte technology
</Typography>
              </Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={4} lg={4}>
          <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" style={{fontWeight:"bold"}}>Company</Typography>
          <Link to="privacy"
              style={{color:"white",textDecoration: "none"}}>
             Privacy Policy
  </Link>
 <Link to="service"
              style={{color:"white",textDecoration: "none"}}>
              Terms and Conditions
  </Link>
              
              </Paper>
        </Grid>
        <Grid item xs={12}  sm={12} md={5} lg={5}>
          <Paper className={classes.paper1} elevation={0}>
           
          <Typography>
          <b>Address:-</b>Office 22, 3rd floor Libarty mall, takhal University road Peshawar, Khyber Pakhtunkhwa, Pakistan-25000
          </Typography>
          <Typography><b>Phone:-  </b><a style={{color:"white" ,textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=923149277816&text=Hello">03149277816</a></Typography>
          <Typography><b>Email:-</b> <a style={{color:"white" ,textDecoration:"none"}} href="mailto:ziakhan17@gmail.com">ziakhan17@gmail.com</a> </Typography>
               </Paper>
        </Grid>
        </Grid>
  <Typography style={{textAlign:"center", backgroundColor:"#17c0eb",color:"white",fontSize:"12px",padding:"3px"}}>&copy;Copyright Beta byte technology</Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
