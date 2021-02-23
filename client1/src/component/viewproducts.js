
import React, { useState,useContext,useEffect} from 'react'
import {Button,IconButton,TextField,Typography} from '@material-ui/core';
import {Select,FormControl,InputLabel} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios"
import {UserContext} from "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import "./table.css" 
import { BrowserRouter as Router, Route, Link,useRouteMatch} from "react-router-dom";
export default function BasicTable() { 

    const path=useRouteMatch().path;
    const url=useRouteMatch().url;
    const [selectvalue, setselectvalue] = useState("")
    const [disable, setdisable] = useState(true)
    const {user,setuser}=useContext(UserContext)
    const [subcatogaryName, setsubcatogaryName] = useState([])
    const [pro, setpro] = useState(["loading...."])
    const [open, setOpen] = React.useState(false);
    const [msg,Setmsg] = useState(null)
    const [condition, setcondition] = useState(false)
    const [selectsubvalue, setsubselectvalue] = useState("")
    const [newarray1, setnewarray] = useState([])
  const [catogary, setcatogary] = useState([])
    useEffect( ()=>{
  axios.get("https://coronaapp19.herokuapp.com/admin/viewproducts").then(res=>{setpro(res.data)})
    },[pro])


    useEffect(()=>{
      axios.get("https://coronaapp19.herokuapp.com/admin/viewcatogary").then((res)=>setcatogary(res.data)).catch(()=>{console.log("error")})
      .catch(()=>{console.log("error")})

      
      axios.get("https://coronaapp19.herokuapp.com/admin/viewsubcatogary").then((res)=>{

          
        const arry=res.data.filter((i)=>
        i.catogary===selectvalue
        )
        setsubcatogaryName(arry)
      
      })
    },[selectvalue])

    const remove= async(id)=>{

      if (window.confirm("Do you want to delete this item ?")) {
    
        await axios.post("https://coronaapp19.herokuapp.com/admin/removeproduct",{idd:id},{headers: {
    token:user.token
  }}).then(res=>{Setmsg(res.data);setOpen(true);setTimeout(()=>{setOpen(false)},2000)})

  await axios.get("https://coronaapp19.herokuapp.com/admin/viewproducts").then(res=>{
  //  setpro(res.data.reverse())
 const data1=res.data
  const newarray=data1.filter((i)=>{
    return(i.catogary===selectvalue && i.subcatogary===selectsubvalue)
   })
   
   setnewarray(newarray)
   

  })

      } else {
       return null
      }

  
   
    }
    const handleChange=(e)=>{
      setselectvalue(e.target.value)
      setdisable(false)
      setsubselectvalue("")
    }

    const handleChange1=(e)=>{
      setsubselectvalue(e.target.value)

    }

    const filter=(e)=>{
e.preventDefault()

//console.log(pro)
//console.log([selectvalue,selectsubvalue])
 const newarray=pro.filter((i)=>{
 return(i.catogary===selectvalue && i.subcatogary===selectsubvalue)
})

setnewarray(newarray)

setcondition(true)

//console.log(newarray)
//console.log(pro)


    }
  return (
      <>
 <Router>
      <Route exact path={`${path}`}>

        {(()=>{

          if(pro[0]==="loading...."){

            return(
              <div id="text1">
<p>loading....</p>
              </div>

            )
          }
          if(newarray1.length===0){

            return(

<>

<form onSubmit={filter}>

<FormControl fullWidth variant="outlined" required >
        <InputLabel>Catogary</InputLabel>
        <Select  native
       value={selectvalue}
        onChange={handleChange}
          label="Catogary"  >
          <option disabled  aria-label="None" value="" />
          {catogary.map((i)=>
               <option value={i.catogaryName}>{i.catogaryName}</option>
          )}
        </Select>
      </FormControl>

      <FormControl disabled={disable} required  style={{marginTop:"10px",marginBottom:"10px"}} fullWidth variant="outlined"  >
        <InputLabel>SubCatogary</InputLabel>
        <Select  native
         value={selectsubvalue}
          onChange={handleChange1}
          label="Catogary"  >
          <option  disabled value="" />
          {subcatogaryName.map((i)=>
               <option value={i.subcatogary}>{i.subcatogary}</option>
          )}
        </Select>
      </FormControl>
      <Button style={{marginBottom:"10px"}}  type="submit" variant="contained" color="primary">Show Items</Button>

      </form>
      {condition?<p>No product are listed...</p>:null}
   </>

            )
          }

          if(newarray1.length>0){

            return(
<>

<form onSubmit={filter}>

<FormControl fullWidth variant="outlined"  >
        <InputLabel>Catogary</InputLabel>
        <Select  native
       value={selectvalue}
        onChange={handleChange}
          label="Catogary"  >
          <option disabled aria-label="None" value="" />
          {catogary.map((i)=>
               <option value={i.catogaryName}>{i.catogaryName}</option>
          )}
        </Select>
      </FormControl>

      <FormControl disabled={disable}   style={{marginTop:"10px",marginBottom:"10px"}} fullWidth variant="outlined"  >
        <InputLabel>SubCatogary</InputLabel>
        <Select  native
         value={selectsubvalue}
          onChange={handleChange1}
          label="Catogary"  >
          <option disabled aria-label="None" value="" />
          {subcatogaryName.map((i)=>
               <option value={i.subcatogary}>{i.subcatogary}</option>
          )}
        </Select>
      </FormControl>
      <Button style={{marginBottom:"10px"}}  type="submit" variant="contained" color="primary">Filter</Button>
      </form>
      <table>
  <tr>
    <th>Image</th>
    <th style={{width:"50%"}}>Details</th>
    <th style={{width:"25%"}}>Price</th>
    <th style={{width:"25%"}}>Action</th>
  </tr>

  {newarray1.map((i,v)=>
    <tr>
   <td><img src={`${i.image}`} width="150px" height="120px"/></td>
    <td >
  <b>Name: </b>{i.productname}<br/>
  <b>Color: </b>{i.color}<br/>
  <b>Catogary: </b>{i.catogary}<br/>
  <b>SubCatogary: </b>{i.subcatogary}<br/>
  <b>Stock: </b>{i.stock}<br/>
        
        </td>
  <td>PKR: {i.price}</td>
  
    <td >
    <center>
    <Link to={`${url}/${i._id}`}>
    <FontAwesomeIcon icon={faEdit} size="lg" color="#002859"/>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <IconButton onClick={()=>{remove(newarray1[v]._id)}}>
        <FontAwesomeIcon  icon={faTrash} size="sm" color="#830B00"/>
        </IconButton>
        </center>
        </td>    
  </tr>
  )}
</table>
<Snackbar open={open}>

<MuiAlert  elevation={6} variant="filled"  severity="success">
{msg}
</MuiAlert> 
    
     </Snackbar>

   </>
            )
            
          }
          else{

            return(
              <div id="text1">
<p>No product is listed</p>
              </div>

            )
            
          }

        })()}



      </Route>
  
      <Route  path={`${path}/:id`}>
      <Edit />
      </Route>
      </Router>
      </>

  );
}



function Edit() {
    const {user,setuser}=useContext(UserContext)
    const productID=useRouteMatch().params.id
    const [data, setdata] = useState({
        id:"",
        Pname:"",
        color:"",
        stock:"",
        price:"",
        discription:"",
    })
    const [img, setimg] = useState({})
    const [open, setOpen] = React.useState(false);
    const [msg, setmsg] = useState("")
    useEffect(()=>{
        
 axios.post("https://coronaapp19.herokuapp.com/admin/updateproduct",{idd:productID},{headers: {
    token:user.token
  }}).then(res=>{
      //console.log(res.data);
    setdata({
        id:res.data._id,
        Pname:res.data.productname,
        color:res.data.color,
        stock:res.data.stock,
        price:res.data.price,
        discription:res.data.discription 
    })
})
    },[])



    const setname11=(e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })

        
    }
    const change1=(e)=>{
        setimg(e.target.files[0])
      //  console.log(e.target.files[0])
    }
    const submit=(e)=>{
e.preventDefault()

const formData = new FormData();
formData.append('Pname',data.Pname);
formData.append('id',data.id);
formData.append('image',img);
formData.append('discription',data.discription);
formData.append('price',data.price);
formData.append('stock',data.stock);
formData.append('color',data.color);


axios.post("https://coronaapp19.herokuapp.com/admin/updateproduct1",formData,{headers: {
    'Content-Type': 'multipart/form-data',
    token:user.token
  }}).then(res=>{setmsg(res.data);setOpen(true);setTimeout(()=>{setOpen(false)},2000)})
    }

  
    return (
       <>
       <Typography variant="h5" id="typo">UPDATE PRODUCT</Typography>  
            <center><form id="form"  onSubmit={submit}>
<TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
           value={data.Pname}
         onChange={setname11}
            id="ProductName"
            label="ProductName"
            name="Pname"

          />
          <TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
           value={data.price}
           onChange={setname11}
            id="price"
            label="Price"
            name="price"

          />

<TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
            value={data.stock}
      onChange={setname11}
            id="stock"
            label="Stock"
            name="stock"

          />


<TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
            value={data.discription}
         onChange={setname11}
            id="discription"
            label="Discription"
            name="discription"

          />

<TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
          value={data.color}
         onChange={setname11}
            id="color"
            label="color"
            name="color"
            helperText="For Example:- black,white,blue"

          />


<input
accept="image/*"
            name="Background Image"
            type="file"
         onChange={change1}
          />
          <Button type="submit" variant="contained" color="primary">Add Update</Button>
      
            </form></center>


{(()=>{

if(msg=="Stock and Price must be Number"){


  return(
<Snackbar open={open}>
<MuiAlert  elevation={6} variant="filled"  severity="error">
{msg}
</MuiAlert> 
    
     </Snackbar>
  )

  

}

else{

  return(
<Snackbar open={open}>
<MuiAlert  elevation={6} variant="filled"  severity="success">
{msg}
</MuiAlert> 
    
     </Snackbar>
  )
  

}


})()}
           
       </>
    )
}

