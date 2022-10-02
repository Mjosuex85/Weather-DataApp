import React from 'react'
import Card from './Card'
import Flag from "react-country-flag"
import s from './cards.module.css'

export default function Cards(props) {

    if (props.cities) 
        return (
            <div className={s.cards}>
                { props.cities.map(p =>
                    <Card
                        name={p.name}
                        temp={p.temp}
                        temp_max={p.temp}
                        temp_min={p.temp}
                        img={p.img}
                        country={p.country}
                        country2={<Flag countryCode={p.country} />}
                        wind={p.wind}
                        onClose={() => props.onClose(p.id)}
                        key={p.id}
                        id={p.id}
                        humidity={p.humidity}
                    />)
                }
            </div>
        );
    
    else {
        return (
        <div> sin ciudades </div>
        )
        
    };
};


