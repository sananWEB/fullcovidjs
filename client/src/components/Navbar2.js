
import React,{Component,useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import {AppBar,Menu,MenuItem} from '@material-ui/core';
import {Context} from "../App"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Box} from '@material-ui/core';
import {Container,Hidden} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Title from "./title"
//..................sideBar..................
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Collapse } from 'react-burgers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faBug,faUser,faMobileAlt,faMapMarker,faUserCheck,faLockOpen,faAlignRight,faInfoCircle,faBiohazard,faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
const usStyles = makeStyles({

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  logo:{
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:"20px",
    paddingBottom:"20px",
    }
});

 function TemporaryDrawer() {
  const {user,setuser}=useContext(Context)
  const logout=()=>{
    localStorage.setItem("Ltoken","");
    history.push("/")
    setuser({
      email:"",
id:"",
number:"",
name:"",
password:"",
token:"",
login:false,
    })
 }
const history=useHistory();

  
 //  console.log(user)
  const classes = usStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    open:false,
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      style={{backgroundColor:"#3D4849",color:"white",  height:"100vh",

    }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
      <img width="50px" height="50px" src={process.env.PUBLIC_URL+"/logo.png"}/>
      <Typography variant="h4" className={classes.logo}>CovidInfo</Typography>
      
      </div>
      
 
      <Divider  style={{backgroundColor:"white"}} /><br/>
      { user.login==false?<Box style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
        <Button variant="contained" component={Link} to="/signin">SignIn</Button>
        <Button variant="contained" component={Link} to="/signup">SignUp</Button>
      </Box>:
      <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
      <Button variant="contained" component={Link} to="/profile">Profile</Button>
      <Button onClick={()=>{logout()}} variant="contained">logout</Button>
    </Box>
      }
      
      <List >
        
          <ListItem button key='HOME'>
            <ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faHome} /></ListItemIcon>
            <Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="/">HOME</Link>
          </ListItem>

          { user.login==false?null:
          <ListItem button key='profile'>
          <ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faUser} /></ListItemIcon>
          <Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="/profile">PROFILE</Link>
        </ListItem>
          }
          

          <ListItem button key='pakistan'>
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faMapMarker} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="pakistan">PAKISTAN</Link>
</ListItem>

<ListItem button key="LOCKDOWN">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faLockOpen} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="lockdown">LOCKDOWN</Link>
</ListItem>

<ListItem button key="REQUEST">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faAlignRight} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="requesttable">REQUEST</Link>
</ListItem>
{ user.login==false?null:
<ListItem button key="accept">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faUserCheck} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="accept">ACCEPT REQUEST</Link>
</ListItem>
}
<ListItem button key="REQUEST">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faBiohazard} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="request">BLOOD</Link>
</ListItem>


<ListItem button key="REQUEST">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faPizzaSlice} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="food">FOOD</Link>
</ListItem>

{/* <ListItem button key='Continents'>
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faCropAlt} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="agegroup">AGEGROUP</Link>
</ListItem> */}


<ListItem button key='News'>
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faBug} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="symptoms">SYMPTOMS</Link>
</ListItem>




<ListItem button key="PREVENTION">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faMobileAlt} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="safely">PREVENTION</Link>
</ListItem>

{/* 
<ListItem button key="ABOUT">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faInfoCircle} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="about">ABOUT</Link>
</ListItem> */}

       
      </List>
    </div>
  );

  return (
    /*<Hidden only={['md',"lg","xl"]}>
      </Hidden>*/
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
        
          <Collapse onClick={toggleDrawer(anchor, true)} active={state[anchor]}
           color='#fff'
           width={27}
           lineSpacing={3}
           lineHeight={3}
           borderRadius={9} 
        
          />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    
  );
}
//..................sideBar..................



  

export default function ButtonAppBar() {

  const {user,setuser}=useContext(Context)
      
        const [color1, setcolor1] = useState('transparent')
        const [color2, setcolor2] = useState("#0ABDE3")

    const useStyles = makeStyles((theme) => ({
        root: {
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        },
        appbar:{
          boxShadow:theme.shadows[0],
          backgroundColor:color1,
          
          
         
        },
      
        manu:{
          "& li":{
            display: "inline",
            marginRight: theme.spacing(1),
            fontFamily:"'Poppins', sans-serif",
            fontSize:"17px",
            '@media (max-width:1200px)': {
              fontSize: '14px',
            },
            },
            "& li:hover":{
              display: "inline",
            fontFamily:"'Poppins', sans-serif",
            fontSize:"17px",
                color:color2,
                fontWeight:"bold"
            }

          
        },
        toolbar:{
          display:"flex",
          justifyContent:"space-between",
          
      
        },
        logo:{
          fontWeight:"bold",
          color:color2,
          textDecoration:"none",
          fontSize: '30px',
          '@media (max-width:1200px)': {
            fontSize: '30px',
            
            
          }
          },
          show:{
            display:"none",
            '@media (max-width:900px)': {
              display: "inline"
            }
            
          }
      
      }));    
    let classes = useStyles();

   window.addEventListener("scroll",()=>{
     var   a=window.scrollY;

    // console.log(a)
       if(a>49){
         setcolor1("hsla(199, 98%, 52%, 0.5)");
         setcolor2("white")
       }
       else{
          setcolor1('transparent'); 
          setcolor2("#0ABDE3")
       }
   })

   
Title("Covidinfo")
  
const [anchorEl, setAnchorEl] = React.useState(null);
const [anchorEl1, setAnchorEl1] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClick1 = (event) => {
  setAnchorEl1(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const handleClose1 = () => {
  setAnchorEl1(null);
};
const history=useHistory()
const logout=()=>{
   localStorage.setItem("Ltoken","");
   history.push("/")
   setuser({
    email:"",
id:"",
number:"",
name:"",
password:"",
token:"",
login:false,
  })
}


 
  return (
    <div className={classes.root} >
     <AppBar position="absolute" className={classes.appbar}  > 
        <Toolbar className={classes.toolbar} >
        <div style={{display:"flex"}}> 
        <img 
      src={process.env.PUBLIC_URL+"/logo.png"}
      alt="new"
      //sizes="50px"
      width="40" height="40"
     // style={{width:"40px"}}
      />
          {/*<Typography variant="h4"  className={classes.logo}>&nbsp;&nbsp;CovidJS</Typography>*/}
          <Link to="/" className={classes.logo}>&nbsp;&nbsp;CovidInfo</Link>
          </div>

          <Hidden only={['sm',"xs"]}>
        <div>
          <ul className={classes.manu}>
            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="/">Home</Button></li>
            <li>   
                      <Button 
                      endIcon={<ArrowDropDownIcon />}
                      style={{color:'white',fontSize:"15px"}}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}>
                       INFO
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl1}
                        keepMounted
                        open={Boolean(anchorEl1)}
                        onClose={handleClose1}
                      >
                        {/* <MenuItem component={Link} to="agegroup" onClick={handleClose1}>Agegroup</MenuItem> */}
                        <MenuItem component={Link} to="symptoms" onClick={handleClose1}>Symptoms</MenuItem>
                        <MenuItem component={Link} to="safely" onClick={handleClose1}>Prevention</MenuItem>
                        
                      </Menu>
                    </li>
            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="/pakistan">Paksitan</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="/lockdown">Lockdown</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="requesttable">Request</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="request">Blood</Button></li>

            <li><Button component={Link} style={{color:'white',fontSize:"15px"}} to="food">Food</Button></li>
            {/* <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="safely">Prevention</Button></li> */}
          

              {user.login==false?
                      <li>   
                      <Button
                       endIcon={<ArrowDropDownIcon />}
                      style={{color:'white',fontSize:"15px"}}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                       Donor
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem component={Link} to="signin" onClick={handleClose}>Sign In</MenuItem>
                        <MenuItem component={Link} to="signup" onClick={handleClose}>Register</MenuItem>
                        
                      </Menu>
                    </li>:
                    <>
 
  <li><Button
                      

  component={Link} to="accept" style={{color:'white',fontSize:"15px"}} >Accept request</Button></li>
  <li><Button
    endIcon={<ArrowDropDownIcon />}
  onClick={handleClick} style={{color:'white',fontSize:"15px"}} >Account</Button>
  <Menu

        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem component={Link} to="profile">Profile</MenuItem>
        <MenuItem  onClick={()=>{handleClose();logout()}}>logout</MenuItem>
      </Menu>
  </li>
</>
              
            }
    
          </ul>
        </div>
        </Hidden>



        
          <div className={classes.show} >
          <TemporaryDrawer/>
            </div>
           </Toolbar>
      </AppBar>
    </div>
  );
}
