import { useState } from "react";
import '../styles/WeatherPage.css';

const WeatherPage = ({ darkMode }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY_WEATHER;

  const fetchWeatherData = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError(null);

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      const weather = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error("Unable to fetch forecast data");
      }

      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div className={`weather-page ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="title">Weather</h1>
      <div className="input-container">
        <input
          className="city-input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="fetch-btn" onClick={fetchWeatherData}>
          Get Weather
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>Current Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}

      {forecastData && (
        <div className="forecast-info">
          <h2>4-Day Forecast</h2>
          <ul className="forecast-list">
            {forecastData.list.slice(0, 4).map((entry, index) => (
              <li key={index} className="forecast-item">
                {entry.dt_txt} - {entry.main.temp} °C - {entry.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
