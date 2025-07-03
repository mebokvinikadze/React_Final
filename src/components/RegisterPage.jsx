import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

const RegisterPage = ({ setUser, darkMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateGmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!]).{8,}$/.test(password);

  const handleRegister = () => {
    if (username.length < 4) {
      setError("Username must be at least 4 characters.");
      return;
    }

    if (!validateGmail(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters, contain an uppercase letter, a number, and a '!'.");
      return;
    }

    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setError("Username already taken.");
      return;
    }

    const newUser = { username, password, email };
    users.push(newUser);

    setUser(newUser);
    navigate("/");
  };

  return (
    <div className={`login-page ${darkMode ? "dark" : "light"}`}>
      <h2 className={darkMode ? "text-light" : "text-dark"}>Register</h2>
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
      <div className="input-group">
        <input
          type="email"
          placeholder="Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={darkMode ? "input-dark" : "input-light"}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className={darkMode ? "btn-dark" : "btn-light"} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
