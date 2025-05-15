import { useEffect, useState } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
    const locationKey = '351197'; // Houston
    const CACHE_KEY = 'weatherCache';
    const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes in milliseconds

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
                );
                const data = await response.json();

                // Cache the result with a timestamp
                const cacheEntry = {
                    data: data[0],
                    timestamp: Date.now(),
                };
                localStorage.setItem(CACHE_KEY, JSON.stringify(cacheEntry));

                console.log('Last fetch ran at:', new Date().toLocaleString());

                setWeatherData(data[0]);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        const loadWeather = () => {
            const cached = localStorage.getItem(CACHE_KEY);

            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                const age = Date.now() - timestamp;

                if (age < CACHE_DURATION) {
                    setWeatherData(data);
                    return;
                }
            }

            if (apiKey) {
                fetchWeather();
            }
        };

        loadWeather();
    }, []);

    const getWeatherIcon = (weatherText) => {
        const iconMap = {
            Clear: '☀️',
            Sunny: '☀️',
            'Mostly sunny': '☀️',
            'Partly cloudy': '🌤️',
            'Partly sunny': '🌤️',
            'Mostly cloudy': '☁️',
            Cloudy: '☁️',
            Overcast: '☁️',
            Showers: '🌧️',
            Rain: '🌧️',
            Drizzle: '🌧️',
            'Light rain': '🌧️',
            Thunderstorms: '⛈️',
            'Stormy weather': '⛈️',
            Snow: '❄️',
            'Snow showers': '❄️',
            Sleet: '🌨️',
            Hail: '🌨️',
            Fog: '🌫️',
            Mist: '🌫️',
            Smoke: '🌫️',
            Dust: '🌫️',
            Windy: '🌬️',
            'Blowing dust': '🌫️',
            'Freezing rain': '🌨️',
            'Ice pellets': '🌨️',
            'Mixed precipitation': '🌨️',
        };

        return iconMap[weatherText] || '❔'; // fallback icon
    };

    if (!weatherData) {
        return (
            <div className='weather-widget weather-widget--unavailable'>
                H-Town <br />Weather unavailable
            </div>
        );
    }

    if (weatherData) {
        return (
            <>
                <a
                    className='weather-widget'
                    href={weatherData.Link}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {console.log('weather data: ', weatherData)}

                    <span className='weather-widget__icon'>
                        {getWeatherIcon(weatherData.WeatherText)}
                    </span>
                    <span className='weather-widget__temp'>
                        {weatherData.Temperature.Imperial.Value}°F
                    </span>
                    <span className='weather-widget__city'>in H-Town</span>
                </a>
            </>
        );
    }
};

export default Weather;
