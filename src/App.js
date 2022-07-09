import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Top from "./Components/Top";
import Input from "./Components/Input";
import CityTIme from "./Components/CityTIme";
import TemperatureDetails from "./Components/TemperatureDetails";
import Forecast from "./Components/Forecast";
import getFormattedWeather from "./Services/Api";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "Lahore" });
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      const data = await getFormattedWeather({ ...query, unit }).then(
        (data) => {
          setWeather(data);
        }
      );
    };
    fetchingData();
  }, [query, unit]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = unit === "imperial" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <Top setQuery={setQuery}/>
      <Input setQuery={setQuery} unit={unit} setUnit={setUnit} />
      {weather && (
        <div>
          <CityTIme weather={weather} />
          <TemperatureDetails weather={weather}/>
          <Forecast time="Daily Forcast" items={weather.daily}/>
          <Forecast time="Hourly Forcast" items={weather.hourly}/>
        </div>
      )}
    </div>
  );
}

export default App;
