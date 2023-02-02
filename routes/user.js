const express= require("express")


const useRrouter= express.Router();
const users =require("../Userlist")
//get user
useRrouter.get("/",(req, res)=>res.send({listuser:users}))



//delete user


//update user

useRrouter.get("/boutique",(req, res)=>{
    const date=new Date();
    const hours=date.getHours();
    if ( hours> 9 && hours< 12) {
        res.render("opened") 
        
    }
    else{
        res.render("closed");
    }
})
//add user


module.exports= useRrouter;