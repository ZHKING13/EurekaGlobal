import React from 'react'
import {
    FaFacebook,
    FaWhatsapp,
    FaMapMarkedAlt,
    FaLinkedin,
    FaTwitter,
    FaCaretRight,
    FaWhatsappSquare,

} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiMail, CiGlobe } from "react-icons/ci";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
function Footer() {
  return (
      <div className=" text-white bg-primary ">
          <section className="mx-auto w-full max-w-[1350px] dark:text-white">
              <div className=" flex w-full sm:items-center justify-start flex-col md:flex-row">
                  <div className="w-full md:w-[25%] justify-center flex flex-col items-center gap-2  px-1 py-1 ">
                      <img className='w-20 h-20' src="/log.svg" alt="" />
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
                          <p>Le Conseil au service de votre performance</p>
                      </div>
                      {/* Social Handle mdeia */}
                  </div>
                  <div className="md:w-[55%]">
                      <div className="flex md:w-[100%] justify-center flex-col md:flex-row gap-8   ">
                          <div className="md:ml-5 flex items-center justify-center md:w-1/2 border-l  ">
                              <div className="px-4 md:ml-[60px] py-4 ">
                                  <h1 className="mb-3 text-justify text-lg font-bold sm:text-left sm:text-lg">
                                      Nos solutions
                                  </h1>
                                  <ul className={`flex flex-col text-sm gap-0`}>
                                      <Link to="/preambule/investisseur" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          Investissseurs
                                      </Link>
                                      <Link to="/preambule/startups" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          Startups
                                      </Link>
                                      <Link to="/preambule/tres-petite-entreprise" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          TPEs
                                      </Link>
                                      <Link to="/preambule/petite-moyenne-entreprise" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          PMEs
                                      </Link>
                                      <Link to="/preambule/grande-entreprise" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          Grandes Entreprises
                                      </Link>
                                      <Link to="/preambule/personnalite-publique" className="cursor-pointer flex items-center gap-2  transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-2xl" />{" "}
                                          Personnalités Publiques
                                      </Link>
                                  </ul>
                              </div>
                          </div>

                          <div className="flex items-start justify-center border-r md:w-1/2 md:mr-12 pr-2   ">
                              <div className="px-4 py-4 text-sm ">
                                  <h1 className="mb-2 text-left text-lg font-bold sm:text-left sm:text-lg">
                                      Nos Catalogues
                                  </h1>
                                  <ul className="flex flex-col text-sm gap-0">
                                      <Link to={"/produits&services"} className="cursor-pointer flex items-cente gap-2 r transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-xl" />{" "}
                                          Produits et Services
                                      </Link>
                                      <Link to="/formations" className="cursor-pointer flex gap-2 items-center transition-all duration-300 hover:translate-x-[2px]">
                                          <FaCaretRight className="text-secondary text-xl" />{" "}
                                          Formations à la Carte
                                      </Link>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="w-[100%]">
                          <div className="border-t text-[12px] py-3 md:ml-5 md:mr-12 md:border-r md:border-l w-[100% - 20px] border-gray-100  text-center">
                              © 2024{" "}
                              <span className="text-secondary">Eureka</span>{" "}
                              Global Tous droits réservés
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-[20%]">
                      <div className="px-2 py-1 flex justify-start text-sm flex-col ">
                           <div className=" flex items-start  justify-start gap-3">
                              <a target="_blank"
                                  href="https://twitter.com/EurekaGlobal_"
                                  className="duration-200 hover:scale-105 flex items-center justify-center gap-1"
                              >
                                  <FaTwitter color="#fff" className="text-2xl" />{" "}
                              </a>

                              <a target="_blank"
                                  href="https://www.facebook.com/GroupEurekaGlobal"
                                  className="duration-200 hover:scale-105 flex items-center justify-center gap-1"
                              >
                                  <FaFacebook
                                      color="#fff"
                                      className="text-2xl"
                                  />{" "}
                              </a>
                              <a target="_blank"
                                  href="https://www.linkedin.com/in/groupeurekaglobal/"
                                  className="duration-200 hover:scale-105 flex items-center justify-center gap-1"
                              >
                                  <FaLinkedin
                                      color="#fff"
                                      className="text-2xl"
                                  />{" "}
                              </a>
                              <a target="_blank"
                                  href="https://whatsapp.com/channel/0029VaOkaQA42Dcodh6x3v0p"
                                  className="duration-200 hover:scale-105 flex items-center justify-center gap-1"
                              >
                                  <FaWhatsappSquare
                                      color="#fff"
                                      className="text-2xl"
                                  />{" "}
                              </a>
                              <a
                                  href="mailto:info@EurekaGlobal.co"
                                  className="duration-200 hover:scale-105 flex items-center justify-center gap-1"
                              >
                                  <MdEmail
                                      color="#fff"
                                      className="text-2xl"
                                  />{" "}
                              </a>
                      
                          </div>

                          <div className="mb-4 pt-10 flex items-start flex-col justify-start pb-8 gap-3">
                              <a className="duration-200 hover:scale-105 flex items-center justify-center gap-2">
                                  <FaWhatsapp
                                      color="#1DD75BFF"
                                      className="text-lg"
                                  />{" "}
                                  (+225) 07 888 999 37
                              </a>
                              <a className="duration-200 flex items-center justify-center gap-1 hover:scale-105">
                                  <CiMail
                                      color="#00B0F0FF"
                                      className="text-lg"
                                  />{" "}
                                  info@EurekaGlobal.co
                              </a>
                              <a
                                  href="#"
                                  className="duration-200 flex items-center justify-center gap-1 hover:scale-105"
                              >
                                  <FaMapMarkedAlt
                                      color="#00B0F0FF"
                                      className="text-lg"
                                  />{" "}
                                  Cocody, Angré, Abidjan
                              </a>
                              <a
                                  href="#"
                                  className="duration-200 flex items-center justify-center gap-1 hover:scale-105"
                              >
                                  <CiGlobe
                                      color="#00B0F0FF"
                                      className="text-lg"
                                  />{" "}
                                  www.EurekaGlobal.Co
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