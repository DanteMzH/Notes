import React from 'react'
import ReactDOM from 'react-dom/client'

import { RoutesApp } from './notes/routes/RoutesApp.jsx'
import { MainLogin } from "./auth/page/MainLogin.jsx"
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './Router/RouterApp.jsx'
import { AuthProvider } from './auth/context/AuthProvider.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store ={store}>

<AuthProvider>

    <BrowserRouter>

        {/* <RoutesApp /> */}
        <RouterApp />

    </BrowserRouter>
</AuthProvider>

</Provider>
)
