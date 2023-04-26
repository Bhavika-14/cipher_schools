var express=require('express')
var router=express.Router()
var User=require('../models/user')

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email:email}).exec()
        if(user){
            if(user.password==password){
            res.send({...user,
                message:"user is in record",
               
            })
            }
            else{
                res.send("password is incorrect")
            }
        }
        else{
            if(err){
                res.send(err)
            }
            else{
                res.send("user does not exist")
            }
        }
    })
router.post("/register",async(req,res)=>{
    const user=await User.findOne({email:req.body.email}).exec()
        if(user){
            res.send({...user,
                "message":"user already exist",
            })
        }else {
            const user = new User(req.body)
            const result=user.save()
                if(result){
                    res.send({...user,
                        message:"user registered sucessfully"
                })
                }else{
                    console.log(result)
                }
            }
}) 

router.put("/updateProfile/:id",async(req,res)=>{
    const new_profile = User.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec()
    if(new_profile){
        res.send({...new_profile,message:"Profile Updated"})
    }
    else{
        res.send({message:"Profile not updated"})
    }
})

router.put("/updatePassword/:id",async(req,res)=>{
    const new_password = User.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec()
    if(new_password){
        res.send({...new_password,message:"Password Updated"})
    }
    else{
        res.send({message:"Password not updated"})
    }
})

router.put("/updateInterests/:id",async(req,res)=>{
    const new_interests = User.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec()
    if(new_interests){
        res.send({...new_interests,message:"Profile Updated"})
    }
    else{
        res.send({message:"Profile not updated"})
    }

})

router.get("/followers/:id",async(req,res)=>{
    const user = User.findById(req.params.id).exec()
    if(user){
        res.send(user.followers)
    }
    else{
        res.send({message:"user does not exist"})
    }

})

module.exports=router
