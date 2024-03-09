import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLogin } from '../auth/page/MainLogin'
import { RoutesApp } from '../notes/routes/RoutesApp'

export const RouterApp = () => {
  return (
    <Routes>

        <Route path='/' element={<MainLogin/>}/>
        <Route path='/*' element={<RoutesApp/>} />
        
    </Routes>
  )
}
