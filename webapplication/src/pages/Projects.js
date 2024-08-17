import React,{useState} from "react";

const Projects=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const CollectData=()=>{
        console.warn(name,email,password);
    }

    return(
        <div className="register">
            <h1>Projects</h1>

            <input className="inputBox" type="text"placeholder="Enter Name"
            value={name} onChange={(e)=>setName(e.target.value)}/>

            <input className="inputBox" type="text"placeholder="Enter Email" 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input className="inputBox" type="text"placeholder="Enter Password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={CollectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default Projects