import React from 'react'
import { Header } from '../components/Header'
import { AsideNotes } from "../components/AsideNotes";
import { NewNotes } from "../components/NewNotes";
import { AllNotes } from "../components/AllNotes";
import { Route, Routes } from 'react-router-dom';

export const MainNotes = () => {
  return (
    <div className='bg-color-bg-main h-screen'>

      <div className=' flex flex-row w-full h-screen'>

        <div className='border border-color-border w-1/5'>
          <AsideNotes/>
        </div >

        <div className='w-full'>
          <Routes>
            <Route path='/all' element={<AllNotes/>}/>

            <Route path='/add' element={<NewNotes/>}/>
            
            <Route/>
            
          </Routes>
        </div>

      </div>
    </div>
  )
}
