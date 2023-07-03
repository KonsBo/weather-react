import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

// export default function Weather(props) {
//   function handleResponse(response) {
//     alert(
//       `The weather in ${response.data.name} is ${Math.round(
//         response.data.main.temp
//       )} °C`
//     );
//   }
//   let apiKey = "bde2a78fb83f6711e5b697e805f6cfad";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(handleResponse);
//   return (
//     <Audio
//       height="80"
//       width="80"
//       radius="9"
//       color="red"
//       ariaLabel="loading"
//       wrapperStyle
//       wrapperClass
//     />
//   );
// }

export default function Weather() {
  let city;
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      date: response.data.date,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  let apiKey = "bde2a78fb83f6711e5b697e805f6cfad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div className="Weather">
      <form className="weather-app-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="form-control"
              placeholder="Search a city"
              autoComplete="off"
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary shadow-sm form-control"
            />
          </div>
          <div class="col-3">
            <input
              type="button"
              value="My Location"
              className="LocationButton form-control"
            />
          </div>
        </div>
      </form>

      <div class="overview">
        <h1>
          {weather.city}
          <ul>
            <li>
              <small>Last Updated</small>
            </li>
            <li>{weather.date}</li>
          </ul>
        </h1>
      </div>
      <div className="second-card">
        <div className="weather-temperature">
          <strong>{weather.temperature}</strong>
          <span className="units">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>

        <div className="icon-description">
          {weather.description}
          <br />
          <img src={weather.icon} alt={weather.description} />
        </div>

        <div className="card-body">
          <ul>
            <li>Humidity:{weather.humidity}</li>
            <li>Wind:{weather.wind}km/h</li>
          </ul>
        </div>

        <p className="footer">
          <a
            href="https://github.com/JackieTsakie/weather_project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Konstantina Boua
        </p>
      </div>
    </div>
  );
}
