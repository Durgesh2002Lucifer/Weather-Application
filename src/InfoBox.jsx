import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/WbSunny'; // correct import for "Sunny"
import './InfoBox.css';

export default function InfoBox({ info }) {
    const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=1000&auto=format&fit=crop&q=60";
    const RAIN_URL = "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=1000&auto=format&fit=crop&q=60";

    // Determine weather icon and image
    let icon, image;
    if (info.humidity > 80) {
        icon = <ThunderstormIcon />;
        image = RAIN_URL;
    } else if (info.temp > 15) {
        icon = <SunnyIcon />;
        image = HOT_URL;
    } else {
        icon = <AcUnitIcon />;
        image = COLD_URL;
    }

    return (
        <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {icon}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                        <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        <p>Sea Level = {info.seaLevel}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
