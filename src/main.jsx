import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/style.scss';

import { Provider } from 'react-redux';
import { store } from './redux/app/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);
