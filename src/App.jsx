import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import RegistrationForm from "./components/Auth/RegistrationForm";
import LoginForm from "./components/Auth/LoginForm";
import PublicContent from "./components/PublicContent/Main";
import UserContent from "./components/UserContent/Main";
import ModeratorContent from "./components/ModeratorContent/Main";
import AdminContent from "./components/AdminContent/Main";
import Logout from "./components/Auth/Logout";
import Navigation from "./components/Navigation.jsx";

export const UserContext = React.createContext({
  userLoggedIn: false,
  setUserLogin: () => {},
});

function App() {
  const [userLoggedIn, setUserLogin] = useState(false);
  const value = { userLoggedIn, setUserLogin };
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="public-content" element={<PublicContent />} />
          <Route path="user-content" element={<UserContent />} />
          <Route path="moderator-content" element={<ModeratorContent />} />
          <Route path="admin-content" element={<AdminContent />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
