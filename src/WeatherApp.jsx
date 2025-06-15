import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
       city : "Pilibhit",
       feels_like : 299.57,
       humidity :  76,
       temp :  299.57,
       temp_max :  299.57,
       temp_min : 299.57,
       weather : "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo( newInfo);
    }

    return(
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    )
}