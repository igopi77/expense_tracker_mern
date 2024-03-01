const express = require('express')
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const static = express.static('static');
const port = 3000;



//App web server
app.use('/',static);


app.get("/hi",(req,res)=>{
  //  console.log(req.path);
   // res.send("Hello")
    res.json({
      messge : "developement process"
    })
    console.log(req.query);
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