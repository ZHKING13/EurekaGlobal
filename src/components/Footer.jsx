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
          <section className="mx-auto w-full max-w-[1200px] dark:text-white">
              <div className=" flex w-full sm:items-center flex-col md:flex-row">
                  <div className="w-full md:w-[22%] flex flex-col items-center gap-2 mx-auto px-1 py-1 ">
                      <img src="./log.png" alt="" />
                      <div className=" flex flex-col items-between ">
                          <p className="text-secondary font-bold md:text-lg ">
                              EUREKA <span className="text-white">GLOBAL</span>
                          </p>
                          <span className="architects-daughter-regular">
                              Votre Cabinet Conseil
                          </span>
                      </div>
                      <br />

                      <div className="mt-3 text-[12px] flex items-center gap-3">
                          <p>Le Conseil au service de votre performance.</p>
                      </div>
                      {/* Social Handle mdeia */}
                  </div>
                  <div className="flex md:w-[60%] justify-center flex-col md:flex-row gap-8   ">
                      <div className="md:ml-10 border-l  ">
                          <div className="px-4 py-8 ">
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

                      <div className=" border-r ">
                          <div className="px-4 py-8 text-sm ">
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
                  <div className="w-full md:w-[25%]">
                      <div className="px-4 py-8 ">
                          <h1 className="mb-3 text-justify text-lg font-bold sm:text-left ">
                              Vous souhaitez parler de votre futur projet ?
                          </h1>
                          <div className="flex flex-col gap-3">
                              <Button className="bg-secondary" size="lg">
                                  Exprimez vos besoins
                              </Button>
                              <div className="mt-6 flex items-center gap-3">
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
              </div>
              <div>
                  <div className="border-t-2 border-gray-300/50 py-6 text-center">
                      @copyright 2024 Eureuka Global
                  </div>
              </div>
          </section>
      </div>
  );
}

export default Footer