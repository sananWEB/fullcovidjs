import React,{useContext,useState,useEffect} from 'react'
import {useRouteMatch} from "react-router-dom"
import {Context} from "../App"
import Main2 from "./main2"
import ButtonAppBar from "./Navbar2"
import {Container,Typography,TextField,FormControlLabel,Checkbox,Grid,Button} from '@material-ui/core';
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom"
import axios from "axios"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FooterPage from "./footer"



function Request2() {
  const [arry, setarry] = useState(["Oil"])
  const settchk=(e)=>{


    setselect(
      {
      ...select,
      [e.target.name]:select[!e.target.name]
      
      }
    )


  if(e.target.checked==true){

    setarry([...arry,e.target.value])

  }
 else if(e.target.checked==false){
  Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

arry.remove(e.target.value);

 } 
  }



  const {seturl}=useContext(Context)
seturl(useRouteMatch().url)

    const [open, setopen] = useState(false)
    const [user, setuser] = useState({
        name:"",
        email:"",
        address:"",
        number:"",
        massage:"",
     
    })
   
    const [msg, setmsg] = useState("")
    const change=(e)=>{
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const submit=(e)=>{
        e.preventDefault();
      //  // console.log(user)
      //  axios.post("https://coronaapp19.herokuapp.com/request",user).then((res)=>{
      //      setmsg(res.data);
      //      setopen(true);

      //      setuser({
      //       name:"",
      //       email:"",
      //       address:"",
      //       number:"",
      //       massage:"",
      //   })
      //   })



      axios.post("https://coronaapp19.herokuapp.com/food",{data1:user,selet:arry.join(",")}).then(res=>{

       // console.log(res.data)
        setmsg(res.data.msg);
             setopen(true);
  
             setuser({
              name:"",
              email:"",
              address:"",
              number:"",
              massage:"",
          })


      })

      // console.log(user)
      // console.log(arry)
    }

    const handleClick = () => {
        setopen(false);
      };


      const [select, setselect] = useState({
        Rice:false,
              Suger:false,  
               Beans:false,
                  Vagetable:false,
                     Fruit:false,
                        Sait:false,
                           Beans:false  
                          })
        

                          const [givename, setgivename] = useState({
                            Rice:"Rice",
                                  Suger:"Suger",  
                                   Beans:"Beans",
                                      Vagetable:"Vagetable",
                                         Fruit:"Fruit",
                                            Sait:"Sait",
                                               Beans:"Beans"  
                                              })
                            

          

     

       


        // useEffect(()=>{
        //           console.log(arry)
        // },[arry])




    return (
        <>
        <ButtonAppBar/>
    <Main2 image="signin.jpg" text="Request for Food" />
<br/>
    <Container maxWidth="md">
        <Typography component="div" style={{display:"flex",alignItems:"center", backgroundColor: 'transparent', height: 'auto' }}>

    
        <form  
       onSubmit={submit}
       
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}  >
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              value={user.name}
               onChange={change}
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="number"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Number"
                name="number"
                autoComplete="number"
              value={user.password}
                onChange={change}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="current-password"
               value={user.email}
              onChange={change}
              />


              
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                autoComplete="current-password"
                value={user.address}
                onChange={change}
              />
              
            </Grid>


            <Grid item xs={12} >
            <label><b>Select Food</b></label><br/>
              <label >
                
              <input onClick={(e)=>{settchk(e)}} checked={select.Rice} value={givename.Rice}  name="Rice" type="checkbox"/>&nbsp;Rice&nbsp;&nbsp;
              </label>

              <label>   
              <input  checked disable value={givename.Oil} name="Oil" type="checkbox"/>&nbsp;Oil&nbsp;&nbsp;
              </label>


              <label>
                
              <input onClick={(e)=>{settchk(e)}} checked={select.Suger} value={givename.Suger} name="Suger" type="checkbox"/>&nbsp;Suger&nbsp;&nbsp;
              </label>


              <label>
                
              <input onClick={(e)=>{settchk(e)}} value={givename.Beans} checked={select.Beans} name="Beans" type="checkbox"/>&nbsp;Beans&nbsp;&nbsp;
              </label>

              <label>
                
              <input onClick={(e)=>{settchk(e)}} value={givename.Vagetable} name="Vagetable" checked={select.Vagetable} type="checkbox"/>&nbsp;Vagetable&nbsp;&nbsp;
              </label>

              <label>
                
              <input onClick={(e)=>{settchk(e)}} checked={select.Fruit} value={givename.Fruit} name="Fruit" type="checkbox"/>&nbsp;Fruit&nbsp;&nbsp;
              </label>

              <label>
                
              <input onClick={(e)=>{settchk(e)}} value={givename.Sait} name="Sait" checked={select.Sait} type="checkbox"/>&nbsp;Sait&nbsp;&nbsp;
              </label>

              <label>
                
              <input onClick={(e)=>{settchk(e)}} value={givename.Beans} name="Beans" checked={select.Beans} type="checkbox"/>&nbsp;Beans&nbsp;&nbsp;
              </label>
            </Grid>

            

            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                rows="4"
                multiline={true} 
                fullWidth
              value={user.massage}
               onChange={change}
                name="massage"
                label="Massage"
                type="text"
                id="Massage"
                autoComplete="current-password"
              />
              
            </Grid>


            
          </Grid>
          <Button
          style={{marginBottom:"10px",marginTop:"10px",float:"right"}}
            type="submit"
            
            variant="contained"
            color="primary"
            
          >
            Request
          </Button>
        
        </form>


        </Typography>
      </Container>

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClick} >

        {msg==""?
        <MuiAlert  severity="error" elevation={6} variant="filled">
        {msg}
        </MuiAlert>:
          <MuiAlert  severity="success" elevation={6} variant="filled">
          {msg}
          </MuiAlert>
      }
    
      </Snackbar>
      <br/>
        <FooterPage/>
        </>
    )
}

export default Request2
