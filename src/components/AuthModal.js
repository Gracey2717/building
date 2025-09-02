// src/components/AuthModal.jsx
import React, { useState } from "react";
import { signUp, logIn } from "./Auth";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login"); // "login" | "signup"
  const navigate = useNavigate();

  if (!isOpen) return null;

  async function handleLogin() {
    const user = await logIn(email, password);
    if (user) {
      onClose();
      navigate("/projects");
    }
  }

  async function handleSignUp() {
    const user = await signUp(email, password);
    if (user) {
      onClose();
      navigate("/projects");
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Tabs */}
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Shared form */}
        <div className="tab-content">
          <input
            type="email"
            placeholder="Email"
            className="modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {activeTab === "login" ? (
            <button className="btn log-in" onClick={handleLogin}>
              Log In
            </button>
          ) : (
            <button className="btn sign-up" onClick={handleSignUp}>
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
