
import Searchbox from './ SearchBox';
import Display from './InfoDisplay'; 
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        City: "Rajasthan",
        feelslike: 36.25,
        temp: 32.84,
        tempMax: 32.84,
        tempMin: 32.84,
        temphumidity: 51,
        weather: "broken clouds"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <Searchbox updateInfo={updateInfo} />
            <Display info={weatherInfo} />
        </div>
    );
}
