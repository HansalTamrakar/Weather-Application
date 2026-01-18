


import { useEffect, useState } from "react";

const WeatherCard = ({ city }) => {
  const [zipData, setZipData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = "149813d2322b2a00eb5a6efb2cc54bb9";

  // Fetch ZIP → lat/lon
  useEffect(() => {
    if (!city) return;

    const fetchZip = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.zippopotam.us/IN/${city}`);
        const data = await res.json();
        setZipData(data);
      } catch (err) {
        console.error("ZIP error", err);
      }
    };

    fetchZip();
  }, [city]);

  // Fetch weather
  useEffect(() => {
    if (!zipData?.places?.length) return;

    const { latitude, longitude } = zipData.places[0];

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`
        );
        const data = await res.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error("Weather error", err);
      }
    };

    fetchWeather();
  }, [zipData]);

  // Loading state
  if (loading || !weatherData) {
    return (
      <h1 className="text-center mt-40 text-xl text-gray-500">
        Loading weather...
      </h1>
    );
  }

  return (
    <div className="w-[500px] mx-auto mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">

      {/* ICON */}
      <div className="flex justify-center -mt-16">
        <div className="w-28 h-28 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather"
            className="w-20 h-20"
          />
        </div>
      </div>

      {/* CITY */}
      <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
        {weatherData.name}, {weatherData.sys.country}
      </h2>

      {/* TEMP */}
      <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
        {(weatherData.main.temp - 273.15).toFixed(1)}°C
      </p>

      {/* CONDITION */}
      <p className="text-gray-500 dark:text-gray-300 mt-1">
        {weatherData.weather[0].description}
      </p>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div>
          <p className="text-gray-400 dark:text-white text-xl">Feels Like</p>
          <p className="font-semibold  dark:text-white text-xl">
            {(weatherData.main.feels_like - 273.15).toFixed(1)}°C
          </p>
        </div>

        <div>
          <p className="text-gray-400  dark:text-white text-xl">Humidity</p>
          <p className="font-semibold  dark:text-white text-xl">
            {weatherData.main.humidity}%
          </p>
        </div>

        <div>
          <p className="text-gray-400  dark:text-white text-xl">Wind</p>
          <p className="font-semibold  dark:text-white text-xl">
            {(weatherData.wind.speed * 3.6).toFixed(1)} km/h
          </p>
        </div>

        <div>
          <p className="text-gray-400  dark:text-white text-xl">Pressure</p>
          <p className="font-semibold  dark:text-white text-xl">
            {weatherData.main.pressure} hPa
          </p>
        </div>
      </div>

      {/* SUN */}
      <div className="flex justify-between  dark:text-white text-xl mt-6  text-gray-500 ">
        <span>
          🌅 {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        </span>
        <span>
          🌇 {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </span>
      </div>

    </div>
  );
};

export default WeatherCard;
