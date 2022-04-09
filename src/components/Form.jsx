import React, { Component, useState, useRef} from 'react'
import s from './form.module.css'

export default function Form() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const refName = useRef()
    const refLastName = useRef()
    const refEmail = useRef()

    const onHandleChange = (e) => {
    

    }

    const onSubmit = (e) => {
        alert("HOLA")
    }

  return (
    <div className={s.conteiner}>
            
            <form className={s.info} onSubmit={(e) => e.preventDefault()}>
                
                <label> Name: &nbsp;</label>
                <input 
                type="text" 
                placeholder=''  
                ref={""}
                onChange={(e) => setName(e.target.value) }
                /><br />
                
                <label> Last Name: &nbsp;</label>
                
                <input 
                type="text" 
                placeholder='' 
                ref={""}
                onChange={""}
                /><br />
                
                <label> Email: &nbsp; </label>
                
                <input 
                type="email" 
                placeholder=''
                ref={""}
                onChange={""}
                /><br />
                
                <textarea name="comentarios" rows="10" cols="40" placeholder='Write your coment...'></textarea><br/> 
                
                <button className={`btn btn-primary btn-sm ${s.btn}`} type="submit" > Sumbit</button>
            </form>

            </div>
  )
}




