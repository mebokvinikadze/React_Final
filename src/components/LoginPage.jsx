import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import users from "../data/users.json";
import '../styles/LoginPage.css'

const LoginPage = ({ setUser, darkMode  }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = () => {
      const user = users.find((user) => user.username === username && user.password === password);
  
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
      };
  
    return (
        <div className={`login-page ${darkMode ? "dark" : "light"}`}>
          <h2 className={darkMode ? "text-light" : "text-dark"}>Login</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={darkMode ? "input-dark" : "input-light"}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={darkMode ? "input-dark" : "input-light"}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className={darkMode ? "btn-dark" : "btn-light"} onClick={handleLogin}>
            Login
          </button>

          <div>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
        </div>
      );
    };
    
    export default LoginPage;