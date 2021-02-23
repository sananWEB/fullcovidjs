import React,{Fragment,useEffect,useState,createContext} from 'react';
import ButtonAppBar from "./components/Navbar2";
import { Button ,Hidden} from '@material-ui/core';
import { createMuiTheme,ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import {lightBlue,blue} from '@material-ui/core/colors/purple';
import {BrowserRouter,Route,Link,useHistory,useRouteMatch,Redirect,useParams,useLocation, Switch} from "react-router-dom"
import "./App.css"
import axios from "axios"
import Profile from "./components/profile"
import MyCarousel from "./components/Slider"
import Worldwide from "./components/worldwide"
import Chart from "./components/Chart"
import Graph from "./components/graph"
import Gender from "./components/gender"
import Who from "./components/who"
import FooterPage from "./components/footer"
import Symptoms from "./components/symptoms"
import Agegroup from "./components/agegroup"
import About from "./components/about"
import Pakistan from "./components/pakistan"
import Safely from "./components/safely"
import Article from "./components/article"
import { Zoom } from 'react-preloaders';
import { Scrollbars } from 'react-custom-scrollbars';
import Privacy from "./components/privacy"
import Service from "./components/service"
import Lockdown from "./components/lockdown"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Signin from "./components/signin"
import Signup from "./components/signup"
import Request from "./components/request"
import Requesttable from "./components/requesttable"
import Helmet from "react-helmet"
import Accept from "./components/accept"
import EError from "./components/error"
import Mobnav from "./components/Mobnav"
import Request2 from "./components/Request2"
//console.log(Urls("pakistan"))
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0276aa',
      main: '#03a9f4',
      dark: '#35baf6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1c54b2',
      main: '#2979ff',
      dark: '#5393ff',
      contrastText: '#fff',
    },
  },
  
});


theme = responsiveFontSizes(theme);

 export const Context=createContext(null)
function App() {
  

  const [user, setuser] = useState({
    id:"",
    name:"",
    number:"",
    password:"",
    token:"",
    email:"",
    login:false
  })

  const [url, seturl] = useState()

    useEffect(()=>{

      const token=localStorage.getItem("Ltoken");
      if(!token){
       localStorage.setItem("Ltoken","")
      }
    
      else{
    
        axios.get("https://coronaapp19.herokuapp.com/userdata",{headers:{token:token}}).then(res=>{
        setuser({
        
          email: res.data.email,
          id: res.data.id,
          number:res.data.number,
          name: res.data.name,
          password: res.data.password,
          token: token,
          login:res.data.login,
        });
        })
        }
    
  
    


    },[])
  

  //  console.log(user)

   
 
  return (

    <BrowserRouter>
    
      <ThemeProvider theme={theme}> 
   
    <Context.Provider value={{user,setuser,seturl}}>
   
    <Mobnav/>
      <Route exact path="/" exact component={ButtonAppBar} />
      <Route exact path="/" exact component={MyCarousel} />
   



  
      <Route exact path="/" exact component={Worldwide} />



      {/* <Route exact path="/" exact component={Graph} /> */}



<Hidden only={[ "xs"]}>
      <Route exact path="/" exact component={Chart} />
      </Hidden>


      {/* <Route exact path="/" exact component={Gender} />



      <Route exact path="/" exact component={Article} /> */}

      <Route exact path="/" exact component={Who} />
      <Route exact path="/" exact component={()=><FooterPage/>}  />
      <Redirect to={url}/>
    
        {/* <Route  path="/agegroup" component={Agegroup}/> */}
        <Route  path="/symptoms" component={Symptoms}/>
        <Route  path="/about" component={About}/>
        <Route  path="/safely" component={Safely}/>
        <Route  path="/service" component={Service}/>
        <Route  path="/privacy" component={Privacy}/>
        <Route  path="/pakistan" component={Pakistan}/>
        <Route  path="/lockdown" component={Lockdown}/>
        <Route  path="/food" component={Request2}/>
        <Route  path="/signin" component={Signin}/>
        <Route  path="/signup" component={Signup}/>
        <Route  path="/request" component={Request}/>
        <Route  path="/requesttable" component={Requesttable}/>
        <Route  path="/accept" component={Accept}/>
        <Route  path="/profile" component={Profile}/>
        
       
        </Context.Provider>
     </ThemeProvider>
   
      </BrowserRouter>
  );
}

export default App;
