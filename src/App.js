import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginLayout from './components/auth/LoginLayout.tsx';
import Login from './components/auth/Login/Login.tsx';
import Registration from './components/auth/Registration/Registration.tsx';
import ForgotPassword from './components/auth/ForgotPassword/ForgotPassword.tsx';
import HomePage from './components/home/HomePage.tsx';
import NotFound from './components/notfound/NotFound.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
function App() {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Route>
      <Route path="/" element={<Dashboard/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
