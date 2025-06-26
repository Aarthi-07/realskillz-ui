import React from "react";
import { FaNewspaper, FaChalkboardTeacher, FaUsers, FaBriefcase } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <span style={styles.logoIcon}>🚀</span>
          <span style={styles.logoText}>RealSkillz</span>
        </div>
        <div style={styles.navRight}>
          <div style={styles.navItem}>
            <FaNewspaper style={styles.navIcon} />
            <span>Articles</span>
          </div>
          <div style={styles.navItem}>
            <FaChalkboardTeacher style={styles.navIcon} />
            <span>Learning</span>
          </div>
          <div style={styles.navItem}>
            <FaUsers style={styles.navIcon} />
            <span>People</span>
          </div>
          <div style={styles.navItem}>
            <FaBriefcase style={styles.navIcon} />
            <span>Jobs</span>
          </div>

          {/* Vertical Divider */}
          <div style={styles.navDivider}></div>

          <a href="/name" style={styles.navLinkBold}>Join Now</a>
          <button onClick={() => navigate("/signin")} style={{ ...styles.navLinkBold, background: "none", border: "none" }}>
            Sign In
          </button>
        </div>
      </nav>

      {/* Login Card */}
      <div style={styles.pageWrapper}>
        <div style={styles.card}>
          <h2>Welcome to your professional community</h2>

          <div style={styles.buttonWrapper}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Google Sign-In Success", credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <button style={styles.emailButton} onClick={() => navigate("/signin")}>
            Sign in with Email
          </button>

          <p style={{ margin: "10px 0" }}>or</p>
          <p>New to our platform? <a href="/name">Join now</a></p>

          <p style={{ 
  fontSize: "12px", 
  color: "#555", 
  marginTop: "20px", 
  lineHeight: "1.6" 
}}>
  By clicking <strong>Continue</strong> to join or sign in, you agree to RealSkillz's&nbsp;
  <a href="/" style={{ textDecoration: "none", color: "#0a66c2", margin: "0 4px" }}>User Agreement</a>,
  <a href="/" style={{ textDecoration: "none", color: "#0a66c2", margin: "0 4px" }}>Privacy Policy</a>, and
  <a href="/" style={{ textDecoration: "none", color: "#0a66c2", margin: "0 4px" }}>Cookie Policy</a>.
</p>
    </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ccc",
    fontFamily: "Arial",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoIcon: {
    fontSize: "20px",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0a66c2",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
  },
  navLinkBold: {
    textDecoration: "underline",
    color: "#0a66c2",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  pageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 70px)",
    backgroundColor: "#f7f7f7",
  },
  card: {
    width: "400px",
    padding: "2rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  buttonWrapper: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  emailButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 20px",
    border: "1px solid black",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  terms: {
    fontSize: "12px",
    color: "#555",
    marginTop: "20px",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    color: "#000",
    cursor: "pointer",
  },
  navIcon: {
    fontSize: "18px",
    marginBottom: "4px",
  },
  navDivider: {
    borderLeft: "1px solid #ccc",
    height: "35px",
    margin: "0 10px",
  },
};

export default WelcomePage;