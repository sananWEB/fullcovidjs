import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {UserContext} from "../App"
import Catogary from "./Catogary"
import {AppBar,Button,CssBaseline,Divider,Drawer,Hidden,IconButton,List,ListItem,ListItemIcon,Avatar,ListItemText,Typography} from '@material-ui/core';
import "./navbar.css"
import SubCatogary from "./subcatogary"
import Profile from "./profile"
import Update from "./update"
import Donors from "./donors"
import Viewproducts from "./viewproducts"
import Addproduct from "./addproduct"
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Switch, Route, Link,useHistory,useRouteMatch} from "react-router-dom";
import Dashboard from "./dashboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar,faUser,faShieldVirus,faEye,faUsers,faGift,faShoppingBag,faShoppingBasket, faUpload } from '@fortawesome/free-solid-svg-icons'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#424242"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    marginTop:theme.spacing(2),
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  
}));

function ResponsiveDrawer(props) {

  const {user,setuser}=useContext(UserContext)

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const path=useRouteMatch().path;
  const url=useRouteMatch().url;
  const drawer = (
    <div>
      <center>
     <Avatar className={classes.large} alt="Remy Sharp" src={`${user.image}`} />
     <Typography style={{color:"white",marginTop:"7px",marginBottom:"7px"}} variant="h6" noWrap>
         {user.username}
           </Typography>
     </center>
     <Divider variant="middle" style={{backgroundColor:"white"}}/>
      <List>
          <Link to={`${url}/dashboard`}><ListItem  disableRipple button key="Dashboard">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faChartBar} color="white"/></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem></Link>

          

          <Link to={`${url}/Profile`}><ListItem disableRipple className="list" button key="Profile">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faUser} color="white"/></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem></Link>


          {/* <Link to={`${url}/Products`}><ListItem disableRipple  className="list" button key="Products">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faGift} color="white"/></ListItemIcon>
            <ListItemText primary="Add Products" />
          </ListItem></Link> */}



          <Link to={`${url}/cites`}><ListItem disableRipple  className="list" button key="cites">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faShoppingBag} color="white"/></ListItemIcon>
            <ListItemText primary="Add City" />
          </ListItem></Link>

          <Link to={`${url}/update`}><ListItem disableRipple  className="list" button key="cites">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faUpload} color="white"/></ListItemIcon>
            <ListItemText primary="Update City" />
          </ListItem></Link>
          <Link to={`${url}/donors`}><ListItem disableRipple  className="list" button key="donors">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faShieldVirus} color="white"/></ListItemIcon>
            <ListItemText primary="Donors" />
          </ListItem></Link>
{/* 
          <Link to={`${url}/SubCatogary`}><ListItem disableRipple className="list" button key="SubCatogary">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faShoppingBasket} color="white"/></ListItemIcon>
            <ListItemText primary="SubCatogary" />
          </ListItem></Link>

          <Link to={`${url}/View Products`}><ListItem disableRipple className="list" button key="faUsers">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faEye} color="white"/></ListItemIcon>
            <ListItemText primary="View Products" />
          </ListItem></Link>


          
          <Link to={`${url}/Users`}><ListItem disableRipple className="list" button key="faUsers">
            <ListItemIcon><FontAwesomeIcon size="lg" icon={faUsers} color="white"/></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem></Link> */}
          
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const history=useHistory();
  const logout=()=>{
    localStorage.setItem("Ltoken","");
    setuser({
      id:"",
      username:"",
      token:"",
      email:"",
      password:"",
      image:"",
      login:false
    })
    history.push("/")
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" className={classes.appBar}>
        <Toolbar className="navtoolbar" >
          <IconButton
          disableRipple
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography  color="white" variant="h6">
         ADMIN PENAL
           </Typography>
          <Button onClick={logout} size="small" variant="contained" color="primary">Logout</Button>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onClick={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
      <Route path={`${path}/dashboard`}>
      <Dashboard />
      </Route>

      <Route path={`${path}/cites`}>
      <Catogary />
      </Route>

      <Route path={`${path}/SubCatogary`}>
      <SubCatogary />
      </Route>


      <Route path={`${path}/Profile`}>
      <Profile />
      </Route>
     

      

      <Route  path={`${path}/View Products`}>
      < Viewproducts />
      </Route>
      <Route  path={`${path}/Products`}>
      < Addproduct />
      </Route>

      <Route  path={`${path}/update`}>
      < Update />
      </Route>

      <Route  path={`${path}/donors`}>
      <Donors/>
      </Route>
      
      
        </Switch>
       
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
