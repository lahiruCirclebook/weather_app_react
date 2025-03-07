import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'

import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {

    //inputs
    const inputRef = useRef();

    //set API data
    const [weatherData, setWeatherData] = useState({});

    //all image icon code
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    }


    //search function
    const search = async (city)=>{

        if(city === ""){
            alert("Enter City Name!");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            if(!response.ok){
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clear_icon;

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
            
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data" , + error);
        }
    }

    //use effect
    useEffect(()=>{
        search('London');
    }, [])


    //return function  
    return (
        <div className='weather'>

            {/*search bar*/}
            <div className='searchBar'>
                <input ref={inputRef} type='text' placeholder='Search for a city...' />
                <img src={search_icon} alt='Search Icon' onClick={()=>search(inputRef.current.value)}/>
            </div>

            {weatherData?<>
                {/*weather image*/}
                <img src={weatherData.icon} alt='' className='weather_icon'/>
                <p className='temperature'>{weatherData.temperature}°C</p>
                <p className='location'>{weatherData.location}</p>

                {/*weather data*/}
                <div className='weather_data'>
                    <div className='col'>
                        <img src={humidity_icon} alt=''/>
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>humidity</span>
                        </div>
                    </div>

                    <div className='col'>
                        <img src={wind_icon} alt=''/>
                        <div>
                            <p>{weatherData.windSpeed}km/h</p>
                            <span>wind speed</span>
                        </div>
                    </div>
                </div>
            </>:<></>}

            
        </div>
    )
}

export default Weather