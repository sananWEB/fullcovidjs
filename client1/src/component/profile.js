import React,{Fragment,useState,useContext} from 'react'
import {Button,CircularProgress ,Box,TextField,Typography} from '@material-ui/core';
import "./catogary.css"
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios" 
import {UserContext} from "../App"
import { useHistory} from "react-router-dom";
function Profile() {
  const {user,setuser}=useContext(UserContext)
const histroy=useHistory()

const [update, setupdate] = useState({
  Profilename:user.username,
  Password:user.password,
  id:user.id
})
const [image, setimage] = useState(user.image)
const onchange=(e)=>{
  setupdate({
    ...update,
    [e.target.name]:e.target.value
  })
  //console.log(update)
}
const [state11, setstate11] = useState({
  btn:false,
  circular:"none"
})
const submit= (e)=>{
e.preventDefault();

setstate11({
  btn:true,
  circular:"block"
})
if(checktype){
  const formData = new FormData();
  formData.append('image', image);
  formData.append('Profilename',update.Profilename);
  formData.append('Password',update.Password);
  formData.append('id',update.id);
      //console.log([selectvalue,bg,name])
      axios.post("https://coronaapp19.herokuapp.com/userupdate",formData,{headers: {
    'Content-Type': 'multipart/form-data',
    token:user.token
  }}
  ).then(res=>{
    //console.log(res.data);
    localStorage.setItem("Ltoken",res.data);window.location.reload()
  })
   
   //histroy.push("/")
  
  //console.log([update,image])
}
else{
   return null
}

}
const [setname, setsetname] = useState("Change Profile Image")
const [checktype, setchecktype] = useState(true)
const onchange1=(e)=>{
  setimage(e.target.files[0])
  setsetname(e.target.files[0].name)
// console.log(e.target.files[0].type)

var type=e.target.files[0].type;
setchecktype(type.includes("image"))
 

}


    return (
        <Fragment >
          <Typography variant="h5" id="typo">EDIT PROFILE</Typography>  
           <center><form onSubmit={submit} id="form">

           
            {/* <Avatar  style={{width:"120px",height:"120px"}} alt="Profile Image" src={process.env.PUBLIC_URL +`/profile/${image}`} /> */}

        
          <TextField
          required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            onChange={onchange}
            fullWidth
            value={update.Profilename}
            id="Profilename"
            label="Profilename"
            name="Profilename"
          />
             <TextField
InputLabelProps={{
  shrink: true,
}}    
required
            variant="outlined"
            margin="normal"
            fullWidth
           // type="password"
            onChange={onchange}
            id="Password"
            label="Password"
            name="Password"
            value={update.Password}
          />
<label>{setname} &nbsp;</label>
<input
accept="image/*"
            name="profile Image"
            type="file"
             style={{marginTop:"10px",color:"transparent"}}
            onChange={onchange1}
          />
          
              <Button disabled={state11.btn} style={{marginTop:"10px",marginBottom:"10px"}} fullWidth type="submit" variant="contained" color="primary">Update</Button>
              {checktype?null:<Box mt="20px" width="100%" style={{marginTop:"12px"}}>
  <MuiAlert variant="filled" severity="error">Please Select Image</MuiAlert>
        </Box>}

        <CircularProgress style={{display:state11.circular}}  />
          </form></center>
          

          
        </Fragment>
    )
}

export default Profile
