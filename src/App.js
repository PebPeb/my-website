import React, {useEffect} from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const ReloadPage = () => {
  useEffect(() => { window.location.reload(); }, []);
  return (
    <div>
      <div>reloading page ...</div>
      <div>if this does not work try reloading manually</div>
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
