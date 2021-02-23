
import React, { Fragment,useState,useContext } from 'react'
import {Button,Select,InputLabel,FormControl,TextField,Typography} from '@material-ui/core';
import "./catogary.css"
import Box from '@material-ui/core/Box';
import axios from "axios"
import MuiAlert from '@material-ui/lab/Alert';
import {UserContext} from "../App"








function Catogary() {
  const {user,setuser}=useContext(UserContext)
 // console.log(user.token)
  const [Cstate, setCstate] = useState({
    catogary:"",
  })
  const [file, setfile] = useState()

  const [msg,setmsg]=useState(null)

  const change=(e)=>{
    setCstate({
      [e.target.name]:e.target.value
    })
  }

  const [checktype, setchecktype] = useState(true)
  const change1=(e)=>{
    setfile(e.target.files[0])

    const type=e.target.files[0].type
    setchecktype(type.includes("image"))
  }

  const [state, setState] = React.useState({
    lock: '',

  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  const submit= async(e)=>{

    e.preventDefault();

    if(checktype){
      const formData = new FormData();
formData.append('filee', file);
formData.append('catogary',Cstate.catogary);
formData.append('lock',state.lock);

//await axios.post("https://httpbin.org/anything",formData).then(res=>{console.log(res.data)}).catch(e=>{console.log("error")})



await axios.post("https://coronaapp19.herokuapp.com/addcity",formData,{headers: {
  token:user.token
}}
).then((res)=>{console.log(res.data);setmsg(res.data);setTimeout(()=>{
  setmsg(null)
},2000)})
    }else{
     return null;
     }

  }

 
    return (
        <Fragment>
            <Typography variant="h5" id="typo"> ADD City</Typography>  

<center><form id="form" onSubmit={submit}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            value={Cstate.catogary}
            onChange={change}
            fullWidth
            id="Catogary Name"
            label="City Name"
            name="catogary"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
          /> 

<FormControl variant="outlined">
       
        <Select
          native
          value={state.lock}
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
<br/><br/>
<input
            required
            name="Background Image"
            type="file"
            onChange={change1}
          />
          <Button type="submit" variant="contained" color="primary">Add City</Button>

{msg==null?null:
      <Box  mt="20px" width="100%">
      <MuiAlert  variant="filled" seve                                                  rity="success">{msg}</MuiAlert>
            </Box>
}

  
            </form>
           
            </center>
        </Fragment>
        
    )
}

export default Catogary
