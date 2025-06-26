import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
  if (!password.trim()) {
    alert("Please enter a password.");
  } else {
    console.log("Password saved:", password);
    navigate("/success");
  }
};

  return (
    <div style={styles.container}>
      <h2>Create a strong password</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleContinue} style={styles.button}>
        Continue
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial",
  },
  input: {
    display: "block",
    margin: "1rem auto",
    padding: "10px",
    width: "250px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0a66c2",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PasswordPage;
