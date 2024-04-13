import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { HoveredLink, Menu, MenuItem } from './components/nav-item'
import NavBar from './components/NavBare'

export default function App() {
  return (
    <>
      <div className='fixed top-2 left-0 right-0'>
         <NavBar />
      </div>
      <section className='pt-20 min-h-[100vh] md:h-[100vh] pb-5 container bg-primary text-white'>

        <div className='flex flex-col md:flex-row gap-8 w-full h-full'>
           <div className='md:w-[45%] h-full w-full'>
            <img src="./hero.png"alt='react logo' className='w-full object-cover h-full' />
          </div>
          <div className='flex flex-col gap-4 justify-center items-start md:w-[35%] md:ml-12'>
            <h1 className='md:text-5xl text-2xl '>BIENVENUE À <span className='text-secondary font-bold'> EUREKA</span>  <span className='font-bold'> GLOBAL</span></h1>
            <p className='md:text-2xl text-xl architect'>votre cabinet conseil dédié à propulser votre entreprise vers l'excellence.</p>
            <Button size='lg' variant="CTA" className='mt-4   rounded-[45px]'>Prendre rendez-vous</Button>
          </div>
         
        </div>
      </section>
      <section className='container' >

      </section>
    </>
  )
}


