import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

document.body.innerHTML = '<div id="root"></div>'

const app = createRoot(document.getElementById('root')!)
app.render(<App />)
