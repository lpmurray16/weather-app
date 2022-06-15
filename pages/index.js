import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import WeatherCard from "../components/WeatherCard.jsx";

export default function Home() {
    const [inputText, setInputText] = useState("");
    const [submittedText, setSubmittedText] = useState("60174");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedText(inputText);
    };

    return (
        <div className="container">
            <Head>
                <title>Simple Weather Search App</title>
                <meta
                    name="description"
                    content="Weather App Created Using Next.js"
                />
                <link rel="icon" href="/sunny.ico" />
            </Head>

            <main className="main">
                <h1 className="title txt-center">🌤️Weather App🌦️</h1>

                {/* create an input field inside a form that passes its value upon submit or enter key to the handleSubmit function above */}
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputText}
                        placeholder="Enter a city name or zip code"
                        className="input"
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button type="submit" className="button">
                        Search
                    </button>
                </form>

                <div className="weather-card__outer">
                    <WeatherCard city={submittedText} />
                </div>
            </main>

            <footer className="footer txt-center">
                <p>
                    Check out more at{" "}
                    <a
                        href="https://logan-murray.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        logan-murray.dev
                    </a>
                </p>
            </footer>
        </div>
    );
}
