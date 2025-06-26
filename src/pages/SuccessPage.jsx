import React from "react";

const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt="Success"
        style={styles.icon}
      />
      <h2>Account created successfully!</h2>
      <p>Welcome to the platform. You can now log in and get started.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial",
  },
  icon: {
    width: "80px",
    marginBottom: "1rem",
  },
};

export default SuccessPage;
