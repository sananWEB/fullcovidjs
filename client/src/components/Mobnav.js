import React,{useContext} from 'react';
import {Context} from "../App"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import Room from '@material-ui/icons/Room';
import Block from '@material-ui/icons/Block';
import VpnKey from '@material-ui/icons/VpnKey';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex:1,
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const {user,setuser}=useContext(Context)

  //console.log(user)


  const history=useHistory();
  const logout=()=>{
    localStorage.setItem("Ltoken","");
    
    setuser({
     email:"",
 id:"",
 number:"",
 name:"",
 password:"",
 token:"",
 login:false,
   })

   history.push("/")
 }
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<Home/>} />
      <BottomNavigationAction label="Pakistan" component={Link} to="pakistan" icon={<Room/>} />
      <BottomNavigationAction label="Lockdown" component={Link} to="lockdown" icon={<Block />} />

      {user.login==true?<BottomNavigationAction onClick={logout} label="Logout" icon={<ExitToApp />} />:<BottomNavigationAction label="Signin" component={Link} to="signin" icon={<VpnKey />} />}
      
    </BottomNavigation>
  );
}
