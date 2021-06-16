const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
});

app.post('/',(req,res)=>{
  console.log(req.body)
  res.redirect("/")
})

app.use(express.static("./public"))
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})