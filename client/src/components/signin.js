import React,{useContext,useState} from 'react'
import Main2 from "./main2"
import {Context} from "../App"
import ButtonAppBar from "./Navbar2"
import {Container,Typography,TextField,FormControlLabel,Checkbox,Grid,Button} from '@material-ui/core';
import {BrowserRouter,Route,useRouteMatch,Link,useHistory} from "react-router-dom"
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FooterPage from "./footer"

function Signin() {
         const {user,setuser,seturl}=useContext(Context)
         seturl(useRouteMatch().url)
         //console.log(user)
         const [open, setopen] = useState(false)
         
         const [data, setdata] = useState({
           email:"",
           password:""

         })

         const [msg, setmsg] = useState("")

const change=(e)=>{
      setdata({
        ...data,
        [e.target.name]:e.target.value,
      })
}
const history=useHistory()

const submit=(e)=>{
  e.preventDefault()
  axios.post("https://coronaapp19.herokuapp.com/signinn",data).then(res=>{

    if(res.data.token==("" || undefined)){
      setmsg(res.data.msg);
      setopen(true);
    }
    else{
      setuser({
        email: res.data.email,
  id: res.data.id,
  number: res.data.number,
  name: res.data.name,
  password: res.data.password,
  token: res.data.token,
  login:true,
      })
   // console.log(res.data);
   setmsg(res.data.msg);  setopen(true);
    localStorage.setItem("Ltoken",res.data.token)
    history.push("/")
    }

    
})
}

const handleClick = () => {
  setopen(false);
};

    return (
        <>
        <ButtonAppBar/>
    <Main2 image="signin.jpg" text="SIGN IN" />
    <Container maxWidth="sm">
       <Typography component="div" style={{ backgroundColor: 'transparent', height: '60vh',display:"flex",alignItems:"center" }}>

       <form 
       onSubmit={submit}
       >
         <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           id="email"
           value={data.email}
           InputLabelProps={{
            shrink: true,
          }}
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus
           onChange={change}
         />
         <TextField
         onChange={change}
           variant="outlined"
           margin="normal"
           required
           fullWidth
           InputLabelProps={{
            shrink: true,
          }}
           name="password"
           label="Password"
           value={data.password}
           type="password"
           id="password"
           autoComplete="current-password"
         />
         <FormControlLabel
           control={<Checkbox value="remember" color="primary" />}
           label="Remember me"
         />
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
          // className={classes.submit}
         >
           Sign In
         </Button>
         <Grid container>
          
          
           <Grid item>
             <Link  to="signup" variant="body2">
               {"Don't have an account? Sign Up"}
             </Link>
           </Grid>
         </Grid>
       </form>


       </Typography>
     </Container>


     <Snackbar open={open} autoHideDuration={3000} onClose={handleClick} >


{(()=>{

if(msg=="Incorrent Password"){
  return(
    <MuiAlert  severity="error" elevation={6} variant="filled">
    {msg}
    </MuiAlert>
  )

}
else if(msg=="Enter Email is Invalid"){
  return(
    <MuiAlert  severity="error" elevation={6} variant="filled">
    {msg}
    </MuiAlert>
  )
}

else{
return(
  <MuiAlert  severity="success" elevation={6} variant="filled">
{msg}
</MuiAlert>
)
}
})()}

 



</Snackbar>
<br/>
        <FooterPage/>
       </>
    )
}

export default Signin
