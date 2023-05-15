import React from 'react';
import { createRoot } from "react-dom/client";

import NavBar from './NavBar';



const element = createRoot(document.getElementById('myNavBar'));
element.render(<NavBar external= { true } />);