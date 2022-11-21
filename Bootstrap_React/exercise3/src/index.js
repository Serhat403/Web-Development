import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import NavBar from "./Components/NavBar";
import Carou from "./Components/Carou";
import Final1 from "./Components/Final1";
import Final2 from "./Components/Final2";
import Utext from "./Components/Utext";
import TopNav from './Components/NavBar';
import Cardi from './Components/Cardi';



ReactDOM.render(
  <React.StrictMode>
    <TopNav />
    
    <Cardi />
    <Utext />
    <Carou />
    <Final1 />
    <Final2 />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
