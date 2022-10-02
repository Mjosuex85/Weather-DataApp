import React, {useState} from 'react'
import s from './form.module.css'

export default function Form() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [feed, setFeed] = useState("")

    /* const refName = useRef()
    const refLastName = useRef()
    const refEmail = useRef() */

    const onSubmit = (e) => {
        e.preventDefault()
        /* console.log({name, lastName, email, feed}) */
    }

  return (
    <div className={s.conteiner}>
            
            <form className={s.info} onSubmit={onSubmit}>
                <label> Name: &nbsp;</label>
                <input 
                value=""
                type="text" 
                placeholder=''  
                /* ref={""} */
                onChange={(e) => setName(e.target.value)}
                /><br />
                
                <label> Last Name: &nbsp;</label>
                <input 
                value=""
                type="text" 
                placeholder='' 
                /* ref={""} */
                onChange={(e) => setLastName(e.target.value)}
                /><br />
                
                <label> Email: &nbsp; </label>
                <input 
                value=""
                type="email" 
                placeholder=''
                /* ref={""} */
                onChange={(e) => setEmail(e.target.value)}
                /><br />
                
                <textarea 
                value=""
                name="comentarios" 
                rows="10" 
                cols="40" 
                placeholder='Write your coment here...' onChange={(e) => setFeed(e.target.value)}></textarea><br/> 
                
                <button className={`btn btn-primary btn-sm ${s.btn}`} type="submit" > Sumbit</button>
            </form>

            </div>
  )
}




