import React from 'react'
import { useParams } from 'react-router-dom'
export default function Prueba(props) {
    
    let {parametro1, parametro2} = useParams()
  return (
    <div>
        show1: {parametro1}
        show2: {parametro2}
    </div>
  )
}
