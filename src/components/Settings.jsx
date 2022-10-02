import React, { useState } from 'react'
import s from "./settings.module.css"
import { NavLink } from 'react-router-dom'


export default function Settings(props) {

    const [number, setNumber] = useState()


    return (
        <div className={s.conteiner}>
            <form /* className={s.numOf} */ onSubmit={(e) => e.preventDefault()}>
                <h6>Set the numbers of cities do you want to Show</h6>

                <select name="color" id="color">
                    <option value="r">10</option>
                    <option value="a">8</option>
                    <option value="v">6</option>
                </select>

                <NavLink to="/Home"> <input onClick={() => alert("Changes Saved")} className={`btn btn-primary btn-sm ${s.btn}`} type="submit" value="Save Changes" /></NavLink>
            </form>
        </div>
    )
}
