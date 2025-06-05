import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){
    
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
        feelsLike: 27.88,
        humidity: 20,
        temp: 29.55,
        tempMax: 29.55,
        tempMin: 29.55,
        weather: "clear sky"
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
        <h1>Weather App by Delta</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>

        </div>
        
    )
}