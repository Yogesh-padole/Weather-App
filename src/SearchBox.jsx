import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error , setError]=useState(false);


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1462fcf7e2f1718f77f65d575c52ac9a";

    let  getWeatherinfo= async()=>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            console.log(jsonresponse);
      
            let result = {
              city:city,
              temp :jsonresponse.main.temp,
              tempMin : jsonresponse.main.temp_min,
              tempMax : jsonresponse.main.temp_max,
              humidity : jsonresponse.main.humidity,
              feelsLike : jsonresponse.main.feels_like,
              weather : jsonresponse.weather[0].description
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
      

    }


    let handlechange=(event)=>{
        setCity(event.target.value);
    }

    let handlesubmit =async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherinfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }
    return(
        
        <div className='SearchBox'>
            <h3>Search for a weather</h3>
            <form onSubmit={handlesubmit} action="">
            <TextField id="City Name" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>

            <br /><br />
            <Button variant="contained" type='submit'> Search</Button>
            {error && <p style={{color:"red"}}>No such Place exists !!</p>}
            </form>
        </div>
        
    )
}
