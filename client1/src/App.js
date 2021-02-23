import React,{createContext,useState, useEffect} from 'react'
import { createMuiTheme,ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import "./App.css"
import Signin from "./component/signin"
import Main from "./component/main"
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import axios from "axios"
let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb74d",
      main: '#ef6c00',
      dark: '#e65100',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9e9e9e',
      main: '#424242',
      dark: '#212121',
      contrastText: '#fff',
    },

    action:{
      hover:"#ef6c00",
      hoverOpacity:0
    }
  },
 
  shape:"0px",
  shadows:["none"],
  
});



theme = responsiveFontSizes(theme);

export const UserContext=createContext(null)
function App() {
const [user, setuser] = useState({
  id:"",
  username:"",
  password:"",
  token:"",
  email:"",
  image:"",
 login:false
})

console.log(user)
useEffect(()=>{

  const token=localStorage.getItem("Ltoken");
if(!token){
  localStorage.setItem("Ltoken","")
}

if(token){

axios.get("https://coronaapp19.herokuapp.com/userdata",{headers:{token:token}}).then(res=>{
setuser({

  id:res.data.id,
  username:res.data.username,
  token:token,
  password:res.data.password,
  email:res.data.email,
  image:res.data.image,
  login:res.data.login
})
})
}
},[])

  return (
    
    <>
    <ThemeProvider theme={theme}>
    <UserContext.Provider value={{user,setuser}}>
      <Router>
        <Switch>

          <Route exact path="/">
      <Signin/>
      </Route>

         <Route path="/:id">
      <Main/>
      </Route>

      </Switch>
      </Router>
      </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
