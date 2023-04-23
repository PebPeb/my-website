import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';


import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


function Test() {
  
    return (
      <div>Test</div>
    );
  }

const test = ReactDOM.createRoot(document.getElementById('test'));
test.render(<Test />);


