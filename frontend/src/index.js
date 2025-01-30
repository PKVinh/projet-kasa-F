import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";
import About from "./pages/About";


const rootElement = document.getElementById('root'); // Votre conteneur HTML
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/about" element={<About />} />
        </Routes>

    </Router>  
    </React.StrictMode>,
);