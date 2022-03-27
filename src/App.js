import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav'

/* http://api.openweathermap.org/data/2.5/weather?q=london&appid=8e84108b95ef7a2c77bc1bd073ccfe77&units=metric */



function App() {
  
  const [cities, setCities] = useState([])
  const apiKey = "8e84108b95ef7a2c77bc1bd073ccfe77"

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((source) => { 
      if(source.main !== undefined){
        const city = {
          id: source.id,
          name: source.name,
          temp: source.main.temp,
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
  
  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards cities={cities}/>
    </div>
  );

}


export default App;
