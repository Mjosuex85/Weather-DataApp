import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import moment from 'moment'

export default function Card(props) {
    const [temp, setTemp] = useState({temp: props.temp, status: true}) 

        function farenheitToCelius() {
            if (temp.status)
            setTemp({
                temp: (temp.temp * 9/5) + 32,
                status: false
            })

           else {
               setTemp({
                temp: ( temp.temp - 32) * 5/9,
                status: true
               })
           }
        }


    return (
        <div className={s.cardconteiner}>
            <div className={s.nameTemp}>
                <div className={s.details}>
                    <img className={s.cloud } width="100px" height="100px" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Not Found" />
                    <p>{parseInt(temp.temp)}c°</p>
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
                <h6>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
            </div>

           {/*  <button onClick={() => farenheitToCelius()}>F|C</button> */}
   
        </div>
    )
}



