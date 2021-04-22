import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const api = {
  key: '74164a1085cc858b61130ea24feb437d',
  baseURL: 'https://api.openweathermap.org/data/2.5/'
}

ReactDOM.render(
  <React.StrictMode>
    <App api={api}/>
  </React.StrictMode>,
  document.getElementById('root')
);
