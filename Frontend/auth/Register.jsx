import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../API/axios";
import {userAuth} from "../context/AuthContext";

const Register = ()=>{
    const [form ,setForm] = useState({email: '', password:''});
    const {login} = userAuth();
    const Navigate = useNavigate();

    const submit =async (e)=>{
        e.preventDefault();
        const res = await api.post('/auth/register',form);
        
        login(res.data)
        Navigate('/homePage');
    }

    return(
        <form onSubmit={submit}>
            <input placeholder="email" onChange={(e)=> setForm({... form , email:e.target.value})}/>
            <input placeholder="password" onChange={(e)=> setForm({... form , email:e.target.value})}/>
            <button>Register</button>
        </form>
    )
}

export default Register;