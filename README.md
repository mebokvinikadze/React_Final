# 📰 BTU News Portal

A modern, responsive news and weather web application built with **React** and **Vite**.  
Enjoy a professional UI, smooth navigation, and real-time news and weather updates.

---

## 🚀 Features

- **User Authentication**: Login required to access news and weather.
- **News Categories**: Technology, Business, Sports, Health, Entertainment, and General.
- **Weather Page**: Search and view current weather and forecasts for any city.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Looks great on desktop, tablet, and mobile.
- **Modern UI**: Smooth transitions, professional color scheme, and accessible navigation.

---

## 🛠️ Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**

   Create a `.env` file in the root and add your GNews API key:
   ```
   VITE_API_KEY=your_gnews_api_key_here
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 👤 Demo User Accounts

| Username | Password     |
|----------|-------------|
| user1    | password123 |
| user2    | password456 |
| qweqwe   | qweqwe      |

> **Example login:**  
> Username: `user1`  
> Password: `password123`

---

## 🗂️ Project Structure

```
src/
  components/    # React components (Navbar, NewsBoard, NewsItem, etc.)
  data/          # Static data (users.json)
  styles/        # CSS and CSS modules
  App.jsx        # Main app
  main.jsx       # Entry point
```

---

## ✨ Main Functions

- **Login/Logout**: Secure access to news and weather.
- **Category Navigation**: Switch between news categories via the navbar.
- **Weather Search**: Enter a city to get weather info and forecast.
- **Dark Mode**: Toggle for comfortable reading at night.
- **Responsive Layout**: Optimized for all devices.

---

## 📦 Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [GNews API](https://gnews.io/)
- [OpenWeatherMap API](https://openweathermap.org/) (if used for weather)

---

## 📄 License

MIT License

---

> **Made with ❤️ for BTU React Final Project**
