import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    // Registered user check
    const registeredUser = JSON.parse(
      localStorage.getItem("entreSkillUser")
    );

    if (!registeredUser) {
      setError("Please register first");
      return;
    }

    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      login(registeredUser);

      localStorage.setItem(
        "entreSkillCurrentUser",
        JSON.stringify(registeredUser)
      );

      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-teal-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to EntreSkill Hub
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-950 text-white py-3 rounded-lg transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?
          <Link
            to="/register"
            className="text-teal-800 font-semibold ml-2"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;