import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Card(props) {

    /* const [temp, setTemp] = useState(props.temp)   

        
        function farenheitToCelius() {
            setTemp(prevTemp => prevTemp = parseInt(temp * 9/5) + 32)            FUNCION PARA CAMBIAR LA TEMPERATURA  USAR UN ESTADO CON TRUE Y FALSE
        }

        function celiusToFarenheit() {
            setTemp(prevTemp => prevTemp = (temp - 32) * 5/9) 
        } */

    return (
        <div className={s.cardconteiner}>
            <div className={s.nameTemp}>
                <div className={s.details}>
                    <img className={s.cloud } width="100px" height="100px" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Not Found" />
                    <p>{props.temp}c°</p>
                </div>
                
                <div className={s.info}>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind: {props.wind} Km/h.</p>
                    <p>Country: {props.country} </p>
                    <p>Min: {props.temp_min}</p>
                    <p>Max: {props.temp_max}</p>
                </div>

                <h3 className={s.name}>{props.name},{props.country.toLocaleLowerCase()} {props.country2}</h3>
            </div>

            <div className={s.btns}>
                <Link to={`/ciudad/${props.id}`}> <button className={`btn btn-primary btn-sm ${s.btn}`}>info</button></Link>
                <button className={`btn btn-primary btn-sm ${s.btn}`} onClick={props.onClose}>Close</button>
            </div>

          {/*    <button onClick={farenheitToCelius}>F</button>        BOTONES PARA EL CAMBIO DE TEMPERATURA
             <button onClick={celiusToFarenheit}>C</button> */}

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



