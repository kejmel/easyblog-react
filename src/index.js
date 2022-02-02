import React, { createContext } from 'react';
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import RegistrationForm from './components/Auth/RegistrationForm';
import LoginForm from './components/Auth/LoginForm';
import PublicContent from './components/PublicContent/Main'
import UserContent from './components/UserContent/Main'
import ModeratorContent from './components/ModeratorContent/Main'
import AdminContent from './components/AdminContent/Main'
import reportWebVitals from './reportWebVitals';
import Logout from './components/Auth/Logout';


 const rootElement = document.getElementById('root')
  render(<App/>, rootElement);

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route path="registration" element={<RegistrationForm />} />
    //     <Route path="login" element={<LoginForm />} />
    //     <Route path="public-content" element={<PublicContent />} />
    //     <Route path="user-content" element={<UserContent />} />
    //     <Route path="moderator-content" element={<ModeratorContent />} />
    //     <Route path="admin-content" element={<AdminContent />} />
    //     <Route path="logout" element={<Logout />} />
    //   </Routes>
    // </BrowserRouter>,
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
