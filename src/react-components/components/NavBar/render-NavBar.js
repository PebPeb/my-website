import React from 'react';
import { createRoot } from "react-dom/client";

import NavBar from './NavBar';



const navBarElement = document.getElementById("myNavBar");

// Function to get attributes and convert them properly
const getPropsFromElement = (element) => ({
  removeTitle: element.getAttribute("bk-removeTitle") === "true" ?? false,
  external: element.getAttribute("bk-external") === "true" ?? false,
});

const props = getPropsFromElement(navBarElement); // Extract props

const root = createRoot(navBarElement);
root.render(<NavBar {...props} />);
