import React, {useEffect} from "react";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const PostsPage = () => {
  useEffect(() => { window.location.reload(); }, []);
  return (
    <div>
      <div>reloading page ...</div>
      <div>if this does not work try reloading manually</div>
    </div>
  );
};


function App() {
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.pathname === '/posts') {
        // Reload the page when visiting /posts
        window.location.reload();
      }
    };

    // Add a listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
