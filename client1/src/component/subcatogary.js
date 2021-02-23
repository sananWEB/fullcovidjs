
import React, { Fragment,useEffect,useState,useContext } from 'react'
import {Button,Box,Select,FormControl,InputLabel,TextField,Typography} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import "./catogary.css"
import axios from "axios"
import {UserContext} from "../App"
function SubCatogary() {
  const {user,setuser}=useContext(UserContext)
  const [catogaryName, setcatogaryName] = useState([])
  const [selectvalue, setselectvalue] = useState("")
const [bg, setbg] = useState({})
const [name, setname] = useState("")
const [msg, setmsg] = useState(null)
  const handleChange=(e)=>{
    setselectvalue(e.target.value)
  }
  
  
  useEffect(()=>{
    axios.get("https://coronaapp19.herokuapp.com/admin/viewcatogary").then((res)=>setcatogaryName(res.data)).catch(()=>{console.log("error")})
  })
    
 
 
  
  const [checktype, setchecktype] = useState(true)
  const change1=(e)=>{   
    setbg(e.target.files[0])
    const type=e.target.files[0].type
    setchecktype(type.includes("image"))
  }

  const setname1=(e)=>{
    setname(e.target.value)
  }

  const button= (e)=>{
    e.preventDefault();


    if(checktype){

      const formData = new FormData();
      formData.append('file', bg);
      formData.append('catogary',selectvalue);
      formData.append('subcatogary',name);
         // console.log([selectvalue,bg,name])
       
       
         axios.post("https://coronaapp19.herokuapp.com/sub/addsc",formData,{headers: {
          'Content-Type': 'multipart/form-data',
          token:user.token
        }}).then(res=>{console.log(res.data);setmsg(res.data);setTimeout(()=>{
          setmsg(null)
        },2000)})
         
          //  setselectvalue("")
          //  setname("")
    }else{
      return null
    }

 
  }
    return (
        <Fragment>
            <Typography variant="h5" id="typo"> ADD SUB-CATOGARY</Typography>  

<center><form id="form" onSubmit={button}>
<FormControl fullWidth variant="outlined">
        <InputLabel>Catogary</InputLabel>
        <Select  native
          value={selectvalue}
          onChange={handleChange}
          label="Catogary"  >
          <option aria-label="None" value="" />
          {catogaryName.map((i)=>
               <option value={i.catogaryName}>{i.catogaryName}</option>
          )}
        </Select>
      </FormControl>

<TextField
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
            value={name}
            onChange={setname1}
            id="subCatogary Name"
            label="Sub-Catogary Name"
            name="Subcatogaryname"

          />
<input
accept="image/*"
            
            name="image"
            type="file"
            onChange={change1}
          />
          <Button type="submit" variant="contained" color="primary">Add Catogary</Button>
          {msg?<Box mt="20px" width="100%" style={{marginTop:"12px"}}>
      <MuiAlert variant="filled" severity="success">{msg}</MuiAlert>
            </Box>:null}
            {checktype?null:<Box mt="20px" width="100%" style={{marginTop:"12px"}}>
  <MuiAlert variant="filled" severity="error">Please Select Image</MuiAlert>
        </Box>}
            </form></center>
        </Fragment>
    )
}

export default SubCatogary
