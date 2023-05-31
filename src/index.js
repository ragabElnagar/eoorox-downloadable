import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/dripicons.css";
import "./assets/css/magnific-popup.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/font-flaticon/flaticon.css";
import "./assets/css/meanmenu.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();