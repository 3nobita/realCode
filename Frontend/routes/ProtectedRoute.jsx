import {Navigate} from "react-router-dom";
import useAuth, { userAuth } from "../context/AuthContext"

const ProtectRoute = ({children,role})=>{
    const {user} = userAuth();

    if(!user) return <Navigate to = "/login"/>;

    if(role && user.role !== role){
        return <Navigate to ='/unknown'/>
    }

    return children;   
}

export default ProtectRoute;
