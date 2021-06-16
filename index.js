const express = require("express");
const bodyParser = require("body-parser");
const { Krypt, unKrypt } = require("./myKrypt")
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
/*app.get('/test',(req,res)=>{
  res.send(Krypt("mdp1234",3))
})
console.log(unKrypt("xqcmwgfdjytpfkp1bkh2ooy3rmc4§3"))*/

app.use(express.static("./public"))
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})