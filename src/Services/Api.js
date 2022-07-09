import { DateTime } from "luxon";

const API_KEY = "2b16f29548a487aa37fdf466dba85d79";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeather = (info, params) => {
  const url = new URL(BASE_URL + "/" + info);
  url.search = new URLSearchParams({ ...params, appid: API_KEY });
  return fetch(url).then((response) => response.json());
};

const formatedCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    sys: { country, sunrise, sunset },
    name,
    dt,
    weather,
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
    details,
    icon,
  };
};

const formatedForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

const getFormattedWeather = async (params) => {
  const formatCurrentWeather = await getWeather("weather", params).then(
    formatedCurrentWeather
  );
  const { lat, lon } = formatCurrentWeather;
  const formatForcastWeather = await getWeather("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: params.units,
  }).then(formatedForecastWeather);
  return { ...formatCurrentWeather, ...formatForcastWeather };
};

const formatLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

const iconUrl = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeather;

export {formatLocalTime, iconUrl}
