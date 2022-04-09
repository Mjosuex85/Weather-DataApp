import React from 'react'
import s from './city.module.css'
import Animation from "./Animation.jsx"
import { Link } from "react-router-dom"

export default function City({ city }) {

        if (city) 

    return (
        <div className="ciudad">
            <div>
                <h2>{city.name}</h2>
                <Link to="/Home"> <button className={`btn btn-primary btn-sm ${s.btn}`}>Go Back</button></Link>
                <div className="info">
                    <div>Temp: {city.temp} ºC</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div>Clouds: {city.clouds}</div>
                    <div>Lat: {city.lat}º</div>
                    <div>Longitud: {city.lon}º</div>
                    <div>
                    </div>
                </div>
            </div>
            
        </div>
    )

    else {
        return <div>Vuelva a la aplicación</div>
    }
}





