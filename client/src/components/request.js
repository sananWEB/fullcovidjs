import React,{useContext,useState} from 'react'
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
import Main2 from "./main2"
import ButtonAppBar from "./Navbar2"
import {Container,Typography,TextField,FormControlLabel,Checkbox,Grid,Button} from '@material-ui/core';
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom"
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FooterPage from "./footer"


function Request() {

  const {seturl}=useContext(Context)
seturl(useRouteMatch().url)

    const [open, setopen] = useState(false)
    const [user, setuser] = useState({
        name:"",
        email:"",
        address:"",
        number:"",
        massage:"",
    })
   
    const [msg, setmsg] = useState("")
    const change=(e)=>{
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const submit=(e)=>{
        e.preventDefault();
       // console.log(user)
       axios.post("https://coronaapp19.herokuapp.com/request",user).then((res)=>{
           setmsg(res.data);
           setopen(true);

           setuser({
            name:"",
            email:"",
            address:"",
            number:"",
            massage:"",
        })
        })
    }

    const handleClick = () => {
        setopen(false);
      };
        
    return (
        <>
        <ButtonAppBar/>
    <Main2 image="signin.jpg" text="Request for Plasma" />
<br/>
    <Container maxWidth="md">
        <Typography component="div" style={{display:"flex",alignItems:"center", backgroundColor: 'transparent', height: 'auto' }}>

    
        <form  
       onSubmit={submit}
       
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}  >
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              value={user.name}
               onChange={change}
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="number"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Number"
                name="number"
                autoComplete="number"
              value={user.password}
                onChange={change}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="current-password"
               value={user.email}
              onChange={change}
              />
              
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                autoComplete="current-password"
                value={user.address}
                onChange={change}
              />
              
            </Grid>


        

            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                rows="4"
                multiline={true} 
                fullWidth
              value={user.massage}
               onChange={change}
                name="massage"
                label="Massage"
                type="text"
                id="Massage"
                autoComplete="current-password"
              />
              
            </Grid>
            
          </Grid>
          <Button
          style={{marginBottom:"10px",marginTop:"10px",float:"right"}}
            type="submit"
            
            variant="contained"
            color="primary"
            
          >
            Request
          </Button>
        
        </form>


        </Typography>
      </Container>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClick} >

        {msg==""?
        <MuiAlert  severity="error" elevation={6} variant="filled">
        {msg}
        </MuiAlert>:
          <MuiAlert  severity="success" elevation={6} variant="filled">
          {msg}
          </MuiAlert>
      }
    
      </Snackbar>
      <br/>
        <FooterPage/>
        </>
    )
}

export default Request
