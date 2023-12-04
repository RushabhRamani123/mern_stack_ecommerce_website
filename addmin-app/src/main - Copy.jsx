import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import "antd/dist/reset.css"
window.store = store
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
        <ConfigProvider theme={{
          token: {
            colorPrimary : '#253544'
          }
        }}>
        <App />
     </ConfigProvider>
    </Router>
  </React.StrictMode>,
  </Provider>
)
