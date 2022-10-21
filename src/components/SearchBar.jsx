import React, { useState, useRef } from 'react'
import s from './SearchBar.module.css'


export default function SearchBar({onSearch}) {

    const [city, setCity] = useState("")
    const cityRef = useRef() 

    const handleChange = (e) => { 
        const refCity = cityRef.current.value
        setCity(prevCity => prevCity = refCity)
        
        /* cityRef.current.value = null */
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(city)
    }
    
    return (
        <form className={`form-inline my-2 my-lg-0`} onSubmit={onSubmit/*  (e) => e.preventDefault(); onSearch(city); */}>
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                ref={cityRef}
                onChange={handleChange} 
                placeholder="Search City..."/>
            <button className={`btn btn-primary ${s.btn}`} type="submit">Search</button>
        </form>
    )
    
}

