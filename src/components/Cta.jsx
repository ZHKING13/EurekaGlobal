import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CtaSection = ({produit,home}) => {
    const formationTile = "Prêt à booster vos compétences ?";
    const formationDesc = "Contactez-nous dès maintenant pour personnaliser votre programme de formation et commencer votre voyage vers le succès. Nous sommes là pour vous soutenir à chaque étape. ";
    const formationLink="Cliquez ici pour commander nos formations"
    const productTile = "Prêt à passer à l'action ?";
    const productLink= "Commandez nos produits & services"
    const productDesc = "Contactez-nous dès maintenant pour discuter de la façon dont nous pouvons répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs. Nous sommes là pour vous accompagner à chaque étape de votre parcours vers le succès."
    return (
        <div className="bg-primary rounded-[8px] container text-white py-2">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:flex-row justify-between items-center">
                    <div className="lg:w-[80%]">
                        <h1 className="md:title text-3xl font-bold text-white mb-4">{produit ? productTile:formationTile} </h1>
                        <p className="textNormal mb-8">{produit ? productDesc:formationDesc} </p>
                        {
                            home && <div className='flex justify-around items-start'>
                             
                            <Link to="/produits&services" >
                                <Button className="text-primary bg-white hover: hidden lg:block ">
                            Commandez nos produits & services
                            </Button>
                            </Link>
                            <Link to="/formations" >
                                 <Button className="text-primary  bg-white hover: hidden lg:block ">
                            Commandez nos formations
                        </Button>
                            </Link>
                       
                       </div>
                        }
                        
                        <Button className="bg-white block lg:hidden ">
                            Nous contacter
                        </Button>
                    </div>
                    <div className="lg:w-1/2 lg:ml-12 relative">
                        <img src="/cta1.png" alt="Tailwind CSS" className="rounded-lg shadow-lg hover:shadow-xl transition duration-200" />
                        <img src="/lamp.png" alt="Tailwind CSS" className="absolute md:top-8 top-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
