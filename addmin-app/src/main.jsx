import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import "antd/dist/reset.css"
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'
window.store = store
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
        <App />
    </Router>
          </PersistGate>
  </React.StrictMode>,
  </Provider>
)

