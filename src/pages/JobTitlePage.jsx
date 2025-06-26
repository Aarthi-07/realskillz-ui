import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobTitlePage = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  const handleContinue = () => {
    if (jobTitle.trim() !== "" || isStudent) {
      navigate("/dashboard"); // replace with your final page route
    }
  };

  return (
    <div style={styles.container}>
      {/* App Name */}
      <div style={styles.logoBar}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>RealSkillz</span>
      </div>

      {/* Main Content */}
      <div style={styles.card}>
        <h2>Your profile helps you discover new people and opportunities</h2>

        <label style={styles.label}>Most recent job title*</label>
        <input
          type="text"
          placeholder="Ex: Software Engineer"
          style={styles.input}
          value={jobTitle}
          onChange={(e) => {
            setJobTitle(e.target.value);
            setIsStudent(false); // unselect "student" if typing manually
          }}
        />

        <div
          style={{
            ...styles.studentBox,
            backgroundColor: isStudent ? "#e8f0fe" : "#f3f2ef",
            border: isStudent ? "2px solid #0a66c2" : "1px solid #ccc",
          }}
          onClick={() => {
            setIsStudent(true);
            setJobTitle("");
          }}
        >
          I’m a student
        </div>

        <button
          style={{
            ...styles.button,
            backgroundColor: jobTitle.trim() || isStudent ? "#0a66c2" : "#ccc",
            cursor: jobTitle.trim() || isStudent ? "pointer" : "not-allowed",
          }}
          disabled={!jobTitle.trim() && !isStudent}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#f3f2ef",
    padding: "1rem",
    minHeight: "100vh",
  },
  logoBar: {
    paddingLeft: "1.5rem",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoIcon: {
    fontSize: "22px",
  },
  logoText: {
    color: "#0a66c2",
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  studentBox: {
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
  },
};

export default JobTitlePage;
