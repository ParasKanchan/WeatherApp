import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const initURL = "https://th.bing.com/th/id/OIP.L31y6yICMRLkWs44G706nwAAAA?r=0&rs=1&pid=ImgDetMain";
  const hot_URL = "https://services.meteored.com/img/article/the-heat-is-rising-with-climate-change-but-a-new-study-says-the-heat-index-is-rising-much-faster-1711300928899_1280.jpeg";
  const rain_URL = "https://th.bing.com/th/id/OIP.ubOJn6707zT-N4amxWLhYwHaEo?r=0&rs=1&pid=ImgDetMain";
  const cold_URL = "https://th.bing.com/th/id/OIP.wl_Yk9WH-M_xoyg51_tOjAHaFi?r=0&rs=1&pid=ImgDetMain";

  const toCelsius = (kelvin) => {
    return kelvin ? (kelvin - 273.15).toFixed(2) : "N/A";
  };

  const imageUrl = info.humidity > 80
    ? rain_URL
    : info.temp && (info.temp - 273.15) > 19
      ? hot_URL
      : cold_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageUrl}
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city || "Unknown City"}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature : {toCelsius(info.temp)}°C</p>
              <p>Min Temperature : {toCelsius(info.temp_min)}°C</p>
              <p>Max Temperature : {toCelsius(info.temp_max)}°C</p>
              <p>Feels Like : {toCelsius(info.feels_like)}°C</p>
              <p>Humidity : {info.humidity ?? "N/A"}%</p>
              <p>This weather can be described as {info.weather || "N/A"} & feels like {toCelsius(info.feels_like)}°C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

