import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const WeatherCard = (props) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=3e9731467a554bd892f163111221506&q=${props.city}&days=1&aqi=no&alerts=no`
            );
            setWeather(response.data);
            setLoading(false);
        };
        getWeather();
    }, [props.city]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div className="weather-card">
            <div className="weather-card__header">
                <h3 className="weather-card__header__city">
                    {weather.location.name}
                </h3>
                <p className="weather-card__header__date">
                    Updated: {weather.current.last_updated}
                </p>
            </div>
            <div className="weather-card__body">
                <h2 className="weather-card__body__temp">
                    {weather.current.temp_f}°F
                </h2>
                <p className="weather-card__body__feels">
                    Feels Like: {weather.current.feelslike_f}°F
                </p>
                <div className="weather-card__body__icon">
                    <Image
                        width={64}
                        height={64}
                        src={"https:" + weather.current.condition.icon}
                        alt={weather.current.condition.text}
                    />
                </div>
                <p className="weather-card__body__text">
                    {weather.current.condition.text}
                </p>
            </div>
            <div className="weather-card__footer">
                <p className="weather-card__footer__wind">
                    Wind: {weather.current.wind_mph} mph
                </p>
                <p className="weather-card__footer__humidity">
                    Humidity: {weather.current.humidity}%
                </p>
            </div>
            <div className="weather-card__footer__tomorrow">
                <h3>Tomorrow</h3>
                <h3 className="weather-card__footer__tomorrow__maxTemp">
                    {weather.forecast.forecastday[0].day.maxtemp_f}°F /{" "}
                    {weather.forecast.forecastday[0].day.mintemp_f}°F
                </h3>
                <p>{weather.forecast.forecastday[0].day.condition.text}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
