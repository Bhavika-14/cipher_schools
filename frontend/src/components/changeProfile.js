import React,{ useState,useEffect } from "react"

export default function ChangePassword({showChangePassword,user,setUser}){
    const [firstName,setFirstName]=useState("")
    const [email,setEmail]=useState("")
    const [lastName,setLastName]=useState("")
    const [mobile,setMobile]=useState("")
    
    const onSubmit=async(e)=>{
        e.preventDefault()
        const result=await axios.put(`http:localhost:3000/updatePassword/${user._id}`,{password:newPassword})
        if(result){
            setUser(result.data)
        }
        showChangePassword(false)

    }
    return(
        <form className="p-2" onSubmit={onSubmit}>
            <div className="row mb-3">
                <label for="currentPassword" className="col-form-label">Current Password</label>
                <input type="password" id="currentPassword" className="form-control" placeholder="Current Password" />
            </div>
            <div className="row mb-3">
                <label for="newPassword" className="col-form-label">New Password</label>
                <input type="password" id="newPassword" className="form-control" placeholder="New Password" onChange={(e)=>setNewPassword(e.target.value)} />
            </div>
            <div className="row mb-3">
                <label for="confirmPassword" className="col-form-label">Confirm Password</label>
                <input type="password" id="confirmPassword" className="form-control" placeholder="Conform Password" />
            </div>
            <span className="m-2">
                <button className="float-end btn btn-dark text-white px-2" onClick={()=>showChangePassword(false)}>
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