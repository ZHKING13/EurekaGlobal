import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Button } from './ui/button';
function Footer() {
  return (
    <div className="rounded-t-3xl text-white bg-primary ">
      <section className="mx-auto w-full max-w-[1200px] dark:text-white">
        <div className=" flex w-full sm:items-center flex-col md:flex-row">
          <div className="w-full md:w-[25%] flex flex-col items-center gap-2 mx-auto px-4 py-4 ">
            <img src="./log.png" alt="" />
           <div className=' flex flex-col items-center '>
                          <p className='text-secondary font-bold md:text-xl '>EUREKA <span className='text-white'>GLOBAL</span></p>
                          <span className='architects-daughter-regular'>Votre Cabinet Conseil</span>
                      </div>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Abidjan, zone 4</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+225 123456789</p>
            </div>
            {/* Social Handle */}
          </div>
                  <div className="flex   flex-col md:flex-row gap-8 border-l border-r  ">
                      <div className=" ">
              <div className="px-2 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Liens rapides 
                </h1>
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                   Acceuil
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Qui sommes-nous 
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Nos clients
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Cas Pratiques
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Nos solutions 
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Investissseurs
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                   Startups
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    TPEs
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    PMEs
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Grandes Entreprises
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Personnalités Publiques
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-left text-xl font-bold sm:text-left sm:text-xl">
                  Nos Catalogues 
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Produits et Services
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Formations à la Carte
                  </li>
                  
                </ul>
              </div>
            </div>
            
                  </div>
                  <div className="w-full md:w-[25%]">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Vous souhaitez parler de votre futur projet ?
                </h1>
                <div className="flex flex-col gap-3">
                  <Button className="bg-secondary" size="lg" >
                       Prendre rendez-vous
                  </Button>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 Eureuka Global
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer