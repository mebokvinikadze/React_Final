import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const categories = [
  { key: "technology", label: "Technology" },
  { key: "business", label: "Business" },
  { key: "sports", label: "Sports" },
  { key: "health", label: "Health" },
  { key: "entertainment", label: "Entertainment" },
];

const Navbar = ({ setCategory, toggleDarkMode, user, handleLogout }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setCategory(category);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
        <div className={styles.logo} tabIndex={0} onClick={() => handleCategoryClick("general")} aria-label="Agenda app Home">
          <span className={styles.logoIcon}>📰</span>
          <span className={styles.logoText}>Agenda app</span>
        </div>
        <ul className={styles.navLinks}>
          {categories.map(cat => (
            <li key={cat.key}>
              <button
                className={styles.navLink}
                onClick={() => handleCategoryClick(cat.key)}
                disabled={!user}
                aria-disabled={!user}
              >
                {cat.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className={styles.navLink}
              onClick={() => user && navigate("/weather")}
              disabled={!user}
              aria-disabled={!user}
            >
              Weather
            </button>
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.darkModeBtn} onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <span className={styles.darkModeIcon}>🌓</span>
          </button>
          {user ? (
            <div className={styles.userSection}>
              <span className={styles.username}>{user.username}</span>
              <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <button className={styles.loginBtn} onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
