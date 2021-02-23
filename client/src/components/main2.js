import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles} from '@material-ui/core';



export default function Main2(props) {
    const useStyles=makeStyles({
        container:{
        backgroundImage:"url("+process.env.PUBLIC_URL+"/"+props.image+")",
        backgroundPosition:"center",
        backgroundSize:" cover",
        backgroundRepeat:"no-repeat",
             height: '35vh' ,
             display:"flex",
             alignItems:"center",
             justifyContent:"center",
             flexDirection:"column",
        },
        text:{
            fontWeight:"bold",
            color:"#35baf6",
        }
    })
    const classes=useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters>
        <Typography component="div" className={classes.container}>
          <center>
  <Typography variant="h3" className={classes.text}>{props.text}</Typography>
  </center>
        </Typography>
      </Container>
      <hr/>
    </React.Fragment>
  );
}
