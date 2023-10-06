import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
)

AOS.init({
  offset: 0,
  duration: 1000,
});
