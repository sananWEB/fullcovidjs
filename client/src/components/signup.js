import React,{useEffect,useContext,useState} from 'react';
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
  
import Main2 from "./main2"
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom"
import ButtonAppBar from "./Navbar2"
import {Container,Typography,TextField,FormControlLabel,Checkbox,Grid,Button} from '@material-ui/core';
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FooterPage from "./footer"

function Signup() {

  const {user,setuser,seturl}=useContext(Context)
seturl(useRouteMatch().url)

  const [signup1, setsignup1] = useState({
    name:"",
    email:"",
    password:"",
    number:"",
    cpassword:""
  })
   const [msg, setmsg] = useState(null)
   const [open, setopen] = useState(false)
  const change=(e)=>{
setsignup1({
  ...signup1,
  [e.target.name]:e.target.value,
})
  }
  const history=useHistory();
const submit=(e)=>{
e.preventDefault();

if(signup1.password!=signup1.cpassword){
  
    setmsg("Password Is Not Match");
    setopen(true)
  
}
else{

  
// console.log("password is equal")
//console.log(signup1)

axios.post("https://coronaapp19.herokuapp.com/donors",signup1).then((res)=>{
  setmsg(res.data);
  setopen(true)
  if(res.data=="Registration Success"){
    history.push("/signin")
  }

})
}

}

const handleClick = () => {
  setopen(false);
};
  
    return (
        <>
         <ButtonAppBar/>
     <Main2 image="signup.jpg" text="SIGN UP" />
     <Container maxWidth="sm">
        <Typography component="div" style={{  backgroundColor: 'transparent', height: '70vh',display:"flex",alignItems:"center"  }}>

        <form  onSubmit={submit}>
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
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                value={signup1.name}
                onChange={change}
              />
            </Grid>
          
            <Grid item xs={12} sm={7}>
              <TextField
                variant="outlined"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={signup1.number}
                onChange={change}
              />
              
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputLabelProps={{
                  shrink: true,
                }}
                value={signup1.password}
                onChange={change}
                autoComplete="current-password"
              />
              
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={signup1.cpassword}
                onChange={change}
                InputLabelProps={{
                  shrink: true,
                }}
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="signin" href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>


        </Typography>
      </Container>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClick} >
        {msg=="Registration Success"?
        <MuiAlert  severity="success" elevation={6} variant="filled">
        {msg}
        </MuiAlert>:
          <MuiAlert  severity="error" elevation={6} variant="filled">
          {msg}
          </MuiAlert>
      }
    
      </Snackbar>
      <br/>
        <FooterPage/>
        </>
    )
}

export default Signup



