import React from 'react';
import { createRoot } from 'react-dom/client'

document.body.innerHTML = '<div id="app"></div>'

const app = createRoot(document.getElementById('app')!)
app.render(
    <>
        Hello world!
    </>
)
