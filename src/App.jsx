import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { HoveredLink, Menu, MenuItem } from './components/nav-item'
import Testimanials from './components/Testimonial'
import { NavBareMenu } from './components/NavBare'
import Footer from './components/Footer'
import { Link, redirect, useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate();
  const goTo = (path) => {
    return useNavigate(path)
  }
  return (
    <div >
      
      <section className='pt-20  md:h-[100vh] pb-5 container bg-primary text-white'>
        <div className='flex flex-col md:flex-row gap-8 w-full h-full'>
          <div data-aos="zoom-in-up" className='md:w-[45%] h-full w-full'>
            <img src="./hero.png" alt='react logo' className='w-full object-cover h-full' />
          </div>
          <div className='flex flex-col gap-4 justify-center items-start md:w-[35%] md:ml-12'>
            <h1 className='md:text-5xl text-2xl '>BIENVENUE À <span className='text-secondary font-bold'> EUREKA</span>  <span className='font-bold'> GLOBAL</span></h1>
            <p className='md:text-2xl text-xl architect'>votre cabinet conseil dédié à propulser votre entreprise vers l'excellence.</p>
            <Button data-aos="fade-up" size='lg' variant="CTA" className='mt-4 rounded-[45px]'>Prendre rendez-vous</Button>
          </div>
        </div>
      </section>
      <section className='container pt-12 pb-6  md:h-[100vh] bg-[#F2F2F2FF]'>
        <div className='flex mb-3 flex-col md:flex-row items-center justify-center h-full w-full gap-6'>
          <div data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-duration="200" className='flex flex-col gap-3 md:w-[55%] w-full'>
            <h1 className='md:text-6xl text-2xl font-bold text-center mb-4'>A-propos</h1>
            <p className='text-start md:text-2xl text-xl'>
              <span className='text-secondary font-bold'> EUREKA</span>  <span className='font-bold text-primary'> GLOBAL</span> se distingue par son engagement envers l'excellence, l'innovation et la transformation.
            </p>
            <p className='text-start md:text-2xl text-xl'>
              Laurence Noubissi, notre Gérante Associée, vous invite à explorer notre gamme étendue de produit & services et de formations, conçus pour répondre aux besoins spécifiques de chaque client.
            </p>
            <p className='text-start md:text-2xl text-xl'>
              Depuis plus d'une décennie, nous façonnons les parcours de succès de nos partenaires avec passion et précision.
            </p>
          </div>
          <div data-aos="fade-down" data-aos-easing="ease-in-back" data-aos-duration="100" className='md:w-[45%] h-full w-full p-5'>
            <img className='h-full w-full object-contain' src="./about.png" alt="Laurence" />
          </div>
        </div>
      </section>
      <section className="container">
        <div className='flex flex-col items-center gap-10 pt-12 pb-6'>
          <h1 className='md:text-5xl text-3xl font-bold text-center mb-4'>CE QUE NOUS VOUS OFFRONS</h1>
          {/* lister les service de sorte a mettre le titre et la description a gauche l'image a droite avec un call to action apres la description */}
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" className='flex mb-3 flex-col md:flex-row gap-6 w-full'>
            <div className='flex flex-col md:w-[45%] w-full gap-4'>
              <h2 className='md:text-4xl text-2xl font-bold'>Des solutions sur mesures </h2>
              <p className='text-xl'>EUREKA GLOBAL est votre partenaire stratégique, prêt à vous accompagner vers l'excellence. Notre catalogue de services est une invitation à explorer les solutions adaptées à chaque défi spécifique. Personnalisez votre parcours vers le succès et découvrez comment notre expertise peut transformer votre vision en réalité.</p>
              <div className='md:w-40 w-full'>
                <Link to={"/preambule"} >
                 <Button size='lg' className='rounded-[45px] w-full'>En savoir plus</Button>
                </Link>
              </div>
            </div>
            <div className='md:w-[45%] w-full'>
              <img className='h-full w-full object-contain' src="./service1.png" alt="service 1" />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300" className='flex flex-col-reverse md:flex-row gap-6 w-full'>
            <div className='md:w-[45%]   h-[287px] w-full'>
              <img className='h-full w-full object-cover' src="./service2.jpg" alt="service 1" />
            </div>
            <div className='flex flex-col  md:w-[45%] w-full gap-4'>
              <h2 className='md:text-4xl text-2xl font-bold'>Solutions Personnalisées pour une Performance Optimale  </h2>
              <p className='text-xl'>Que vous soyez une startup dynamique ou une grande entreprise établie, nos services sont conçus pour catalyser votre croissance. De la création d'entreprise et l'évaluation des opportunités d'investissement à la transformation organisationnelle et la restructuration stratégique, nous sommes le levier de votre réussite.</p>
              <div className='md:w-40 w-full'>
                <Link to={"/preambule"} >
                 <Button size='lg' className='rounded-[45px] w-full'>En savoir plus</Button>
                </Link>              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="200" className='flex flex-col md:flex-row gap-6 w-full'>
            <div className='flex flex-col md:w-[45%] w-full gap-4 ml-2'>
              <h2 className='md:text-4xl text-2xl font-bold'>Élever les Compétences, Transformer les Équipes </h2>
              <p className='text-xl mt-2'>Nos formations à la carte sont une véritable lumière guidant vos équipes vers l'innovation et l'excellence opérationnelle. Avec des modules allant de l'innovation stratégique à la maîtrise des outils de gestion et de sécurité des données, nous transformons le potentiel en expertise tangible.</p>
              <div className='md:w-40 w-full'>
               <Link to={"/preambule"} >
                 <Button size='lg' className='rounded-[45px] w-full'>En savoir plus</Button>
                </Link>              </div>
            </div>
            <div className='md:w-[45%]  w-full'>
              <img className='h-full w-full object-cover' src="/service1.png" alt="service 1" />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        {/* testimonial section */}
        <div className='mt-8'>
          <h1 className='md:text-5xl text-3xl font-bold text-center mb-4'>Ce qu'ils disent de nous</h1>
          <Testimanials/>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full block" src="/cta.png" alt="dashboard image" />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary ">Let's create more tools and ideas that brings us together.</h2>
            <p class="mb-6 font-light md:text-lg ">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <Button size="lg">
              Prendre rendez-vous
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

            </Button>
          </div>
        </div>
      </section>
     
    </div>
  )
}


