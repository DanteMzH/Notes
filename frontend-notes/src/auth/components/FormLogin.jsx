import axios from 'axios';
import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const FormLogin = () => {

    const {login} = useContext( AuthContext )

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [form, setform] = useState('')

    const handleInput = (evento) =>{
        evento.preventDefault();
        const {name, value} = evento.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    }

    const handleForm = async(e) =>{
        e.preventDefault();
        const credenciales = await axios.post('/hola',{
            "username": `${username}`, 
            "password": `${password}`, 
        })
    }



  return (

        <section className='border border-color-secondary rounded shadow-lg h-full'>
            <div className='flex justify-center items-center text-3xl font-bold my-2'>
                <h1>
                Log in
                </h1>
            </div>
            <div className='flex justify-center items-center w-full '>
                <form 
                onSubmit={handleForm}
                className='flex flex-col justify-center items-center gap-2 w-full mt-0 '  >
                    <input
                    onChange={handleInput} 
                    type="text" 
                    className='border border-color-border rounded p-1 w-3/4' 
                    placeholder='Enter your user...'
                    value={username}
                    name='username'
                    />

                    <input
                    onChange={handleInput} 
                    type="text" 
                    className='border border-color-border rounded p-1 w-3/4' 
                    placeholder='Enter your password...' 
                    value={password}
                    name='password'
                    />

                    <button 
                     onClick={handleForm} 
                     type='submit'
                    className="rounded-lg bg-color-button  w-3/4 mt-1 text-white">
                        Continue
                    </button>
                </form>
            </div>
        </section>

  )
}
