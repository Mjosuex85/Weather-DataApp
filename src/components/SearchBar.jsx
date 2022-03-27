import React, { useState } from 'react'
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

    const [city, setCity] = useState()
    
    const handleChange = (e) => { 
      setCity(e.target.value)
    }

    return (

        <form className={`form-inline my-2 my-lg-0`} onSubmit={(e) => { e.preventDefault(); onSearch(city);}}>
            <input onChange={handleChange} className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className={`btn btn-primary ${s.btn}`} type="submit">Search</button>
        </form>
    )
    
}
