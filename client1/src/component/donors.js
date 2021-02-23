import React, { useEffect, useState } from 'react'
import { makeStyles,IconButton,FormControl,Select,TextField,Button,CssBaseline,Typography,Container } from '@material-ui/core';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link,useRouteMatch,useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"
function Donors() {
 const [donors, usedonors] = useState([])
    useEffect(()=>{

        axios.get("https://coronaapp19.herokuapp.com/getdonors").then((res)=>{usedonors(res.data);
   // console.log(res.data)
    })

    },[])


    const ddelete= async(id)=>{

await axios.post("https://coronaapp19.herokuapp.com/deletedonors",{id:id}).then((res)=>{console.log(res.data)});
await axios.get("https://coronaapp19.herokuapp.com/getdonors").then((res)=>{usedonors(res.data)});

// console.log(res.data)
 }
    
    return (
       <>
<table border="1" width="100%">
    <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Email</th>
        
        <th>Delete</th>
    </tr>
    {donors.map((i)=>
     <tr>
 <td>{i.name}</td>       
 <td>{i.number}</td>       
 <td>{i.email}</td>
 <td>
 <IconButton onClick={()=>{ddelete(i._id)}}>
               <FontAwesomeIcon color="#8F0512" icon={faTrash}/>                                                 
               </IconButton>
     </td>       
     </tr>
 
    
    )}
   

</table>
       </>
    )
}

export default Donors
