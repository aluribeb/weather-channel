import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/weatherCardfold/WeatherCard'
import './index.css'
import IsLoading from './components/IsLoading/IsLoading'


function App() {

  const [ coords, setCoords] = useState()
  const [ weather, setWeather] =useState()
  const [temp, setTemp] =useState()
  const [isLoading, setIsLoading] = useState(true)

  const success = position => {
  
    const obj = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
    setCoords(obj)
  }
  useEffect(()=>{
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(success)
  }, []) 
 
  useEffect(() => {
    if(coords) {
      const APIKEY = 'f967fdc3e5f7c9297877531024637f15'
      const url =`http://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.long}&limit={limit}&appid=${APIKEY}`
      
      axios.get(url)
      .then( res => {
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const fahrenheit = (celsius * 9/5 + 32).toFixed(1)
        setTemp({celsius, fahrenheit}) // este estado es el que va a tener la info en celsius y fahrenheit
        setWeather(res.data) }) //este callback se ejecuta cuando ya está la función
        .catch(err => console.log(err) )
        .finally(() => setIsLoading(false))
    }

  }, [coords])
  console.log(weather)

  return (
  <div className='app'>
    {
      isLoading
      ? <IsLoading/>
      : (
        <WeatherCard
        weather={weather}
        temp={temp}
        />
      )

    }

  </div>
  )
}

export default App
