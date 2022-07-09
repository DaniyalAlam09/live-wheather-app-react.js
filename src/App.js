import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Top from "./Components/Top";
import Input from "./Components/Input";
import CityTIme from "./Components/CityTIme";
import TemperatureDetails from "./Components/TemperatureDetails";
import Forecast from "./Components/Forecast";
import getFormattedWeather from "./Services/Api";

function App() {
  const fetchingData = async () => {
    const data = await getFormattedWeather({ q: "Lahore" });
    console.log(data);
  };
  fetchingData();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <Top />
      <Input />
      <CityTIme />
      <TemperatureDetails />
      <Forecast time="Daily Forcast" />
      <Forecast time="Hurly Forcast" />
    </div>
  );
}

export default App;
