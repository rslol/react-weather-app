import axios from "axios";

const API_KEY = "94e3bf100dd40bfcfdf2db91f4b6d843";
/* Template strings use back ticks, variable is defined with ${varName} */
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

/* We do this to keep our Action Types consistent */
export const FETCH_WEATHER = "FETCH_WEATHER";

/* Action Creator */
/* Takes USA city from search bar */
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  /* How to make a GET request with Axios */
  const request = axios.get(url);
  /* Actions return an object */
  return {
    /* That always, ALWAYS have a type */
    type: FETCH_WEATHER,
    /* Remember that the payload is the data being passed through */
    payload: request
  };
}
