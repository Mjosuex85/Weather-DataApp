import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
    
    return (
        <div className={s.cardconteiner}>
            <div className={s.test}>
                <button className={`btn btn-primary btn-sm ${s.btn}`} onClick={props.onClose}>X</button>
            </div>
            <div className={s.nameTemp}>
                <h1>{props.name}</h1>
                <h1>{props.temp}°</h1>
            </div>
            <div className={s.details}>
                <p>Temp min: {props.temp_min}</p>
                <p>Temp max: {props.temp_max}</p>
                <p>Wind: {props.wind}</p>
                <p>Country: {props.country} {props.country2}</p>
                
            </div>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Not Found" />
            <div>
                <button className={`btn btn-primary btn-sm ${s.btn}`} onClick={() => alert("Soon...")} >info</button>
  
            </div>
        </div>
    )
}

//  onClose
//  name
//  temp
//  temp_min
//  temp_max
//  wind
//  country
//  country2sgit s
//  img



