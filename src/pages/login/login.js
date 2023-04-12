import React, { useState } from "react";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError("");
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          setError("");
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>
      <input
        type="email"
        className="w-64 px-4 py-2 mb-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-64 px-4 py-2 mb-2 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="w-64 px-4 py-2 text-white bg-blue-500 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
