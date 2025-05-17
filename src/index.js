import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style sheets
import './styles/index.css';
import './styles/app/app.css';
import './styles/app/footer.css';
import './styles/app/map.css';
import './styles/components/filters.css';
import './styles/components/location-card.css';
import './styles/components/widgets.css';
import './styles/containers/home.css';
import './styles/containers/listing-page.css';
import './styles/containers/location-page.css';
import './styles/containers/neighborhood.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);