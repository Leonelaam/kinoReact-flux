import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import App from './App';
import MyContextProvider from './store/appContext'

// Renderiza la App
ReactDOM.render(
//   MyContextProvider envuelve la
// aplicación raíz y, así, toda nuestra
// aplicación ahora puede acceder a
// los datos proporcionados por el
// contexto.
  <MyContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MyContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
