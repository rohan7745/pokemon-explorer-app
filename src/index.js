import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <Router> {/* Wrap App component with BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);
