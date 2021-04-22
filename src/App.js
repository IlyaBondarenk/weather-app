import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios'

function App({ api }) {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(result => {
          setWeather(result);
          setQuery('');
        })
    }
  }

  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className={(weather.data) ?
      ((weather.data.main.temp < 10) ? 'app' : 'app warm')
      : 'app warm'
    }>
      <main>
        <div className='search-box'>
          <SearchBar query={query} setQuery={setQuery} search={search} />
        </div>
        {
          (weather.data) ?
            (
              <div>
                <div className='location-box'>
                  <div className='location'>
                    {weather.data.name}, {weather.data.sys.country}
                  </div>
                  <div className='date'>
                    {dateBuilder(new Date())}
                  </div>
                  <div className='weather-box'>
                    <div className='temp'>{Math.round(weather.data.main.temp)}°C</div>
                    <div className='weather'>{weather.data.weather[0].main}</div>
                  </div>
                </div>
              </div>
            ) : ('')
        }

      </main>
    </div>
  );
}

export default App;
