import React from "react";
import SearchBar from "./SearchBar.jsx";
import logo from '../cloud.png'
import s from './nav.module.css'
import { NavLink} from "react-router-dom";
import linkedin from "../linkedin.png"
import gitHub from "../github-sign.png"
import translate from "../translate.png"
import settings from "../gear.png"



export default function Nav({ onSearch }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${s.nav}`}>
      <NavLink to="/" className="navbar-brand nav-link" href="http://localhost:3000/">
        <div className={s.other}><img width="50px" height="50px" src={logo} alt="Not Found" /><h4 className={`nav-link ${s.font}`}>Weather App</h4></div>
      </NavLink>
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
          <li className="nav-item">
            <NavLink className="nav-link" to="/Instructions"><span>Instructions</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Feedback"><span>Feedback</span></NavLink>
          </li>
        </ul>
        <div>
          <a href="https://github.com/Mjosuex85" rel="noreferrer" target="_blank"><img className={s.networks} width="35px" src={gitHub} alt="Not Found" /></a>
          <a href="https://www.linkedin.com/in/mario-vidal-8138651a1/" rel="noreferrer" target="_blank"><img className={s.networks} width="35px" src={linkedin} alt="Not Found" /></a>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <a><img onClick={() => alert("Soon you should translate this site")} className={s.networks} width="40px" src={translate} alt="Not Found" /></a>
      <NavLink to="/Settings"> <a> <img  className={s.networks} width="40px" src={settings} alt="Not found"/></a> </NavLink>
    </nav>
  )
}


