import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "102cefa1d994976669b5caa675b97e8c";

let getWeatherInfo = async () => {
  try {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      feels_like: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description
    };
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

    
    let handleChange =(evt)=>{
      setCity(evt.target.value);
      if (error) setError(false);
    }
    let handleSubmit = async(evt) =>{
        try{
           evt.preventDefault();
           setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
           setError(false);
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <>
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit} action="">
                <TextField id="City" label="City Name" variant="standard" required value={city} onChange={handleChange}/>
                <br />
                <br />
                <Button variant="contained" size='small' type='submit'>
                 Search
                </Button>
                {error && <p style={{color:"red"}}>No such place available!</p>}
                <br />
                <br />
            </form>
        </div>    
        </>
    )
}
