import SearchBox from './SearchBox.jsx';
import { useState } from 'react';
import InfoBox from './InfoBox.jsx';
export default function WeatherApp() {
    const [weatherInfo , setweatherInfo] = useState({
        city: "Delhi",
        feelslike: 15.72,
        humidity: 77,
        temp: 16.05,
        tempMax: 16.05,
        tempMin: 16.05,
        weather: "mist",
    });

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    };
    return (
        <div style ={{ textAlign: 'center' }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}