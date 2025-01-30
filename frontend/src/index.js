import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";


const rootElement = document.getElementById('root'); // Votre conteneur HTML
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);