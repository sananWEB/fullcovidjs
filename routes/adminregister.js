const route=require("express").Router();
const mongo=require("mongoose");
const { findOne } = require("../models/register");
const jwt=require("jsonwebtoken")
require("../models/register"); 
const auth=require("../auth")
const c1=mongo.model("admin1")
const upload=require("../multer")
const cloudinary=require("cloudinary")
require("../cloudinary")

  


route.post("/register",async(req,res)=>{
    const {username,email,password,image}=req.body;
const data=new c1();
data.username=username,
data.email=email,
data.password=password, 
data.image=image
await data.save().then(()=>{res.send({msg:"data is saved!"})}).catch((err)=>{res.send(err)})
})

route.post("/signin", async(req,res)=>{
    const {email,password}=req.body;

    if(email=="" || password==""){
        res.send({msg:"plz fill the field"})
    }
  

    const data=await c1.findOne({email:email});
    if(!data){
        res.send({msg:"email is invalid"})
    }
    else{

        if(password!=data.password){
           return res.send({msg:"Incorrent password"})
        }
        else{

        }

       const token=jwt.sign({username:data.username,
                  id:data._id,
                  email:data.email,
                  password:data.password,
                  image:data.image,
                     
        }, "xyz")
        
        res.send({token:token,username:data.username,
            id:data._id,
            email:data.email,
            password:data.password,
            image:data.image,})
       
    }
})


route.get("/userdata",auth,(req,res)=>{

    res.send(userdata)
   // console.log(userdata)
})


route.post("/userupdate",upload.single("image"),auth, async(req,res)=>{



    if(req.file){
        
   const result= await cloudinary.v2.uploader.upload(req.file.path,{quality:"20"})
   console.log(result)


   
   const data=await c1.findOne({email:userdata.email});
   
       await c1.updateOne({_id:req.body.id},{$set:{image:result.secure_url,username:req.body.Profilename,password:req.body.Password}})
       // .then(()=>res.send("user is updated")).catch(()=>{res.send("user is not updated")})

      

       const token= jwt.sign({username:data.username,
           id:data._id,
           email:data.email, 
           password:data.password,
           image:result.secure_url,
              
   }, "xyz")
       res.send(token)

      

    }
    else{
         
   const data=await c1.findOne({email:userdata.email});
   
   await c1.updateOne({_id:req.body.id},{$set:{username:req.body.Profilename,password:req.body.Password}})
   // .then(()=>res.send("user is updated")).catch(()=>{res.send("user is not updated")})

  

   const token= jwt.sign({username:data.username,
       id:data._id,
       email:data.email, 
       password:data.password,
       image:data.image,
          
}, "xyz")
   res.send(token)

    }

       



//     const data=await c1.findOne({email:userdata.email});
//     if(!req.files){
//        const func= async()=>{
//         await c1.updateOne({_id:req.body.id},{$set:{username:req.body.Profilename,password:req.body.Password}})
//         // .then(()=>res.send("user is updated")).catch(()=>{res.send("user is not updated")})

//         const data=await c1.findOne({email:userdata.email});

//         const token= jwt.sign({username:data.username,
//             id:data._id,
//             email:data.email, 
//             password:data.password,
//             image:data.image,
               
//     }, "xyz")
//         res.send(token)

//        }  
//        func();    
//                      }
    

//                      else if(req.files.image.name==data.image){
//                         //res.send("this image is avalible in file")
//                         await c1.updateOne({_id:req.body.id},{$set:{username:req.body.Profilename,password:req.body.Password}})
//                         // .then(()=>res.send("user is updated")).catch(()=>{res.send("user is not updated")})
                
//                         const data=await c1.findOne({email:userdata.email});
                
//                         const token= jwt.sign({username:data.username,
//                             id:data._id,
//                             email:data.email,
//                             password:data.password,
//                             image:data.image,
                               
//                     }, "xyz")
//                         res.send(token)
//                     }
                

      
    
//     else{

//         const file=req.files.image;  
//         file.mv(`${process.cwd()}/client1/public/profile/${file.name}`,async(error)=>{
//             if(error){
//                 console.log("this is error")
//             }
//             else{
//                 await c1.updateOne({_id:req.body.id},{$set:{username:req.body.Profilename,password:req.body.Password,image:req.files.image.name}})
//                 // .then(()=>res.send("user is updated")).catch(()=>{res.send("user is not updated")})
    
//                 const data=await c1.findOne({email:userdata.email});
    
//                 const token= jwt.sign({username:data.username,
//                     id:data._id,
//                     email:data.email,
//                     password:data.password,
//                     image:data.image,
                       
//             }, "xyz")
//                 res.send(token)
                
//             }
//         });

//     }
   
//     // const file=req.files.image;
//     // const data=await c1.findOne({email:userdata.email});
//     // if(file.name==data.image){
//     //     res.send("this image is avalible in file")
//     // }
//     // else{
//     //     res.send("this image is not avalible in file")
//     // }
    


    
    

   
})


module.exports=route;