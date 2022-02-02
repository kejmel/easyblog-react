import React, { useContext } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import { UserContext } from "../../App.jsx";

export default function LoginForm() {
  
  const { userLoggedIn, setUserLogin } = useContext(UserContext);

  const [loginSuccessful, setLoginSuccessful] = useState("");
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    // console.log(registrationError);
  }, [loginSuccessful]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit(values) {
      axios
        .post("http://localhost:3030/api/auth/signin", {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem("access-token", res.data.accessToken);
          setLoginSuccessful(true);
          setUserLogin(true);
        })
        .catch((error) => {
          setLoginError(error.response.data.message);
        });
    },
  });
  if (!loginSuccessful) {
    return (
      <div className="registration-form">
        <form onSubmit={formik.handleSubmit}>
          {loginError && <h3 style={{ color: "red" }}>{loginError}</h3>}
          <h1>Log in</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={formik.errors.username ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <span className="errorText">{formik.errors.username}</span>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={formik.errors.password ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <span className="errorText">{formik.errors.password}</span>
          ) : null}
          <button type="submit">Send message</button>
        </form>
      </div>
    );
  }

  if (loginSuccessful) {
    return (
      <div className="registration-form">
        <h1>You are logged in</h1>
      </div>
    );
  }
}
