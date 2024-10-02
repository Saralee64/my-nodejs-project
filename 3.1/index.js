import express from "express";
const app  = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h1>Hello,World!</h1>");
});

app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1><p>My neme is Saralee</p>");
    
});

app.get("/contact",(req,res) => {
    res.send("<h1>Contact Me</h1><p>Phone : 0625061375</p>");
});

app.listen(3000 , () => {
    console.log("SERVER RUNNING ON PORT 3000.");
});


