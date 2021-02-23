import React, { Fragment, useEffect,useState } from 'react'
import {Box,Grid,Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStore,faUsers,faCity,faUserShield,faDisease,faStoreAltSlash,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./dashboard.css"
import axios from "axios"
function Dashboard(props) {
const [data, setdata] = useState({})
  useEffect(()=>{

    axios.get("https://coronaapp19.herokuapp.com/getinfo").then((res)=>{
      setdata(res.data)
    })
  })
    return (
        <Fragment>
           <Grid container spacing={2}>
            <Grid  item xs={12} sm={6} >
              <Box  p="30px" bgcolor="#F39C12" height="250px">
              <Grid container>
            <Grid item xs={6} >
              <Box color="white" display="flex" flexDirection="column" height="200px" justifyContent="space-evenly">
                <Typography variant="h2" style={{fontWeight:"bold"}}>{data.citys}</Typography>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Register Cities</Typography>
              </Box>
              </Grid>

              <Grid item xs={6}>
              <Box color="white" display="flex" flexDirection="column" height="200px"  justifyContent="center" alignItems="flex-end">
               <FontAwesomeIcon icon={faCity} size="5x"/>
              </Box>
              </Grid>

          </Grid>
              </Box>
              </Grid>


              <Grid item xs={12} sm={6}>
              <Box p="30px" bgcolor="#DD4B39" height="250px">
              <Grid container>
            <Grid item xs={6} >
              <Box color="white" display="flex" flexDirection="column" height="200px" justifyContent="space-evenly">
    <Typography variant="h2" style={{fontWeight:"bold"}}>{data.request}</Typography>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Request for Blood</Typography>
              </Box>
              </Grid>

              <Grid item xs={6}>
              <Box color="white" display="flex" flexDirection="column" height="200px"  justifyContent="center" alignItems="flex-end">
               <FontAwesomeIcon icon={faDisease} size="5x"/>
              </Box>
              </Grid>

          </Grid>
              </Box>
              </Grid>


              <Grid  item xs={12} sm={6}>
              <Box p="30px" bgcolor="#00A4CC" height="250px">
              <Grid container>
            <Grid item xs={6} >
              <Box color="white" display="flex" flexDirection="column" height="200px" justifyContent="space-evenly">
    <Typography variant="h2" style={{fontWeight:"bold"}}>{data.donors}</Typography>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Blood Donors</Typography>
              </Box>
              </Grid>

              <Grid item xs={6}>
              <Box color="white" display="flex" flexDirection="column" height="200px"  justifyContent="center" alignItems="flex-end">
               <FontAwesomeIcon icon={faUserShield} size="5x"/>
              </Box>
              </Grid>

          </Grid>
              </Box>
              </Grid> 

              <Grid item xs={12} sm={6}>
              <Box p="30px" bgcolor="#00A65A" height="250px">
                <Grid container>
            <Grid item xs={6} >
              <Box color="white" display="flex" flexDirection="column" height="200px" justifyContent="space-evenly">
                <Typography variant="h2" style={{fontWeight:"bold"}}>230</Typography>
                <Typography variant="h4" style={{fontWeight:"bold"}}>All Products</Typography>
              </Box>
              </Grid>

              <Grid item xs={6}>
              <Box color="white" display="flex" flexDirection="column" height="200px"  justifyContent="center" alignItems="flex-end">
               <FontAwesomeIcon icon={faShoppingCart} size="5x"/>
              </Box>
              </Grid>

          </Grid>
              </Box>
              </Grid> 
          </Grid>
        </Fragment>
    )
}
export default Dashboard
