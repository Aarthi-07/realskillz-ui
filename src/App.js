import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NamePage from "./pages/NamePage";
import EmailPage from "./pages/EmailPage";
import PasswordPage from "./pages/PasswordPage";
import SuccessPage from "./pages/SuccessPage";
import SignInPage from "./pages/SignInPage";
import ForgotPassword from "./pages/ForgotPassword";
import DetailsPage from "./pages/DetailsPage";
import LocationPage from "./pages/LocationPage";
import JobTitlePage from "./pages/JobTitlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/jobtitle" element={<JobTitlePage />} />

      </Routes>
    </Router>
  );
}

export default App;
