import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaCaretRight
} from "react-icons/fa";
import { Button } from './ui/button';
function Footer() {
  return (
      <div className=" text-white bg-primary ">
          <section className="mx-auto w-full max-w-[1350px] dark:text-white">
              <div className=" flex w-full sm:items-center flex-col md:flex-row">
                  <div className="w-full md:w-[20%] justify-center flex flex-col items-center gap-2  px-1 py-1 ">
                      <img src="/log.png" alt="" />
                      <div className=" flex flex-col items-between text-center ">
                          <p className="text-secondary font-bold md:text-lg ">
                              EUREKA <span className="text-white">GLOBAL</span>
                          </p>
                          <span className="architects-daughter-regular">
                              Votre Cabinet Conseil
                          </span>
                          <div className="mt-1.5 text-[12px] flex items-center ">
                          <img src="/ftmg.png" alt="" />
                      </div>
                      </div>
                          
                      <div className=" text-[12px] flex items-center gap-3">
                          <p>Le Conseil au service de votre performance.</p>
                      </div>
                      {/* Social Handle mdeia */}
                  </div>
                  <div className='md:w-[60%]'>
                      
                  <div className="flex md:w-[100%] justify-center flex-col md:flex-row gap-8   ">
                      <div className="md:ml-5 flex items-center justify-center md:w-1/2 border-l  ">
                          <div className="px-4 py-4 ">
                              <h1 className="mb-3 text-justify text-lg font-bold sm:text-left sm:text-lg">
                                  Nos solutions
                              </h1>
                              <ul className={`flex flex-col text-sm gap-0`}>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      Investissseurs
                                  </li>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      Startups
                                  </li>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      TPEs
                                  </li>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      PMEs
                                  </li>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      Grandes Entreprises
                                  </li>
                                  <li className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-2xl" />{" "}
                                      Personnalités Publiques
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="flex items-start justify-center border-r md:w-1/2 md:mr-12 pr-2  ">
                          <div className="px-4 py-4 text-sm ">
                              <h1 className="mb-2 text-left text-lg font-bold sm:text-left sm:text-lg">
                                  Nos Catalogue
                              </h1>
                              <ul className="flex flex-col text-sm gap-0">
                                  <li className="cursor-pointer flex items-cente gap-2 r transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-xl" />{" "}
                                      Produits et Services
                                  </li>
                                  <li className="cursor-pointer flex gap-2 items-center transition-all duration-300 hover:translate-x-[2px]">
                                      <FaCaretRight className="text-secondary text-xl" />{" "}
                                      Formations à la Carte
                                  </li>
                              </ul>
                          </div>
                      </div>
                      </div>
                      <div className='w-[100%]'>
                  <div className="border-t py-1 md:ml-5 md:mr-12 md:border-r md:border-l w-[100% - 20px] border-gray-100  text-center">
                      @copyright 2024 Eureuka Global
                  </div>
              </div>
                  </div>
                  <div className="w-full md:w-[20%]">
                      <div className="px-2 py-4 flex flex-col ">
                          <h1 className="mb-3 text-justify text-lg font-bold sm:text-left ">
                              Vous souhaitez parler de votre futur projet ?
                          </h1>
                          <div className="flex flex-col mt-3">
                              <Button className="bg-secondary" size="lg">
                                  Exprimez vos besoins
                              </Button>
                              
                          </div>
                          <div className="mt-9 flex items-center justify-center gap-3">
                                  <a
                                      href="#"
                                      className="duration-200 hover:scale-105"
                                  >
                                      <FaInstagram className="text-3xl" />
                                  </a>
                                  <a
                                      href="#"
                                      className="duration-200 hover:scale-105"
                                  >
                                      <FaFacebook className="text-3xl" />
                                  </a>
                                  <a
                                      href="#"
                                      className="duration-200 hover:scale-105"
                                  >
                                      <FaLinkedin className="text-3xl" />
                                  </a>
                              </div>
                      </div>
                  </div>
              </div>
              
          </section>
      </div>
  );
}

export default Footer