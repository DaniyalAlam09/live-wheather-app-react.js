const API_KEY = "2b16f29548a487aa37fdf466dba85d79";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeather = (info, params) => {
  const url = new URL(BASE_URL + "/" + info);
  url.search = new URLSearchParams({ ...params, appid: API_KEY });
  return fetch(url).then((response) =>response.json());
};


const formatedCurrentWeather =(data)=>{
    const  {
        coord:{lon,lat},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        wind:{speed},
        sys:{country, sunrise,sunset},
        name,
        dt,
        weather,

        } = data
        const  {main: details, icon} = weather[0];

        return{
            lat,lon,temp,feels_like,temp_min,temp_max,humidity,speed,country, sunrise,sunset,name,dt,details, icon
        }
}

const getFormattedWeather =async(params)=>{
    const formatCurrentWeather =await getWeather('weather', params).then(formatedCurrentWeather)
    return formatCurrentWeather
}