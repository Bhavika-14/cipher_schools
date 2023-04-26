import React, { useState,useEffect } from "react"
import ChangePassword from "./changePassword"
import ChangeProfile from "./changeProfile"
import ChangeInterests from "./changeInterests"

export default function ProfilePage(){
    let [changePassword,showChangePassword]=useState(false)
    let [changeProfile,showChangeProfile]=useState(false)
    let [changeInterests,showChangeInterests]=useState(false)

    return(
        <div style={{backgroundColor:"ButtonShadow"}}>
            <div></div>
            <div className="container-fluid">
                <div>
                    navbar
                </div>
                <div>
                    hello

                </div>
                <div className="container">
                    <div className="my-2">
                        <div className="my-1 heading">ABOUT ME</div>
                        <div className="row my-2">
                            <textarea className="col-12 my-1 rounded-2" placeholder="Add something about you." rows="5" style={{backgroundColor:"white"}}></textarea>
                        </div>
                    </div>
                    <hr className="m=0"/>
                    <div>
                        ciphermap
                    </div>
                    <div>
                        onweb
                    </div>
                    <div>
                        professional
                    </div>
                    <hr />
                    <div className="py-2">
                        
                        <span>PASSWORD & SECURITY</span>
                        <span><button className="btn btn-warning m-0 px-4 float-end heading">Change</button></span>
                        <div className="my-2">
                            <div className="my-1 heading">Password</div>
                            <div className="row my-2">
                                <input type="password" className="col-12 my-1 rounded-2 border-0" placeholder=".........." rows="1" style={{backgroundColor:"white"}} />
                            </div>

                        </div>
                        
                    </div>
                    <hr />
                    <div className="py-2">
                        <span>INTERESTS</span>
                        <span><button className="btn btn-warning m-0 px-4 float-end heading">Edit</button></span>
                    </div>
                </div>
            </div>
            {changePassword && <ChangePassword showChangePassword={showChangePassword} user={user} setUser={setUser} />}
            {changeProfile && <ChangeProfile />}
            {changeInterests && <ChangeInterests />}
        </div>
    )
}