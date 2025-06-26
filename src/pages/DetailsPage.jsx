import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  const handleContinue = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!lastName.trim()) newErrors.lastName = "Please enter your last name.";

    setErrors(newErrors);

    // Proceed only if no errors
    if (Object.keys(newErrors).length === 0) {
      navigate("/location", { state: { firstName } }); // Replace with your next route
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoBar}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>RealSkillz</span>
      </div>

      <h1 style={styles.heading}>Make the most of your professional life</h1>

      <div style={styles.card}>
        <div>
          <input
            placeholder="First name"
            style={{ ...styles.input, borderColor: errors.firstName ? "red" : "#ccc" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>

        <div>
          <input
            placeholder="Last name"
            style={{ ...styles.input, borderColor: errors.lastName ? "red" : "#ccc" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>

        <button style={styles.button} onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#f3f2ef",
    minHeight: "100vh",
    padding: "2rem",
  },
  logoBar: {
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    paddingLeft: "1.5rem",
    marginBottom: "2rem",
  },
  logoIcon: {
    fontSize: "24px",
  },
  logoText: {
    color: "#0a66c2",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  error: {
    fontSize: "13px",
    color: "red",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    backgroundColor: "#0a66c2",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default DetailsPage;
