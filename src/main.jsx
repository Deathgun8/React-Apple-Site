import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Seu componente principal
import './index.css'; // Importação do CSS global

// Criando o ponto de entrada (root) da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente App no elemento root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
