import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { useFormik } from "formik";

export default function RegistrationForm() {
  const [registrationComplete, setRegistrationComplete] = useState("");
  const [nieco, setNieco] = useState("");
  const [registrationError, setRegistrationError] = useState(null);

  useEffect(() => {
   // console.log(registrationError);
  }, [nieco, registrationComplete, registrationError]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit(values) {
      axios
        .post("http://localhost:3030/api/auth/signup", {
          username: values.username,
          email: values.email,
          password: values.password,
          roles: ["user", "moderator"],
        })
        .then((res) => {
          setRegistrationComplete(true);
        })
        .catch((error) => {
          setRegistrationError(error.response.data.message);
        });
    },
  });
  if (!registrationComplete) {
    return (
      <div className="registration-form">
        <form onSubmit={formik.handleSubmit}>
        {registrationError && (
            <h3 style={{"color": "red"}}>{registrationError}</h3>
        )}
          <h1>Registration</h1>
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
            type="text"
            name="email"
            placeholder="Email"
            className={formik.errors.email ? "error" : null}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <span className="errorText">{formik.errors.email}</span>
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

  if (registrationComplete) {
    return (
      <div className="registration-form">
        <h1>Thank you for your registration</h1>
      </div>
    );
  }
}
