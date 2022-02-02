import React, { useContext } from "react";
import { UserContext } from "../../App";

export default function Logout() {
  const { userLoggedIn, setUserLogin } = useContext(UserContext);
  localStorage.removeItem("access-token");
  setUserLogin(false);
  return <h1>User logged out</h1>;
}
