import React from 'react'
import { createRoot } from 'react-dom/client'

document.body.innerHTML = '<div id="root"></div>'

const app = createRoot(document.getElementById('root')!)
app.render(
  <div>
    Hello world!
  </div>
)
