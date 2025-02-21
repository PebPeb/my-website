import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NavBar from "./components/NavBar/NavBar";

const ReloadPage = () => {
  useEffect(() => {
    const lastReloadTime = localStorage.getItem('lastReloadTime');
    const currentTime = Date.now();

    // Check if the page has been reloaded in the past second
    if (lastReloadTime && currentTime - lastReloadTime < 1000) {
      console.log('Page was reloaded in the past second.');
      // You can handle this case as needed, e.g., prevent further reloading.
    } else {
      // Update the last reload time in local storage
      localStorage.setItem('lastReloadTime', currentTime);
      // Reload the page
      window.location.reload();
    }
  }, []);

  return (
    <div className="background-container">
      <NavBar removeTitle />
      <div>Reloading page ...</div>
      <div>If this does not work within a few seconds try refreshing manually.</div>
      <div>Else the page is unreachable</div>
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<ReloadPage />} />
        <Route path="/projects" element={<ReloadPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
