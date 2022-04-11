import React, { useState } from 'react'
import s from "./settings.module.css"
import { NavLink } from 'react-router-dom'


export default function Settings(props) {

    const [number, setNumber] = useState()


    return (
        <div className={s.conteiner}>            
            <form /* className={s.numOf} */ onSubmit={(e) => e.preventDefault()}>
                <h6>Set the numbers of cities do you want to Show</h6>
                
                <input 
                type="checkbox" 
                id="vehicle1" 
                name="vehicle1" 
                value="Bike" />&nbsp;&nbsp;
                <label htmlFor="vehicle1">6</label><br></br>
                
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />&nbsp;&nbsp;&nbsp;
                <label htmlFor="vehicle2">8</label><br></br>
                
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />&nbsp;
                
                <label htmlFor="vehicle3">10</label><br></br>
                
                <NavLink to="/Home"> <input onClick={()=>alert("Changes Saved")} className={`btn btn-primary btn-sm ${s.btn}`} type="submit" value="Save Changes" /></NavLink>
            </form>
        </div>
    )
}
