import { useState } from "react";

export function SignUpForm(){
    const [formData,setFormData]=useState({});
    const handleChange = (event)=>{ 
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="enter name" name="name" onChange={handleChange}></input>
                <br></br><br></br>
                <input type='password' placeholder="enter password" name="password" onChange={handleChange}></input>
                <br></br><br></br>
                <input type='text' placeholder="enter phone" name="phone" onChange={handleChange}></input>
                <br></br><br></br>
                <input type='email' placeholder="enter email" name="email" onChange={handleChange}></input>
                <br></br><br></br>
                <input type='submit' value='Register'></input>
            </form>
        </div>
    );
}