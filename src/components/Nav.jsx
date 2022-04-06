import React from "react";
import SearchBar from "./SearchBar";
import logo from '../LogoWAPP.png'
import s from './nav.module.css'
import { NavLink } from "react-router-dom";
import linkedin from "../linkedin.png"
import gitHub from "../github-sign.png"


export default function Nav({ onSearch }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${s.nav}`}>
      <a className="navbar-brand nav-link" href="http://localhost:3000/"> 
       <div className={s.other}><img width="50px" height="50px" src={logo} alt="Not Found" /><h4 className={`nav-link ${s.font}`}>Weather App</h4></div>
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
        <div className={s.networks}>
          <img className={s.networks} width="35px" src={gitHub} alt="Not Found" />
          <img width="35px"src={linkedin} alt="Not Found" />
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  )
}


