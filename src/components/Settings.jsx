import React, { useState, useRef } from 'react'
import s from "./settings.module.css"
import { NavLink } from 'react-router-dom'


export default function Settings({setCitiesAmount}) {

    const [amount, setAmount] = useState()
    console.log(amount)
    function settings(e) {
        e.preventDefault()
        console.log(amount)
        setCitiesAmount(amount)
        alert("Save Changes")
    }

    return (
        <div className={s.conteiner}>
                <h6>Set the numbers of cities do you want to Show</h6>
                <select name="color" id="color">
                    <option onClick={() => setAmount(10)}>10</option>
                    <option onClick={() => setAmount(8)}>8</option>
                    <option onClick={() => setAmount(6)}>6</option>
                </select>

            <button onClick={settings} className={`btn btn-primary btn-sm ${s.btn}`}> Save Changes</button>
        </div>
    )
}
