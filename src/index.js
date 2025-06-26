import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1060659369805-lhftpqch5th32tm27mt69jldm76gjsu8.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
