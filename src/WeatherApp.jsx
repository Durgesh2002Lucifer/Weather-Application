import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 29.19,
        tempMax: 29.19,
        tempMin: 29.19,
        seaLevel: 999,
        humidity: 81,
        feelsLike: 35.51,
        weather: "overcast clouds",
    });


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>

            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>

    )
}