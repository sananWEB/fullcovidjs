import React,{useState,useEffect,createRef} from 'react';
import {CssBaseline,Grid,Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios"
export default function Article() {

  const [data, setdata] = useState({})
  const [data3, setdata3] = useState("")
  const [data4, setdata4] = useState("")
  useEffect(()=>{
    axios.get("https://covid19-update-api.herokuapp.com/api/v1/articles/symptoms").then(promise=>{
  //console.log(promise.data.symptoms[3].list)
  setdata3(promise.data.symptoms[2].list.join("---"));
  setdata4(promise.data.symptoms[3].list.join("---"));
      
      setdata({
        data1:promise.data.symptoms[0].title,
        data11:promise.data.symptoms[0].details,
        data2:promise.data.symptoms[1].title,
        data22:promise.data.symptoms[1].details,
        data222:promise.data.symptoms[1].list,
        data333:promise.data.symptoms[2].list,
        data3:promise.data.symptoms[2].title,
        data33:promise.data.symptoms[2].details,
        data4:promise.data.symptoms[3].title,
        data44:promise.data.symptoms[3].details,
        data444:promise.data.symptoms[3].list,
        
      })
      
    
    }).catch(error=>console.log(error))
  },[])
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{maxheight: '100vh' }}>
          <Typography variant="h4" style={{fontWeight:"bold",color:'#35baf6',padding:"20px"}}> 
          <center>
             SYMPTOMS ARTICLE
             </center>
          </Typography>
              <Grid container spacing={3}>
                  <Grid item sm={6}>
                  <Paper variant="outlined" style={{padding:"20px"}}>
  <Typography variant="h6">{data.data1}</Typography>
  <Typography variant="body2">{data.data11}</Typography>
                  </Paper>
                  </Grid>

                  <Grid item sm={6}>
                  <Paper variant="outlined" style={{padding:"20px"}}>
  <Typography variant="h6">{data.data2}</Typography>
  <Typography variant="body2">{data.data22}</Typography>
  <Typography variant="body2">{data.data222}</Typography>
                  </Paper>
                  </Grid>

                  <Grid item sm={6}>
                  <Paper variant="outlined" style={{padding:"20px"}}>
  <Typography variant="h6">{data.data3}</Typography><br/>
  <Typography variant="body2">{data.data33}</Typography><br/>
  <Typography variant="body2">{data3}</Typography>
                  </Paper>
                  </Grid>
 

                  <Grid item sm={6}>
                  <Paper variant="outlined" style={{padding:"20px"}}>
  <Typography variant="h6">{data.data4}</Typography>
  <Typography variant="body2">{data.data44}</Typography><br/>
  <Typography variant="body2">{data4}</Typography>
                  </Paper>
                  </Grid>
                  

              </Grid>
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}
