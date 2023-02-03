import React from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import RISCV_Single_Cycle_CPU from "./pages/RISCV_Single_Cycle_CPU/RISCV_Single_Cycle_CPU";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/RISCV_Single_Cycle_CPU" element={<RISCV_Single_Cycle_CPU/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
