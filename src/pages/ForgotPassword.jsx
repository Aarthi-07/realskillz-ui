import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🚀</span>
          <span style={styles.logoText}>RealSkillz</span>
        </div>
        <div style={styles.navRight}>
          <button onClick={() => navigate("/signin")} style={styles.linkBtn}>Sign in</button>
          <button onClick={() => navigate("/name")} style={styles.joinBtn}>Join now</button>
        </div>
      </div>

      {/* Center Card */}
      <div style={styles.card}>
        <h2>Forgot password</h2>
        <input
          style={styles.input}
          placeholder="Email or Phone"
        />
        <p style={styles.text}>
          We’ll send a verification code to this email or phone number if it matches an existing RealSkillz account.
        </p>
        <button style={styles.nextBtn}>Next</button>
        <button style={styles.backBtn} onClick={() => navigate("/signin")}>Back</button>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>RealSkillz © 2025</p>
        <div style={styles.footerLinks}>
          <a href="/">User Agreement</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Community Guidelines</a>
          <a href="/">Cookie Policy</a>
          <a href="/">Copyright Policy</a>
          <a href="/">Send Feedback</a>
          <a href="/">Language</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#0a66c2",
  },
  logoIcon: {
    fontSize: "22px",
  },
  logoText: {
    color: "#0a66c2",
  },
  navRight: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#555",
    fontSize: "14px",
    cursor: "pointer",
  },
  joinBtn: {
    border: "1px solid #0a66c2",
    padding: "5px 14px",
    borderRadius: "25px",
    color: "#0a66c2",
    backgroundColor: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
  card: {
    maxWidth: "400px",
    margin: "5rem auto",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #0a66c2",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "1.5rem",
  },
  nextBtn: {
    width: "100%",
    backgroundColor: "#0a66c2",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "25px",
    border: "none",
    marginBottom: "0.8rem",
    cursor: "pointer",
  },
  backBtn: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    background: "none",
    border: "none",
    color: "#0a66c2",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    fontSize: "12px",
    marginTop: "3rem",
    color: "#555",
  },
  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
  },
};

export default ForgotPassword;