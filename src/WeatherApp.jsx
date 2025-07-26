import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null); // No default city

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Please search for a city to view weather.
        </p>
      )}
    </div>
  );
}
