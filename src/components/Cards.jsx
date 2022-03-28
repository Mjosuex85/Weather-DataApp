import React from 'react'
import Card from './Card'
import Flag from "react-country-flag"
import s from './cards.module.css'

export default function Cards({ cities, onClose }) {

    if (cities) 
        return (
            <div className={s.cards}>
                {cities.map(p =>
                    <Card
                        name={p.name}
                        temp={p.temp}
                        temp_max={p.temp}
                        temp_min={p.temp}
                        img={p.img}
                        country={p.country}
                        country2={<Flag countryCode={p.country} />}
                        wind={p.wind}
                        onClose={() => onClose(p.id)}
                        key={p.id}
                    />)}
            </div>
        );
    
    else {
        return (
        <div>sin ciudades </div>
        )
        
    };
};


