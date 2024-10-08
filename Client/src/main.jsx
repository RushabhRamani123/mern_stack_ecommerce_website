import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
    </Router>
  </React.StrictMode>
)
