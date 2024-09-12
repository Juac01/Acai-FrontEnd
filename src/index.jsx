import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app';//Aqui se sobre entende que o arquivo index ela já considera 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


