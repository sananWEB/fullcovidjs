import React,{Fragment,useState,useEffect,useContext} from 'react'
import {Button,Box,Select,FormControl,InputLabel,TextField,Typography} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import "./catogary.css"
import axios from "axios"
import {UserContext} from "../App"

function Addproduct() {
  const {user,setuser}=useContext(UserContext)
    const [catogaryName, setcatogaryName] = useState([])
    const [subcatogaryName, setsubcatogaryName] = useState([])
    const [selectvalue, setselectvalue] = useState("")
    const [selectsubvalue, setsubselectvalue] = useState("")
    const [disable, setdisable] = useState(true)
    const [name, setname1] = useState("")
    const [bg, setbg] = useState({})
    const [bg1, setbg1] = useState({})
    const [bg2, setbg2] = useState({})
    const [bg3, setbg3] = useState({})
    const [msg, setmsg] = useState(null)
    const [msg1, setmsg1] = useState(null)
    const [checktype, setchecktype] = useState({
      img1:true,
      img2:true,
      img3:true,
      img4:true,
    })


    const [data1, setdata1] = useState({
      price:undefined,
      discription:"",
      stock:"",
      color:""
    })
  

    const handleChange=(e)=>{
        setselectvalue(e.target.value)
        setdisable(false)
      
      }

      const handleChange1=(e)=>{
        setsubselectvalue(e.target.value)

      }
    useEffect(()=>{
        axios.get("https://coronaapp19.herokuapp.com/admin/viewcatogary").then((res)=>setcatogaryName(res.data)).catch(()=>{console.log("error")})
        .catch(()=>{console.log("error")})

        axios.get("https://coronaapp19.herokuapp.com/admin/viewsubcatogary").then((res)=>{

          
          const arry=res.data.filter((i)=>
          i.catogary==selectvalue
          )
          setsubcatogaryName(arry)
        
        })
        
        },[selectvalue])

        const setname=(e)=>{
          setname1(e.target.value)
        }

        const change1=(e)=>{
          setbg(e.target.files[0])
         const type=e.target.files[0].type

         setchecktype({
           ...checktype,
img1:type.includes("image")
         })    
       //  console.log(type.includes("image"))
        console.log(checktype)
        }
        const change2=(e)=>{
          setbg1(e.target.files[0])
          const type=e.target.files[0].type

         setchecktype({
           ...checktype,
img2:type.includes("image")
         })
          //console.log(e.target.files[0])
      //    console.log(checktype)
        }

        const change3=(e)=>{
          setbg2(e.target.files[0])
          //console.log(e.target.files[0])
          const type=e.target.files[0].type

         setchecktype({
           ...checktype,
img3:type.includes("image")
         })
        // console.log(checktype)
        }
        const change4=(e)=>{
          setbg3(e.target.files[0])
          //console.log(e.target.files[0])
          const type=e.target.files[0].type

         setchecktype({
           ...checktype,
img4:type.includes("image")
         })

    //     console.log(checktype)
        }




        const submit= async(e)=>{
          e.preventDefault();

          if(checktype.img1==false){
            return setmsg1("Plz Select Image (field No.1)")
          }
          if(checktype.img2==false){
            return setmsg1("Plz Select Image 2 (field No.2)")
          }
          if(checktype.img3==false){
            return setmsg1("Plz Select Image 3 (field No.3)")
          }
          if(checktype.img4==false){
            return setmsg1("Plz Select Image 4 (field No.4)")
          }
          // console.log([bg,name,selectsubvalue,selectvalue,data1.price,data1.color,data1.stock,data1.discription])
          setmsg1(null)
const formData = new FormData();
formData.append('selectvalue', selectvalue);
formData.append('selectsubvalue',selectsubvalue);
formData.append('name',name);
formData.append('bg',bg);
formData.append('bg1',bg1);
formData.append('bg2',bg2);
formData.append('bg3',bg3);
formData.append('discription',data1.discription);
formData.append('price',data1.price);
formData.append('stock',data1.stock);
formData.append('color',data1.color);


         await axios.post("https://coronaapp19.herokuapp.com/admin/addproduct",formData,{headers: {
            'Content-Type': 'multipart/form-data',
            token:user.token
          }}).then(res=>{
            setmsg(res.data.msg);
            console.log(res.data);
            // setTimeout(()=>{
            //   setmsg(null)
            // },2000)
          })
            
        }

        const setname11=(e)=>{
          setdata1({
            ...data1,
            [e.target.name]:e.target.value
          })

        }
    return (
        <Fragment>
             <Typography variant="h5" id="typo"> ADD PRODUCT</Typography>  
            <center><form id="form" onSubmit={submit}>
<FormControl fullWidth variant="outlined" required
 >
        <InputLabel>Catogary</InputLabel>
        <Select  native
         value={selectvalue}
         onChange={handleChange}
          label="Catogary"  >
          <option disabled aria-label="None" value="" />
          {catogaryName.map((i)=>
               <option value={i.catogaryName}>{i.catogaryName}</option>
          )}
        </Select>
      </FormControl>

      <FormControl required 
      disabled={disable} style={{marginTop:"10px"}} fullWidth variant="outlined"  >
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

<TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
            value={name}
           onChange={setname}
            id="ProductName"
            label="ProductName"
            name="ProductName"

          />
          <TextField required
InputLabelProps={{
  shrink: true,
}}    
            variant="outlined"
            margin="normal"
            
            fullWidth
            value={data1.price}
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
            value={data1.stock}
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
            value={data1.discription}
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
            value={data1.color}
          onChange={setname11}
            id="color"
            label="color"
            name="color"
            helperText="For Example:- black,white,blue"

          />


<input
accept="image/*"
required
            name="image"
            type="file"
           onChange={change1}
          />
          <input
accept="image/*"
required
            name="image1"
            type="file"
           onChange={change2}
          />
          <input
accept="image/*"
required
            name="image2"
            type="file"
           onChange={change3}
          />
          <input
accept="image/*"
required
            name="image3"
            type="file"
           onChange={change4}
          /><br/><br/>
          <Button type="submit" variant="contained" color="primary">Add Product</Button>

          
{(()=>{
  if(msg=="Product is added!"){

    return(
      <Box mt="20px" width="100%" style={{marginTop:"12px"}}>
  <MuiAlert variant="filled" severity="success">{msg}</MuiAlert>
        </Box>
    )

  }

  else if(msg =="Stock and Price must be Number"){
    return(
      <Box mt="20px" width="100%" style={{marginTop:"12px"}}>
      <MuiAlert variant="filled" severity="error">{msg}</MuiAlert>
            </Box>
    )
   
  }

  else if(msg==null){
    return null
  }

  else{
    return null
  }
})()}
         
       {msg1?<Box mt="20px" width="100%" style={{marginTop:"12px"}}>
      <MuiAlert variant="filled" severity="error">{msg1}</MuiAlert>
            </Box>:null}  
            </form></center>
        </Fragment>
    )
}

export default Addproduct
