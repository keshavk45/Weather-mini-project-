import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "a9db37b42e07f36665f0c28bb4c4856d";

    let getWeatherInfo = async () => {
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        if (response.ok && jsonResponse.main && jsonResponse.weather) {
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            setError(false);
            return result;
        } else {
            setError(true);
            return null;
        }
    } catch (err) {
        setError(true);
        return null;
    }
    };


    
    let handleChange  = (evt) =>{
        setCity(evt.target.value);
};
    let handleSubmit = async(evt) => {
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    }
    return (
        <div className='Searchbox'>
            <h3>Search for the weather</h3>

            <form onSubmit = {handleSubmit}>
                <TextField 
                id="city"
                label="City Name" 
                variant="outlined" 
                required 
                value={city}
                onChange={handleChange}  
                />
                <br /><br />
                
                 <Button variant="contained" type="submit">Search</Button>
                 <br /><br />

                    {error && <span style={{ color: 'red' }}>"NO such Place in our API."</span>}
            </form>
        </div>
    );
}