import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from '../src/routes/ProtectedRoute';
import Register from '../src/auth/Register';
import { AuthProvider } from "../src/context/AuthContext";

import Home from "../src/landing/home";

const Dashboard = () => <h1>Dashboard</h1>

export default function App (){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
 
