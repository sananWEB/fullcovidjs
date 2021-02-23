const express=require("express")
const app=express();
const mongo=require("mongoose");
require("./models/doner_rigister")

const donorss=mongo.model("donors")
cloudinary=require("cloudinary")
require("./cloudinary")
const cors=require("cors")
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken")
const nodemiler=require("nodemailer")
require("dotenv").config();
require("./models/request")
const upload=require("./multer")
const db2=mongo.model("request")
const auth=require("./auth");

const { db } = require("./models/city");
require("./models/city"); 
const db1=mongo.model("city")

require("./models/foodrequest")

const requestfood=mongo.model("requestfood")
//middileware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });

  //database connection
  require("./mongo")
 
  //routes   

  app.use("/",require("./routes/adminregister"))
  
   
 
app.post("/addcity",upload.single("filee"),async(req,res)=>{

  console.log(req.file)
  const result=await cloudinary.v2.uploader.upload(req.file.path,{quality: "20"})
  console.log(result)



   
      const data= new db1();
   data.name=req.body.catogary
   data.bgimg=result.secure_url
   data.lockdown=req.body.lock

  data.save().then(()=>{res.send("data is saved")}).catch((error)=>{res.send("data is not saved")})
   

})


app.get("/getdata",async(req,res)=>{
  const data= await db1.find();
  res.send(data)

})


app.post("/delete",async(req,res)=>{

  console.log(req.body.id)

  await db1.findByIdAndDelete(req.body.id).then(()=>{res.send("delete")}).catch(()=>{res.send("not delete")})
})


app.post("/getid",async(req,res)=>{
  const data= await db1.findById(req.body.id);
  res.send(data)
  //console.log(data)


})

 app.post("/updateeeee",upload.single("image"),async(req,res)=>{



  //
    

if(!req.file){
 
  
  db1.findByIdAndUpdate({_id:req.body.id},{$set:{name:req.body.status,lockdown:req.body.status1}}).then(()=>{res.send("update")}).catch(res=>{
    res.send("not update")
  })
 
}
else{
  const result= await cloudinary.v2.uploader.upload(req.file.path,{quality:"20"});
  db1.findByIdAndUpdate({_id:req.body.id},{$set:{name:req.body.status,lockdown:req.body.status1,bgimg:result.secure_url}}).then(()=>{res.send("update")}).catch(res=>{
    res.send("not update")
  })
}
 })


 app.post("/donors",async(req,res)=>{

  const data1= await donorss.find({email:req.body.email})
  console.log()

  if(data1.length==1){
    res.send("This Email is already exist")
  }
  else{

    const data= new donorss();
   data.name=req.body.name;
   data.email=req.body.email;
   data.password=req.body.password;
   data.number=req.body.number;

   data.save().then(()=>{res.send("Registration Success")}).catch(()=>{
     res.send("Registration Failed")
   })
  console.log(req.body)


  }

  
 })

 app.post("/signinn",async(req,res)=>{


  const emaill= await donorss.find({email:req.body.email})

 //console.log(emaill.length)

  if(emaill.length==0){
    return res.send({msg:"Enter Email is Invalid"})
  }
        if(emaill[0].password!=req.body.password){
          res.send({msg:"Incorrent Password"})
        }
          else{
            // res.send("log In Success")
    const token=jwt.sign({
     id:emaill[0].id,
     name:emaill[0].name,
     number:emaill[0].number,
     email:emaill[0].email,
     password:emaill[0].password,
     login:true
   },"xyz")
   
   res.send({
     msg:"log In Success",
     token:token,
     id:emaill[0].id,
     name:emaill[0].name,
     email:emaill[0].email,
     password:emaill[0].password,
     number:emaill[0].number,
     login:true
   })
}
})
       
app.get("/userdata",auth,(req,res)=>{

  res.send(userdata)
 // console.log(userdata)
})

app.post("/request",async(req,res)=>{

  const data1= await donorss.find()
  const arry=data1.map((i)=>{
    return i.email
  })
  const emails=arry.join(",")
const data=new db2();

data.name=req.body.name;
data.email=req.body.email;
data.number=req.body.number;
data.address=req.body.address;
data.massage=req.body.massage;
            
data.save().then(()=>{res.send("Request has be listed")})

let trans=nodemiler.createTransport({
  service:"gmail",
  auth:{
      user:process.env.ID,
      pass:process.env.PASS
  }
}) 
//step2
let mailOptions={
 from:'covidweb87@gmail.com',
  to:emails,
  subject:"New Blood Request",
  text:`Name: ${req.body.name}
Email: ${req.body.email}
Number: ${req.body.number}
Address: ${req.body.address}
Message: ${req.body.massage}
  `
};

//step 3

trans.sendMail(mailOptions,(err,data)=>{
  if(err){
      console.log("something is wrong email does not send !",err)
  }
  else{
      console.log("Hurry! Email Send!!!!!")
  }
});



//console.log(req.body)
})

app.get("/getrequest",async(req,res)=>{

  const data=await db2.find();

  res.send(data)

})


require("./models/useracceptrequest")
const db3=mongo.model("useracceptrequest")

app.post("/useracceptrequest",async(req,res)=>{

  const data=await db2.findById(req.body.id);
              

  const data2= new db3();

  data2.name=data.name
  data2.useremail=req.body.email
  data2.donoremail=data.email
  data2.address=data.address
  data2.number=data.number
  data2.massage=data.massage
  data2.save().then(()=>{res.send({msg:"Request accepted"});

           db2.findByIdAndDelete(req.body.id).then(()=>{console.log("delte")})

          donorss.find({email:req.body.email}).then((res)=>{
        //console.log(res[0].email)
       //console.log(data.email)
        let trans=nodemiler.createTransport({
          service:"gmail",
          auth:{
              user:process.env.ID,
              pass:process.env.PASS
          }
        }) 
        //step2
        let mailOptions={
         //  from:"muhammad.sanan.bsse-2018a@cecosian.edu.pk",
         from:'covidweb87@gmail.com',
          to:data.email,
          // cc:"sanankhan16@gmail.com",
          // bcc:"sanankhan16@gmail.com", 
          subject:"testing nodemiler to send mail",
          text:`your Request has accepted by ${res[0].name}
          if you want to contents him/his Below is their Details
          Email: ${res[0].email}
          Number: ${res[0].number}
          `
        };
        
        //step 3
        
        trans.sendMail(mailOptions,(err,data)=>{
          if(err){
              console.log("something is wrong email does not send !",err)
          }
          else{
              console.log("Hurry! Email Send!!!!!")
          }
        });
        
          
          })
                

})
  

})


app.post("/useracceptrequest2",async(req,res)=>{

  const data=await requestfood.findById(req.body.id);
              

  const data2= new db3();

  data2.name=data.name
  data2.useremail=req.body.email
  data2.donoremail=data.email
  data2.address=data.address
  data2.number=data.number
  data2.massage=data.massage
  data2.massage=data.massage
  data2.select=data.select
  data2.save().then(()=>{res.send({msg:"Request accepted"});

           requestfood.findByIdAndDelete(req.body.id).then(()=>{console.log("delte")})

          donorss.find({email:req.body.email}).then((res)=>{
        //console.log(res[0].email)
       //console.log(data.email)
        let trans=nodemiler.createTransport({
          service:"gmail",
          auth:{
              user:process.env.ID,
              pass:process.env.PASS
          }
        }) 
        //step2
        let mailOptions={
         //  from:"muhammad.sanan.bsse-2018a@cecosian.edu.pk",
         from:'covidweb87@gmail.com',
          to:data.email,
          // cc:"sanankhan16@gmail.com",
          // bcc:"sanankhan16@gmail.com", 
          subject:"",
          text:`your Request has accepted by ${res[0].name}
          if you want to contents him/his Below is their Details
          Email: ${res[0].email}
          Number: ${res[0].number}
          `
        };
        
        //step 3
        
        trans.sendMail(mailOptions,(err,data)=>{
          if(err){
              console.log("something is wrong email does not send !",err)
          }
          else{
              console.log("Hurry! Email Send!!!!!")
          }
        });
        
          
          })
                

})
  

})


app.get("/useracceptrequestview", async(req,res)=>{

  await db3.find().then((ress)=>{res.send(ress)});
  
})

app.post("/deleteuserrequest",async(req,res)=>{

  await db3.findByIdAndDelete(req.body.id).then(()=>{res.send({msg:"Request Remove"})})
  
})

app.post("/updateuser",async(req,res)=>{

  
  const data=req.body;
  console.log(data[1])
await donorss.updateOne({_id:data[1]},{$set:{name:data[0].name,number:data[0].number,password:data[0].password}})

const token= jwt.sign({
  name:data[0].name,
  id:data[1],
  email:data[0].email, 
  password:data[0].password,
  number:data[0].number,
  login:true
     
}, "xyz")
res.send(token)

console.log({
  name:data[0].name,
  id:data[1],
  email:data[0].email, 
  password:data[0].password,
  number:data[0].number,
  login:true
})


})


app.get("/getinfo",async(req,res)=>{

const data1=await donorss.find();
const data2=await db1.find();
const data3=await db2.find();

res.send({donors:data1.length,citys:data2.length,request:data3.length})

})


app.get("/getdonors",async(req,res)=>{

  const data=await donorss.find();
  res.send(data)
  
  })
  app.post("/deletedonors",async(req,res)=>{
     donorss.findByIdAndDelete(req.body.id).then(()=>{res.send("delete")});
    
    
    })
  


    app.post("/food",async(req,res)=>{


      const data1= await donorss.find()
      const arry=data1.map((i)=>{
        return i.email
      })
      const emails=arry.join(",")


      const data=new requestfood()

      data.name=req.body.data1.name,
      data.email=req.body.data1.email,
      data.address=req.body.data1.address,
      data.number=req.body.data1.number,
      data.massage=req.body.data1.massage,
      data.select=req.body.selet,
      console.log(req.body)
      data.save().then((ress)=>{res.send({msg:"Request has been sent!"});
    
      let trans=nodemiler.createTransport({
        service:"gmail",
        auth:{
            user:process.env.ID,
            pass:process.env.PASS
        }
      }) 
      //step2
      let mailOptions={
       from:'covidweb87@gmail.com',
        to:emails,
        subject:"New Food Request",
        text:`Name: ${req.body.data1.name}
              Email: ${req.body.data1.email}
              Number: ${req.body.data1.number}
              Address: ${req.body.data1.address}
              Message: ${req.body.data1.massage}
             Food Seleted:${req.body.selet}
        `
      };
      
      //step 3
      
      trans.sendMail(mailOptions,(err,data)=>{
        if(err){
            console.log("something is wrong email does not send !",err)
        }
        else{
            console.log("Hurry! Email Send!!!!!")
        }
      });
      
    
    })


      


    })


    app.get("/getfood",async(req,res)=>{

      const data=await requestfood.find();
      res.send(data)


    })
      

app.listen( process.env.PORT||5000,()=>{console.log("server is ON!")})
// console.log(process.cwd())
 
  