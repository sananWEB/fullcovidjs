import React,{useContext,useEffect,useState} from 'react'
import Main2 from "./main2"
import {Context} from "../App"
import {useRouteMatch} from "react-router-dom"
  
import ButtonAppBar from "./Navbar2"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Container,Paper,Typography,TextField,TableRow,TableCell,Table,TableHead,FormControlLabel,Checkbox,Grid,Card,CardActions,CardContent,TableBody,Button} from '@material-ui/core';
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom"
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FooterPage from "./footer"


  
  function Requesttable() {

const [state, setstate] = useState("")
const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)
  const [msg, setmsg] = useState("")
  const [open, setopen] = useState(false)
    useEffect(()=>{

      axios.get("https://coronaapp19.herokuapp.com/getrequest").then((res)=>{setstate(res.data);//console.log(res.data)
    })
    },[])

    const aaccept= async(e)=>{
              // console.log(e)

       await axios.post("https://coronaapp19.herokuapp.com/useracceptrequest",{id:e,email:user.email}).then(res=>{setmsg(res.data.msg);
       setopen(true);
      })

     await axios.get("https://coronaapp19.herokuapp.com/getrequest").then((res)=>{setstate(res.data);//console.log(res.data)
    })
      
    }

    const handleClick = () => {
      setopen(false);
    };
    
    console.log(state)
   // console.log(typeof(state))


         const [food, setfood] = useState([])
   
   useEffect(()=>{
    axios.get("https://coronaapp19.herokuapp.com/getfood").then(res=>{setfood(res.data)})
  },[])


  const aaccept2=async(id)=>{
    await axios.post("https://coronaapp19.herokuapp.com/useracceptrequest2",{id:id,email:user.email}).then(res=>{setmsg(res.data.msg);
    // setopen(true);
    setopen(true);
   })

   
   await axios.get("https://coronaapp19.herokuapp.com/getfood").then(res=>{setfood(res.data)})
    console.log(id)
  }
    return (
        <>
       <ButtonAppBar/>
       <Main2 image="bloodtable.jpg" text="Request cards" />

       <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
          <br/>


 {(()=>{

   if(typeof(state)=="string"){
     return(
<Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
              <CircularProgress  />
              </Grid>
     )
     
   }
   else if(typeof(state)=="object" && state.length==0){
     return(
       <>
      <Typography variant="h6">Blood Request</Typography><br/>
<Paper style={{padding:"20px"}}>
        <Typography variant="body1" align="center">No Request for Blood</Typography>
         </Paper>
</>
     )
      
   }
   else{

    return(
      <>
      <Grid container spacing={2}>
      <Grid item xs={12}>
    <Typography variant="h6">Food Request</Typography>
    </Grid>
      {state.map((i)=>

<Grid item xs={12} sm={6} md={4} lg={3}>
             
             <Card>
       <CardContent>
         <Typography variant="h5"  gutterBottom>
      {i.name}
         </Typography>
 
      <Typography variant="body2" component="p"><b>PHONE: </b>{i.number}</Typography>
      <Typography variant="body2" component="p"><b>EMAIL: </b>{i.email}</Typography>
      <Typography variant="body2" component="p"><b>ADDRESS: </b>{i.address}</Typography>
         <Typography variant="body2" component="p">
         <b>MASSAGE: </b>
         {i.massage} 

         </Typography>
       </CardContent>
       <CardActions style={{display:"flex",justifyContent:"flex-end"}}>
       { user.login==false?null:
         <Button onClick={()=>aaccept(i._id)} variant="contained" style={{backgroundColor:"green",color:"white"}} size="small" >Accept</Button>
       }
       </CardActions>
     </Card>
 
             </Grid>
     )}
           
         </Grid>
</>
    )
    

   }
 })()}
<br/>
{food.length==0?

 <Grid container >
   <Grid item xs={12}>
     <Typography variant="h5">Food Request</Typography><br/>
     <Paper style={{padding:"20px"}}>
     <Typography variant="body1" align="center">No Request For Food</Typography>
     </Paper>
   </Grid>
 </Grid>
  :
  <Grid container spacing={2}>
    <Grid item xs={12}>
    <Typography variant="h6">Food Request</Typography>
    </Grid>
    {food.map((i)=>
    <Grid item xs={12} sm={6} md={4}>
         <Paper style={{padding:"20px",minHeight:"240px"}}>
           <Typography variant="body1"><b>Name:</b>&nbsp;{i.name}</Typography>
           <Typography variant="body1"><b>Email:</b>&nbsp;{i.email}</Typography>
           <Typography variant="body1"><b>Number:</b>&nbsp;{i.number}</Typography>
           <Typography variant="body1"><b>Seleted Food:</b>&nbsp;{i.select}</Typography>
           <Typography variant="body1"><b>Address:</b>&nbsp;{i.address}</Typography>
           <Typography variant="body1"><b>Massage:</b>&nbsp;{i.massage}</Typography>


           <CardActions style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
       { user.login==false?null:
         <Button onClick={()=>aaccept2(i._id)} variant="contained" style={{backgroundColor:"green",color:"white"}} size="small" >Accept</Button>
       }
       </CardActions>

         </Paper>
    </Grid> 
  )}
  </Grid>
  }           


        </Typography>
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClick} >
      <MuiAlert  severity="success" elevation={6} variant="filled">
    {msg}
    </MuiAlert>


</Snackbar>
<br/>
        <FooterPage/>
        </>
    )
}

export default Requesttable
