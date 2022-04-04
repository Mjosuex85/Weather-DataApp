import React from "react";
import SearchBar from "./SearchBar";
import logo from '../LogoWAPP.png'
import s from './nav.module.css'
import { NavLink } from "react-router-dom";


export default function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand nav-link" href="http://localhost:3000/"> 
       <img width="40px" src={logo} alt="Not Found" />   Weather App
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home"><span>Home</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About"><span>About</span></NavLink>
          </li>
        </ul>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  )
}


