import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({ info }) {
  const initURL = "https://th.bing.com/th/id/OIP.L31y6yICMRLkWs44G706nwAAAA?r=0&rs=1&pid=ImgDetMain";
  let hot_URL= "https://services.meteored.com/img/article/the-heat-is-rising-with-climate-change-but-a-new-study-says-the-heat-index-is-rising-much-faster-1711300928899_1280.jpeg";
  let rain_URL = "https://th.bing.com/th/id/OIP.ubOJn6707zT-N4amxWLhYwHaEo?r=0&rs=1&pid=ImgDetMain";
  let cold_URL = "https://th.bing.com/th/id/OIP.wl_Yk9WH-M_xoyg51_tOjAHaFi?r=0&rs=1&pid=ImgDetMain";
 
  return (
    <div className="InfoBox">
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? rain_URL : (Number(info.temp) - 273.15).toFixed(2)>19 ? hot_URL:cold_URL}
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature : {(Number(info.temp) - 273.15).toFixed(2)}°C</p>
              <p>Min Temperature : {Number(info.tempMin-273).toFixed(2)}&deg;C</p>
              <p>Max Temperature : {Number(info.tempMax-273).toFixed(2)}&deg;C</p>
              <p>Feels Like : {Number(info.tempFeelsLike-273).toFixed(2)}&deg;C</p>
              <p>Humidity : {info.humidity}%</p>
              <p>This weather can be described as {info.weather} & feels like {Number(info.tempFeelsLike-273).toFixed(2)}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
