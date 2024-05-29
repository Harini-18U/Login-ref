import React, { useRef, useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === "root" && password === "12345678") {
      setMessage("Logged In Successfully");
      setMessageColor("green");
    } else {
      setMessage("Invalid Username and Password");
      setMessageColor("red");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default LoginPage;