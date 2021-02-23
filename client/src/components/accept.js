import React,{useEffect,useState,useContext} from 'react';


import Main2 from "./main2"
import {Context} from "../App"
import ButtonAppBar from "./Navbar2"
import {Grid,Box,Paper,Container,Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import FooterPage from "./footer"
import CircularProgress from '@material-ui/core/CircularProgress';

import { faPills,faDisease,faVirusSlash,faProceduresfaViruses,faViruses,faHeadSideMask,faStethoscope,faVirus,faHospitalUser,faShieldVirus,faClinicMedical,faProcedures } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter,Route,Link,useHistory,useRouteMatch} from "react-router-dom"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Accept() {
    const {user,setuser,seturl}=useContext(Context)
    seturl(useRouteMatch().url)


const [open, setopen] = useState(false)

const [msg, setmsg] = useState("")
    const history=useHistory();

    if(localStorage.getItem("Ltoken")==""){
        history.push("/")
    }

const [data, setdata] = useState(["array"])
    useEffect(()=>{
        axios.get("https://coronaapp19.herokuapp.com/useracceptrequestview").then((res)=>{
        setdata(res.data)
            })
    },[])


 

    //console.log(newarry)

    const dellete= async(e)=>{
//console.log(e)
  await axios.post("https://coronaapp19.herokuapp.com/deleteuserrequest",{id:e}).then((res)=>{
setmsg(res.data.msg)
setopen(true);
})

await axios.get("https://coronaapp19.herokuapp.com/useracceptrequestview").then((res)=>{
        setdata(res.data)
            })
    }


    const newarry=data.filter((i)=>{
        return i.useremail==user.email
        })

        const handleClick = () => {
            setopen(false);
          };
    console.log(data)
    return (
        <>
<ButtonAppBar/>
     <Main2 image="pakistan1.jpg" text="Accepted Requests" />
     <br/>
     <Container style={{minHeight:"60vh"}}>

         {(()=>{

   if(data[0]=="array"){
     return(
<Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
              <CircularProgress  />
              </Grid>
     )
     
   }
   else if(data.length==0 ){
     return(
         <>

           <Grid item xs={12}>
    <Typography variant="h6">blood and Food Request</Typography>
    </Grid>
 <Paper style={{padding:"20px"}}>
        <Typography variant="body1" align="center">No Request has been Accepted</Typography>
         </Paper>
</>
     )
      
   }
   else{

    return(
        <Grid container spacing={2 }>

        {data.map((i)=>
        
        <Grid item xs={12} sm={6} md={4}>
            <Paper style={{padding:"10px"}}>
                
        <Typography variant="h5"><b>{i.name}</b></Typography><br/>
                <Typography variant="body2" component="p"><b>Email:</b>{i.donoremail}</Typography>
                <Typography variant="body2" component="p"><b>Phone:</b>{i.number}</Typography>
                {i.select==undefined?null:
                <Typography variant="body2" component="p"><b>Selected Food:</b>{i.select}</Typography>
                }
                
                <Typography variant="body2" component="p"><b>Address:</b>{i.address}</Typography>
                <Typography variant="body2" component="p"><b>Message:</b>{i.massage}</Typography>
                <br/>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button onClick={()=>dellete(i._id)} style={{backgroundColor:"red",color:"white"}}>Delete</Button>
                </div>
               
            </Paper>
        </Grid>
    
        )}
     
  
        </Grid>  

    )
    

   }
 })()}
         {/* {data[0]=="array"?

         <Paper style={{padding:"20px"}}>
        <Typography variant="body1" align="center">No Request has been Accepted</Typography>
         </Paper>:
     <Grid container spacing={2 }>

         {data.map((i)=>
         
         <Grid item xs={12} sm={6} md={4}>
             <Paper style={{padding:"10px"}}>
                 
         <Typography variant="h5"><b>{i.name}</b></Typography><br/>
                 <Typography variant="body2" component="p"><b>Email:</b>{i.donoremail}</Typography>
                 <Typography variant="body2" component="p"><b>Phone:</b>{i.number}</Typography>
                 <Typography variant="body2" component="p"><b>Address:</b>{i.address}</Typography>
                 <Typography variant="body2" component="p"><b>Message:</b>{i.massage}</Typography>
                 <br/>
                 <div style={{display:"flex",justifyContent:"flex-end"}}>
                 <Button onClick={()=>dellete(i._id)} style={{backgroundColor:"red",color:"white"}}>Delete</Button>
                 </div>
                
             </Paper>
         </Grid>
     
         )}
      
   
         </Grid>   
            } */}
         </Container>    


         <Snackbar open={open} autoHideDuration={3000} onClose={handleClick} >
      <MuiAlert  severity="error" elevation={6} variant="filled">
    {msg}
    </MuiAlert>


</Snackbar>     
<br/> 
<FooterPage/>
        </>
    )
}

export default Accept
