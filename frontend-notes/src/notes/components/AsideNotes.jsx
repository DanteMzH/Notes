import React from 'react'
import { Link } from 'react-router-dom'

export const AsideNotes = () => {
  return (
    <div className='bg-color-bg-aside h-full p-5 font-bold ' >

      <i className='mb-10 fa-solid fa-magnifying-glass'> </i>
      <span> Search</span>


      <div  className='mb-10'>
        <div>

        <i className='fa-solid fa-plus'></i>
        <Link to= "/main/add" > Add note</Link>

        </div>
        <div>

  
        <i className='fa-regular fa-file'></i>
        <Link to= "/main/all" > Notes</Link>

        </div>
      </div>


      <div  className='mb-40'>

        <i className='fa-regular fa-trash-can'></i>
        <span> Trash</span>

      </div>

      <div  className='mt-80'>

        <i className='fa-solid fa-arrow-right-from-bracket'></i>
        <span> Log out</span>

      </div>

    </div>
  )
}
