import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainNotes } from '../page/MainNotes'

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='/main/*' element={<MainNotes/>} />
    </Routes>
  )
}
