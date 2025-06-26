import React from "react";
import { useNavigate } from "react-router-dom";

const EmailPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logo}>
        <span style={styles.logoBlue}>Real</span><span style={styles.logoBox}>Skillz</span>
      </div>

      {/* Title */}
      <h2 style={styles.title}>Make the most of your professional life</h2>

      {/* Card */}
      <div style={styles.card}>
        <input style={styles.input} placeholder="Email or phone number" />
        <div style={{ position: "relative" }}>
          <input style={styles.input} placeholder="Password" type="password" />
          <span style={styles.show}>Show</span>
        </div>

        <div style={styles.checkboxWrap}>
          <input type="checkbox" />
          <label>Keep me logged in</label>
        </div>

        <p style={styles.terms}>
          By clicking <strong>Agree & Join</strong> or Continue, you agree to RealSkillz's&nbsp;
          <a href="/" style={styles.link}>User Agreement</a>,
          <a href="/" style={styles.link}>Privacy Policy</a>, and
          <a href="/" style={styles.link}>Cookie Policy</a>.
        </p>

        <button style={styles.primaryBtn} onClick={() => navigate("/dashboard")}>
          Agree & Join
        </button>

        <hr style={{ margin: "20px 0" }} />

        <button style={styles.outlineBtn}>Continue with Google</button>
        <button style={styles.outlineBtn}>Continue with Microsoft</button>

        <p style={{ marginTop: "1rem", fontSize: "14px" }}>
          Already on RealSkillz? <a href="/signin" style={styles.link}>Sign in</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#f3f2ef",
    padding: "2rem",
    minHeight: "100vh",
    textAlign: "center",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "2rem",
    marginBottom: "2rem",
  },
  logoBlue: { color: "#0072b1" },
  logoBox: {
    backgroundColor: "#0072b1",
    color: "#fff",
    padding: "2px 6px",
    borderRadius: "3px",
    marginLeft: "2px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "1.5rem",
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  show: {
    position: "absolute",
    right: "10px",
    top: "14px",
    fontSize: "12px",
    color: "#0a66c2",
    cursor: "pointer",
  },
  checkboxWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    marginBottom: "1rem",
  },
  terms: {
    fontSize: "12px",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  link: {
    textDecoration: "none",
    color: "#0a66c2",
    margin: "0 4px",
  },
  primaryBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0a66c2",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
  outlineBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "25px",
    border: "1px solid #000",
    backgroundColor: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default EmailPage;