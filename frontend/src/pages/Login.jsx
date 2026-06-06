import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          Admin Login
        </h1>

        <p className="login-subtitle">
          Login to access Bulk Mail Dashboard
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="login-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;