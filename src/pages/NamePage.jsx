import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NamePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Please enter your email or phone number.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      navigate("/details");
    }
  };

  return (
    <div style={styles.container}>
      {/* Top Logo */}
      <div style={styles.logoBar}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>RealSkillz</span>
      </div>

      {/* Center Card */}
      <div style={styles.card}>
        <h1 style={styles.heading}>Make the most of your professional life</h1>

        <input
          placeholder="Email or phone number"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}

        <div style={{ position: "relative" }}>
          <input
            placeholder="Password"
            style={styles.input}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={styles.show} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        {errors.password && <div style={styles.error}>{errors.password}</div>}

        <div style={styles.checkboxWrap}>
          <input type="checkbox" />
          <label style={styles.checkboxLabel}>Keep me logged in</label>
        </div>

        <p style={styles.termsText}>
          By clicking <strong>Continue</strong> to join or sign in, you agree to RealSkillz's{" "}
          <a href="/" style={styles.link}>User Agreement</a>,{" "}
          <a href="/" style={styles.link}>Privacy Policy</a>, and{" "}
          <a href="/" style={styles.link}>Cookie Policy</a>.
        </p>

        <button style={styles.joinButton} onClick={handleContinue}>
          Agree & Join
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
  heading: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "1.5rem",
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  show: {
    position: "absolute",
    right: "10px",
    top: "12px",
    fontSize: "13px",
    color: "#0a66c2",
    cursor: "pointer",
  },
  checkboxWrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "14px",
  },
  checkboxLabel: {
    marginLeft: "6px",
  },
  termsText: {
    fontSize: "12px",
    color: "#555",
    marginTop: "20px",
    lineHeight: "1.6",
  },
  link: {
    textDecoration: "none",
    color: "#0a66c2",
  },
  joinButton: {
    width: "100%",
    backgroundColor: "#0a66c2",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "-8px",
    marginBottom: "10px",
  },
};

export default NamePage;