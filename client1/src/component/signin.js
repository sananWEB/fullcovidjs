import React,{useContext, useEffect,useState}from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import axios from "axios"
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {UserContext} from "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
     margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

  const {user,setuser}=useContext(UserContext)
const [setuserdata, setsetuserdata] = useState({
  email:"",
  password:"",
})

const change=(e)=>{

  setsetuserdata({
    ...setuserdata,
    [e.target.name]:e.target.value
  })
  
}

const history=useHistory();
const [msg, setmsg] = useState(null)
const submit=(e)=>{
  e.preventDefault();
 
  axios.post("https://coronaapp19.herokuapp.com/signin",setuserdata).then(res=>{
    //console.log(res.data);

  if(res.data.msg){
    setmsg(res.data.msg)
  }
  if(res.data.token){
    localStorage.setItem("Ltoken",res.data.token)
  //  console.log(res.data.token)
    setuser({
      id:res.data.id,
      username:res.data.username,
      token:res.data.token,
      email:res.data.email,
      password:res.data.password,
      image:res.data.image,
      login:true
    })
    history.push("/admin/dashboard")
  };
})
}

if(user.token){
  history.push("/admin/dashboard")
}


  useEffect(()=>{
      const func=()=>{
      //  console.log(user)
      }
       func();
  },[])
   
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
     <CssBaseline />
      <div className={classes.paper}>
        
         <FontAwesomeIcon icon={faUserCircle} color="#424242" size="6x"/>
      
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={submit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={setuserdata.email}
            onChange={change}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          value={setuserdata.password}
            variant="outlined"
            onChange={change}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
          disableRipple={true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        
        </form>
        <Box width="100%">
  {msg?<MuiAlert variant="filled" severity="error">{msg}</MuiAlert>:null}
        </Box>
      </div>
      <Box mt={10}>
        <Copyright />
      </Box>
    </Container>
  );
}