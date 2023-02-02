const express=require("express");

const app=express();
app.use("/user", require("./routes/user"))
app.set("view engine","ejs")
app.listen(5002,(err)=>err?console.log(err):console.log("server running"))