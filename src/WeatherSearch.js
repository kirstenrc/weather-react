import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b0f53c0693e9322889a32ea02b229166";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    console.log(apiUrl);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div class="row mb-5">
          <div class="col-9">
            <input
              type="search"
              class="form-control"
              placeholder="Search for a city..."
              onChange={updateCity}
            />
          </div>
          <div class="col-3">
            <button type="submit" class="btn btn-secondary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2 className="city-name">{weather.name}</h2>
        <ul>
          <li className="temperature">{Math.round(weather.temperature)}°F</li>
          <li className="description">{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}m/hr</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
