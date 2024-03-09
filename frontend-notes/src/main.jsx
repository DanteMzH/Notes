import React from 'react'
import ReactDOM from 'react-dom/client'

import { RoutesApp } from './notes/routes/RoutesApp.jsx'
import { MainLogin } from "./auth/page/MainLogin.jsx"
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './Router/RouterApp.jsx'
import { AuthProvider } from './auth/context/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>

    <BrowserRouter>

        {/* <RoutesApp /> */}
        <RouterApp />

    </BrowserRouter>
</AuthProvider>

)
