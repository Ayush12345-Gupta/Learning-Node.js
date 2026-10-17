const express=require("express");
//first import the data of users from the MOCK_DATA.json file
const users=require("./MOCK_DATA.json")
const fs=require("fs");
const app=express();
const port=8000;

//Middleware
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
  // console.log("Hello from Middleware 1"); 
   fs.appendFile("log.txt", `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}`,(err,data)=>{
    next();
   })
  // return res.json({msg: "Hello from Middleware 1"});
  next(); 
});


app.use((req,res,next)=>{
  // console.log("Hello from Middleware 2"); 
  // return res.json({msg: "Hello from Middleware 2"});
  //return res.end("Hey");
  next();
});

//Routes
app.get('/users',(req,res)=>{
  const html=`
  <ul>
   ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`;
   res.send(html);
})

//REST API
app.get('/api/users',(req,res)=>{
   // console.log('i am in get route', req.myUserName);
      res.setHeader("X-MyName","Ayush Gupta");// custom header
  //Always add X to the custom header
    
    return res.json(users);
});

// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user) =>user.id===id);
//     return res.json(user);

// }); 

app
.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user) =>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    //Edit user with id
    return res.json ({status: "Pending"});
})
.delete((req,res)=>{
    //Delete user with id
    return res.json({status: "Pending"});
});

app.post("/api/users",(req,res)=>{
    const body=req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{

    return res.json({status: "success", id: users.length });
    });

});

app.listen(port,()=> console.log(`Server Started at Port: ${port}`));