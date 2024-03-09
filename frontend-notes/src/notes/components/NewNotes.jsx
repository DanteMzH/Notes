import React from 'react'

export const NewNotes = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>

      <div className=' w-3/5 h-1/2 border border-color-border p-5'>

      <form className='flex flex-col gap-2 h-full'>

        <input className='h-1/5' placeholder='::Untitled'/>
        <textarea className='h-4/5' placeholder='::Enter description' />

      </form>
      </div>
      
    </div>
  )
}
