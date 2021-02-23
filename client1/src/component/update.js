
import React, { useState,useContext,useEffect} from 'react'
import { makeStyles,IconButton,FormControl,Select,TextField,Button,CssBaseline,Typography,Container } from '@material-ui/core';
import {UserContext} from "../App"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link,useRouteMatch,useHistory} from "react-router-dom";

const useStyles = makeStyles({
  table: {
    Width: "100%",
  },
});



export default function BasicTable() {
    const {user,setuser}=useContext(UserContext)
    const [data, setdata] = useState([])
  const classes = useStyles();

  const paths=useRouteMatch().path;
  const urls=useRouteMatch().url;
      
   
       
    
  useEffect(()=>{
  axios.get("https://coronaapp19.herokuapp.com/getdata").then(res=>{console.log(res.data);
        setdata(res.data)
      })
    
  },[])


const ddelete=async (i)=>{
 await axios.post("https://coronaapp19.herokuapp.com/delete",{id:i}).then((res)=>{console.log(res.data);

 axios.get("https://coronaapp19.herokuapp.com/getdata").then(res=>{console.log(res.data);
 setdata(res.data)

})
})

//  await axios.get("http://localhost:5000/getdata").then(res=>{console.log(res.data);
//         setdata(res.data)
//       })

 
}
  return (
      <>
        <Route exact path={`${paths}`}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Image</TableCell>
            <TableCell >City Details</TableCell>
            <TableCell >Update/Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            
                {data.map((i)=>
                    <TableRow key="a">

              <TableCell  component="th" scope="row">
               <img src={`${i.bgimg}`} width="200px"/>
              </TableCell>
                <TableCell ><b>CITY:</b>{i.name}<br/><b>STATUS:</b>{i.lockdown}</TableCell>

              <TableCell >
                  <center>
               
                      <IconButton component={Link} to={`${urls}/${i._id}`}>
               <FontAwesomeIcon  icon={faEdit} color="#002859"/>
               </IconButton>
              
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

               <IconButton onClick={()=>{ddelete(i._id)}}>
               <FontAwesomeIcon color="#8F0512" icon={faTrash}/>                                                 
               </IconButton>
               
               </center>
              </TableCell>
            
            </TableRow>
                )}
            
      
        </TableBody>
      </Table>
    </TableContainer>
    </Route>
    <Route exact path={`${paths}/:idd`}>
        <Edit/>
    </Route>
    </>
  );
}



const Edit=()=>{

  const hsitory=useHistory()
    
    const [citydata, setcitydata] = useState({})
    const deleteid=useRouteMatch().params.idd;
    const [image, setimage] = useState({})
    const [status, setstatus] = React.useState("");
    const [status1, setstatus1] = React.useState("");
    const [id, setid] = React.useState(deleteid);
    const handleChange = (event) => {
        setstatus1(event.target.value);
      };

      const onchange1=(e)=>{
         setimage(e.target.files[0])
           console.log(e.target.files[0])
      }


      useEffect(()=>{
          axios.post("https://coronaapp19.herokuapp.com/getid",{id:deleteid}).then((res)=>{
            setcitydata(res.data) ;
            //console.log(res.data.lockdown);
            setstatus(res.data.name)
            setstatus1(res.data.lockdown)
            
          })
      },[])

      const submit=(e) =>{
     e.preventDefault();

const formData=new FormData();
formData.append('image', image);
formData.append('status',status);
formData.append('status1',status1);
formData.append('id',id);

   axios.post("https://coronaapp19.herokuapp.com/updateeeee",formData,{headers: {
    'Content-Type': 'multipart/form-data',    
  }}).then((res)=>{
    console.log(res.data)
hsitory.push("/")
  })


      }

      const textchange=(e)=>{
        setstatus(e.target.value)
      }
   
    return(
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Typography component="div" style={{paddingTop:"100px", height: '85vh' }}>


        <form onSubmit={submit}> 
        <center><b>Update City Status</b></center>
          
      <TextField margin="normal" onChange={textchange} value={status} InputLabelProps={{
              shrink: true,
            }} fullWidth label="CityName" variant="outlined" />
                
              <center>

            <FormControl variant="outlined">
       
       <Select
         native
         value={status1}
         onChange={handleChange}
         inputProps={{
           name: 'lock',
           id: 'age-native-simple',
         }}
       >
         <option disabled aria-label="None" value="">Select Condition</option>
         <option value="LockDown">LockDown</option>
         <option value="Safe">Safe</option>
         
       </Select>
     </FormControl>
     </center>
<label>Select Image</label>&nbsp;&nbsp;
     <input
accept="image/*"
            name="profile Image"
            type="file"
             style={{marginTop:"10px"}}
            onChange={onchange1}
          />
          
              <Button style={{marginTop:"10px"}} fullWidth type="submit" variant="contained" color="primary">Update</Button>
    </form>
    
        </Typography>
      </Container>
    </React.Fragment>
    )
}

