import { useState } from 'react'
import './weatherCard.css'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handlerChangeTemp = () => {
        setIsCelsius(!isCelsius) // tambien se puede poner: const handlerChangeTemp = () => setIsCelsius(!isCelsius), es decir sin {}
    }

    return (
        <article className='weather'>
            <h1 className='weather__title'>Weather App</h1>
            <h3 className='weather__location'>{weather?.name}, {weather?.sys.country}</h3>
            <section className='weather__body'>
                <header className='weather__img-container'>
                    <img className='weather__img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt=''></img>
                </header>
                <article className='weather__info'>
                    <h2 className='weather__condition'>"{weather?.weather[0].description}"</h2>
                    <ul className='weather__list'>
                        <li className='weather__item-list'><span className='weather__label'>Wind Speed </span><span className='weather__item-value'>{weather?.wind.speed}meter/secs</span></li>
                        <li className='weather__item-list'><span className='weather__label'>Clouds </span><span className='weather__item-value'>{weather?.clouds.all}% </span></li>
                        <li className='weather__item-list'><span className='weather__label'>Pressure </span><span className='weather__item-value'>{weather?.main.pressure}hPa </span></li>
                    </ul>
                </article>
            </section>
            <h2 className='weather__temp'>{isCelsius ? `${temp?.celsius}ºC` : `${temp?.fahrenheit}ºF`} </h2>
            <button className='weather_button' onClick={handlerChangeTemp}> Change to {isCelsius ? 'ºF (Fahrenheit)' : 'ºC (Celsius)'} </button>

        </article>
    )
}

export default WeatherCard