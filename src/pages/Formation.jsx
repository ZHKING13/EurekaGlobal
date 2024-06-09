import React from "react";
import { formation } from "../../data";
import FormationCard from "../components/FormationCard";
import { Link } from "react-router-dom";
import CtaSection from "../components/Cta";

function Formation() {
    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(/produit.png)`,
                }}
                className={`bg-[url(/produit.png)] mt-15  md:mt-15 bg-no-repeat  md:bg-cover object-contain bg-cover bg-center `}
            >
                <div className="h-full w-full flex pt-[60px]  items-center md:h-[60vh] container bg-primary">
                    <div className="md:w-[90%] flex flex-col pt-20 md:pt-0 gap-6 font-bold md:ml-20 text-white">
                        <div className="flex gap-4">
                            <h1 className=" title ">
                                Nos <span className="text-[#00B0F0FF] ">
                                Formations à la carte
                            </span>
                            </h1>
                            {" "}
                        </div>
                        <p className="textNormal  ">
                             <span className="font-bold text-secondary">EUREKA</span>{" "}
                  <span className="font-bold">GLOBAL</span> vous propose une gamme diversifiée de
                            modules conçue pour améliorer les compétences de
                            votre équipe nécesssaire pour garantir une
                            croissance pérenne et une performance
                            exceptionnelle.
                            <p></p>
                            <p className="textNormal mt-2">
                                Votre succès commence par la formation.
                                Parcourez nos modules et prenez le contrôle de
                                l'avenir professionnel de vos collaborateurs dès
                                maintenant !
                            </p>
                        </p>
                    </div>
                </div>
            </section>
            <div className="my-5 h-5"></div>
            <section className="flex container gap-9 flex-wrap mx-auto items-start justify-center   my-10">
                {formation.map((item,index) => {
                    return <FormationCard index={index+1} item={item} key={item.img} />;
                })}
                <div className="max-w-[310px] hover:shadow-custom bg-white border border-[#002267FF] rounded-lg p-3  dark:bg-gray-800 dark:border-gray-700">
                    <a className="flex items-center justify-center">
                        <img className="rounded-t-lg" src="/f10.png" alt="" />
                    </a>
                    <div className="p-1">
                        <div className="flex text-center  ">
                            <h2 className="mb-2 text-[16px] font-bold uppercase tracking-tight text-primary ">
                                Module {"  "}
                                {"  "}
                                <span className=" text-secondary text-center ">
                                    Gestion et Sécurité des Données
                                </span>
                            </h2>
                        </div>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                            Renforcez la gestion et la sécurité de vos données
                            avec une approche complète, garantissant la
                            confidentialité, l'intégrité, et la disponibilité
                            des informations, essentielles à la réussite de
                            votre entreprise.
                        </p>
                        <div className="w-full flex items-end justify-center">
                            <Link
                                to={`/formations/MGSD24`}
                                className="inline-flex text-right hover:bg-secondary items-center px-3 py-2 text-sm font-medium  text-primary/90 rounded-lg bg-primary text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Découvrir
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            <CtaSection />
            </section>

        </div>
    );
}

export default Formation;
