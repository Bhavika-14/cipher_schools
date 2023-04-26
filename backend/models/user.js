var mongoose=require('mongoose')
var Schema =mongoose.Schema
var UserSchema=new Schema(
    {
        first_name:{type:String ,  maxLength:50},
        last_name:{type:String ,  maxLength:50},
        email:{type:String ,  maxLength:100},
        password:{type:String, minLength:8},
        interests:{type:Array},
        followers:{type:Array},
        mobile:{type:String, maxLength:10}

    }
)

module.exports=mongoose.model('User',UserSchema)