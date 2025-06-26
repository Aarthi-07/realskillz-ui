import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
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

  const handleSignIn = () => {
    if (validate()) {
      navigate("/details");
    }
  };

  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logoBar}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>RealSkillz</span>
      </div>

      <div style={styles.card}>
        <h2>Sign in</h2>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("Google Sign-In Success", credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <button style={styles.appleButton}>Sign in with Apple</button>

        <div style={styles.separator}>
          <hr style={styles.line} />
          <span style={{ margin: "0 8px", color: "#666" }}>or</span>
          <hr style={styles.line} />
        </div>

        <input
          style={styles.input}
          placeholder="Email or phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}

        <div style={{ position: "relative" }}>
          <input
            style={styles.input}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={styles.show} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        {errors.password && <div style={styles.error}>{errors.password}</div>}

        <a href="/forgot" style={styles.forgot}>Forgot password?</a>

        <div style={styles.checkboxWrap}>
          <input type="checkbox" />
          <label>Keep me logged in</label>
        </div>

        <button style={styles.signInBtn} onClick={handleSignIn}>
          Sign in
        </button>
      </div>

      <div style={styles.footer}>
        New to RealSkillz? <a href="/name" style={styles.link}>Join now</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#fff",
    padding: "2rem",
  },
  logoBar: {
    paddingLeft: "1rem",
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
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  appleButton: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "25px",
    border: "1px solid #888",
    fontSize: "14px",
    cursor: "pointer",
  },
  separator: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
  },
  line: {
    flex: 1,
    borderTop: "1px solid #ccc",
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
  forgot: {
    display: "block",
    marginBottom: "10px",
    color: "#0a66c2",
    fontSize: "13px",
    textDecoration: "none",
  },
  checkboxWrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "13px",
    gap: "6px",
  },
  signInBtn: {
    width: "100%",
    backgroundColor: "#0a66c2",
    color: "#fff",
    padding: "12px",
    borderRadius: "25px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "-6px",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#0a66c2",
  },
};

export default SignInPage;