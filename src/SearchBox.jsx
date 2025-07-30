import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false); // Boolean, not string
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "45d7e03a8eae9a1e295ee73517f3ef5d";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            const result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                seaLevel: jsonResponse.main.sea_level || "N/A",
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false);
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>⚠️ No such place found in API!</p>}
            </form>
        </div>
    );
}
