import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav'
import CityInfo from './components/City.jsx';
import About from './components/About.jsx';
import { Route, Switch } from 'react-router-dom';
import Instructions from "./components/Instructions.jsx";
import Form from "./components/Form.jsx"
import Settings from './components/Settings';


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
            wind: source.wind.speed,
            humidity: source.main.humidity,
            lat: source.coord.lat,
            lon: source.coord.lon
          };

          const rep = cities.find(c => c.id === city.id)
          if (rep) {
            alert("The City is alredy Showing, try another one")
          }
          
          else if (cities.length === 6 ) {
            alert("Maximun of city")
          }

          else setCities(oldCities => [...oldCities, city])
        }
        else {
          alert(`"${city.toLocaleUpperCase()}" Sorry, We cannot find your city, try another one`);
        }

      });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function cityDetails(id) {
    let infoCity = cities.filter((c) => c.id === parseInt(id))
    if (infoCity.length > 0) {
      return infoCity[0]
    }
    else return null;
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />} />
        <Route path="/Home" render={() => <Cards cities={cities} onClose={onClose} />} />
        <Route path='/about' component={About} />
        <Route path='/Instructions' component={Instructions} />
        <Route path="/ciudad/:id" render={({match}) => <CityInfo city={cityDetails(match.params.id)} />} />
        {/* <Route path="/Settings" component={Settings}/> */}
        <Route path="/Feedback" component={Form}/>
        {/* <Route path="/home" component={Animation}/> */}
      </Switch>
    </div>
  );
}

export default App;  
