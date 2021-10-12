import axios from 'axios'
import React, { useState, useEffect } from 'react'
import City from '../components/City'

function Main() {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=91283695e96345aca95936e80fa5ea1b`)
            
            .then(res => {
    setData(res.data)
    setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [city])

    const handleSubmit = (event, value) => {
        event.preventDefault();
        setCity(value);
        setLoading(true)
    }


  

    return (
        <div>
            <h1>Weather app</h1>
            {loading ? <p>Loading...</p> :   
            <div> <City handleSubmit={handleSubmit} />
         {data.main &&   
         <div>
         <p>{data.name}</p>
         <p>{(Number(data.main.temp) -273.15).toFixed(1)} °C </p>
         </div>}
         </div>}
         
          
        </div>
    )
}

export default Main
