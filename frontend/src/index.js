import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";  
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import "./styles/global.css"; // Importation du fichier global.css


const rootElement = document.getElementById('root'); // Votre conteneur HTML
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <div className="container"> 
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
      <Footer />
    </Router>  
    </React.StrictMode>,
);