const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Author = require("./models/authorModel");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const static = express.static('static');
const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/practice').then(() => {
  console.log("connection succesfull");
}).catch((e) => {
  console.log("failed");
})






//App web server
app.use('/',static);


app.get("/hi",async (req,res)=>{
  //  console.log(req.path);
   // res.send("Hello")
   const author= await Author.find();
   res.status(202).json(author);
    console.log(author);
})

app.post("/hi",async (req,res) => {
  const {name,email,phone} = req.body;
  const author = await Author.create({
    name,
    email,
    phone
  })
  if(!author){
    throw new Error("EMpthy");
  }
  res.status(201).json(author);
  console.log(author);
});

app.post("/hi/:id", async(req,res) => {
  const {id} = req.params;
  const {name,email} = req.body;
  const author = await Author.findById(id);
  if(!author){
    res.status(401).json({
      message : "Author not found"
    })
    return ;
  }
  author.name = name;
  author.email = email;
  await author.save();
  res.json(author);
})

app.get("/todos", async (req,res) => {

//   // const {id:todoId} = req.params;
//   // const todos = fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//   // .then(response => response.json())
//   // .then(json => res.json(json));
//   // console.log(todos)

//   const todos = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => res.json(json));
//   console.log(todos)

//   // res.json({
//   //   todoId : req.params
//   // });
// // res.json(todos);

// //  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
// //  console.log(response);
// //  res.json(response);
// })


  try {
    const todos = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => res.json(json));
      console.log(todos)
  } catch (error) {
    res.status(503).json({
      error:"API call failed"
    })
  }

})

app.get("/todos/:id",async (req,res) => {
  const {id : todoId} = req.params;
  res.status(200).json({
    id : todoId
  });
})
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})











// const express = require("express");

// const app = express();


// const static = express.static("static");
// const port = 3000;



// app.use("/",static);

// app.get("/hi",(req,res) => {
//     //console.log(req.url);
//   //  res.send("Enga ariya ull varatha");
//     //res.status(201);
//     // res.status(201).json({
//     //     message:"Second Entry",

//     // });
//     console.log(req.query);
//   //  res.status(201);
// })
// app.listen(port,() =>{
//     console.log(`Running at a server ${port}`);
// })