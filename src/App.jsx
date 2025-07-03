import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import WeatherPage from "./components/WeatherPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import './styles/themes.css';

export const App = () => {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!user && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); 
    }
  }, [user]);

  return (
    <div>
      <Navbar setCategory={setCategory} toggleDarkMode={toggleDarkMode} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} darkMode={darkMode} />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} darkMode={darkMode} />} />
        <Route path="/" element={<NewsBoard category={category} darkMode={darkMode} />} />
        <Route path="/weather" element={<WeatherPage darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

export default App;
