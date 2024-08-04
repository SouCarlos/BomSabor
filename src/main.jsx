import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalCss } from './globalStyle.js'
import { Routes } from './routes/index.jsx'
import {App} from "./App.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalCss/>
    <Routes/>
  </React.StrictMode>,
)
