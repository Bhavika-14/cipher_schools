import React,{ useState,useEffect } from "react"
import axios from "axios"

export default function ChangePassword({showChangeProfile,user,setUser}){
    const [firstName,setFirstName]=useState(user.first_name)
    const [email,setEmail]=useState(user.last_name)
    const [lastName,setLastName]=useState(user.email)
    const [mobile,setMobile]=useState("")

    var new_profile={
        first_name:firstName,
        last_name:lastName,
        email:email,
        mobile:mobile
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        const result=await axios.put(`http:localhost:3000/updatePassword/${user._id}`,new_profile)
        if(result){
            setUser(result.data)
        }
        showChangeProfile(false)

    }
    return(
        <form className="p-2 updatefeature" onSubmit={onSubmit}>
            <div className="row mb-3">
                <label for="firstname" className="col-form-label">First Name</label>
                <input type="text" id="firstname" className="form-control" placeholder={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div className="row mb-3">
                <label for="lastname" className="col-form-label">Last Name</label>
                <input type="lastname" id="laastname" className="form-control" placeholder={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </div>
            <div className="row mb-3">
                <label for="email" className="col-form-label">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="row mb-3">
                <label for="mobile" className="col-form-label">Mobile Number</label>
                <input type="text" id="mobile" className="form-control" placeholder="Enter your Mobile Number" onChange={(e)=>setMobile(e.target.value)} />
            </div>
            <span className="m-2">
                <button className="float-end btn btn-dark text-white px-2" onClick={()=>showChangeProfile(false)}>
                    Cancel
                </button>
            </span>
            <span className="m-2">
                <button type="submit" className="float-end btn btn-warning text-white px-2">
                    Save
                </button>
            </span>
           
        </form>
    )
}