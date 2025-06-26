import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LocationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState("");

  const firstName = location.state?.firstName || "User"; // fallback if no name

  const handleNext = () => {
    if (locationInput.trim() !== "") {
      navigate("/jobtitle", { state: { firstName, location: locationInput } });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoBar}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>RealSkillz</span>
      </div>

      <div style={styles.card}>
        <h2 style={styles.heading}>
          Welcome, {firstName}! What's your location?
        </h2>
        <p style={styles.subheading}>
          See people, jobs, and news in your area.
        </p>

        <label style={styles.label}>Location*</label>
        <input
          style={styles.input}
          placeholder="Chennai, Tamil Nadu, India"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />

        <button
          style={{
            ...styles.button,
            backgroundColor:
              locationInput.trim() === "" ? "#ccc" : "#0a66c2",
            cursor: locationInput.trim() === "" ? "not-allowed" : "pointer",
          }}
          disabled={locationInput.trim() === ""}
          onClick={handleNext}
        >
          Next
        </button>
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
  card: {
    backgroundColor: "#fff",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subheading: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "25px",
    border: "none",
  },
};

export default LocationPage;