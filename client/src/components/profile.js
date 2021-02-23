import React,{useEffect,useState,useContext} from 'react';

import Main2 from "./main2"
import {Context} from "../App"
import ButtonAppBar from "./Navbar2"
import {Grid,Box,Paper,TextField,Button,Container,Typography, useScrollTrigger} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import FooterPage from "./footer"
import { useRouteMatch,useHistory} from "react-router-dom";
function Profile() {

  const {user,setuser,seturl}=useContext(Context)
  seturl(useRouteMatch().url)
const history=useHistory();
    const [signup1, setsignup1] = useState({
        name:user.name,
        email:user.email,
        password:user.password,
        number:user.number,
    })
  //console.log(signup1.password)

    const change=(e)=>{
      
      setsignup1({
        ...signup1,
        [e.target.name]:e.target.value
      })
    }

    const submit=(e)=>{
e.preventDefault();
   axios.post("https://coronaapp19.herokuapp.com/updateuser",[signup1,user.id]).then((res)=>{
    //console.log(res.data)
    setuser({
      email: res.data.email,
id: res.data.id,
number: res.data.number,
name: res.data.name,
password: res.data.password,
token: res.data.token,
login:true,
    })
   localStorage.setItem("Ltoken",res.data)
   history.push("/")
   window.location.reload()
   
   })
    }
 //  

    return (
        <div>
            <ButtonAppBar/>
            <Main2 image="h55-min.jpg" text="Profile" />
      
            <Container maxWidth="sm">
        <Typography component="div" style={{display:"flex",alignItems:"center", height: '64vh' }}>

        <form  
        onSubmit={submit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="FullName"
                autoFocus
              value={signup1.name}
               onChange={change}
              />
            </Grid>
          
            <Grid item xs={12} sm={7}>
              <TextField
                variant="outlined"
                required
                disabled
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={signup1.email}
               onChange={change}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="number"
                label="Number"
                type="number"
                id="number"
                autoComplete="current-password"
                value={signup1.number}
               onChange={change}
              />
              
            </Grid>

            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={signup1.password}
               onChange={change}
                autoComplete="current-password"
              />
              
            </Grid>

            
            
          </Grid>
          <Button
          style={{marginBottom:"10px",marginTop:"10px"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Update
          </Button>
         
        </form>
        </Typography>
      </Container>
      <br/>
      <FooterPage/>
        </div>
    )
}

export default Profile
