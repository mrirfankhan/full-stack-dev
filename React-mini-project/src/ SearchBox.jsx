import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
    const [city, setCity] = useState("");

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!city) {
            alert("Please enter a city name");
            return;
        }

        try {
            const apiKey = "c19f48fe183e04cafd71254495601baf";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.cod !== 200) {
                alert("City not found!");
                return;
            }

            let data = {
                City: responseJson.name,
                temp: responseJson.main.temp,
                tempMin: responseJson.main.temp_min,
                tempMax: responseJson.main.temp_max,
                temphumidity: responseJson.main.humidity,
                feelslike: responseJson.main.feels_like,
                weather: responseJson.weather[0].description
            };

            updateInfo(data);
            setCity("");
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div className='searchBox'> 
            <h3>Search box For weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                />
                <br /><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
