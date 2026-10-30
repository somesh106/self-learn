import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast'

import { Provider } from "react-redux";           //redux
import { store } from "./redux/store";


createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App />
  //   <Toaster position="top-center" reverseOrder={false} />
  // </BrowserRouter>

  // -------------Redux---------------------
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </Provider>
)
