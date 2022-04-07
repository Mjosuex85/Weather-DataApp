import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

    return (
        <div className={s.cardconteiner}>
            <div className={s.test}>
            </div>
            <div className={s.nameTemp}>
                <div className={s.details}>
                    <img className={s.prueba} width="100px" height="100px" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Not Found" />
                    <p>{props.temp}c°</p>
                </div>
                <div className={s.celcius}>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind: {props.wind} Km/h.</p>
                    <p>Country: {props.country} </p>
                    <p>Min: {props.temp_min}c°</p>
                    <p>Max: {props.temp_max}c°</p>
                </div>
                <h2 className={s.name}>{props.name},{props.country.toLocaleLowerCase()} {props.country2}</h2>
            </div>
            <div className={s.btns}>
                <Link to={`/ciudad/${props.id}`}> <button className={`btn btn-primary btn-sm ${s.btn}`}>info</button></Link>
                <button className={`btn btn-primary btn-sm ${s.btn}`} onClick={props.onClose}>Close</button>
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



