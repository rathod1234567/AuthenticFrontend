import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Componentes/Pages/Home/Home';
import Login from './Componentes/Pages/Auth/Login';
import Register from './Componentes/Pages/Auth/Register';
import ForgetPassword from './Componentes/Pages/Auth/ForgetPassword';
import VerifyEmail from './Componentes/Pages/Auth/VerifyEmail';
import ResetPassword from './Componentes/Pages/Auth/ResetPassword';
import Navbar from './Componentes/Navbar/Navber';

import AuthProvider from './Componentes/AuthProviders/AuthProvider'; 

function App() {
  return (
    <AuthProvider>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/verify-email/:token' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
