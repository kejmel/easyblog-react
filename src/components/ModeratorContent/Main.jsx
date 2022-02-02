import axios from "axios";
import React, { useState } from "react";

export default function Main() {

  const[content, setContent] = useState("");
  const[error, setError] = useState("");

   axios
    .get("http://localhost:3030/api/test/mod", {
      headers: {
        "x-access-token": localStorage.getItem('access-token'),
      },
    })
    .then((res) => {
      setContent(res.data);
    })
    .catch((error) => {
      setError(error.response.data.message)
    });

  return (
    <div>
      {error && (
            <h1 style={{"color": "red"}}>{error}</h1>
        )}
      <h1>{content}</h1>
    </div>
  );
}
