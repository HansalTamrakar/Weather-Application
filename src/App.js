import logo from "./logo.svg";
// import './App.css';
import "./index.css";
import Header from "./Components/Header";
import Lastdays from "./Components/Lastdays";
import WeatherCard from "./Components/WeatherCard";
import { mockWeatherData } from "./utils/watherdata";
import { useEffect, useState } from "react";

const App = () => {
  const [city, setCity] = useState(null);
  console.log(city)
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 w-full">
      <Header city={city} setCity={setCity} />
      <Lastdays city={city} />
      <WeatherCard data={mockWeatherData} city={city} />
    </div>
  );
};

export default App;
