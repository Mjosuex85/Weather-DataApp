import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav'
import CityInfo from './components/City';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Animation from "./components/Animations.jsx"
import Prueba from './components/Prueba.jsx';
/* http://api.openweathermap.org/data/2.5/weather?q=london&appid=8e84108b95ef7a2c77bc1bd073ccfe77&units=metric */



function App() {

  const [cities, setCities] = useState([])
  const apiKey = "8e84108b95ef7a2c77bc1bd073ccfe77"

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((source) => {
        if (source.main !== undefined) {
          const city = {
            id: source.id,
            name: source.name,
            temp: Math.round(source.main.temp),
            min: source.main.temp_min,
            max: source.main.temp_max,  
            img: source.weather[0].icon,
            country: source.sys.country,
            wind: source.wind.speed
          };

          setCities(oldCities => [...oldCities, city])

        } else {
          alert("We cannot find your city, try another one");
        }
      });
    
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <Router>
      <div className='App'>

        <Route path='/' render={() => <Nav onSearch={onSearch} />} />  {/* lleva render e invoca () la función porque Nav recibe props */}
        <Route path='/about' component={About} />
        <Cards cities={cities} onClose={onClose} />
        <Route path="/ciudad/:parametro2" render={() => <CityInfo/>}/>

        {/* <Route path="/home" component={Animation}/> */}

        {/* <Route exact path="/:params1/:params2" render={CityComponent} /> */}

      </div>
   

    </Router>
  );

}


export default App;  
