import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Usestate from './UseState'
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UseLayoutEffect />
  </React.StrictMode>
);
