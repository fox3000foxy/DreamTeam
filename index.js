const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
});

app.use(express.static("./public"))
app.use(express.bodyParser())

app.post('/',(req,res)=>{
  console.log(req.body)
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})