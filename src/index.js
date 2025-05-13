import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style sheets
import './styles/index.css';
import './styles/app/app.css';
import './styles/app/map.css';
import './styles/components/filters.css';
import './styles/components/location-card.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);