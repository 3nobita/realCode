import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './auth/Register';
import { AuthProvider } from './context/AuthContext';

const Dashboard = () => <h1>Dashboard</h1>

export default function App (){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="register" element={<Register/>}/>
                    <Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
