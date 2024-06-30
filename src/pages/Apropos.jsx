import React, { useEffect, useState } from 'react'
import { About, Valeurs } from '../../data';
import { logo } from './Preambule';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Team from '../components/Team';

function Apropos() {
    const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
          <div
      // style={{
      //   background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1684487747385-442d674962f2) no-repeat center',
      //     backgroundSize: 'cover',
      //   //  backgroundPositionY: offsetY * 0.5
      // }}
      className="py-32 bg-primary px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
    >
      <h1 className="pb-4 text-3xl">QUI SOMME-NOUS</h1>
      
      </div>
     <section
      id="features"
      className="relative block px-6 py-10 md:py-12  md:px-10 "
      
    >
      <div className="relative mx-auto max-w-5xl text-center">
        
        <h2 className="block w-full  bg-clip-text  text-primary  title">
          A PROPOS D'EUREKA GLOBAL
        </h2>
       
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {
            About?.map((valeur,id) => (
                 <div key={id} className="rounded-md border p-8 text-center shadow">
          <div
            className="button-text mx-auto flex h-16 w-16"
           
          >
          <img className='h-full w-full' src={valeur.img} alt="" />
          </div>
          <h3 className="mt-6 heading">{valeur?.title} </h3>
                <p className="my-4 mb-0 textNormal ">
                  {valeur?.desc}
          </p>
        </div>
            ))
       }

      
      </div>

      
    </section>
     <section
      id="features"
      className=" block px-6 py-10 md:py-20 bg-[#F2F2F1FF] md:px-10 "
      
    >
      <div className="relative mx-auto max-w-5xl text-center">
        
        <h2 className="block w-full  bg-clip-text  text-primary  title">
          NOS VALEURS
        </h2>
        <p className="mx-auto my-4 w-full  textNormal">
         La culture d'entreprise {logo} trouve ses fondements dans les
valeurs ci apres : Excellence, Cooperation, Agilite,et Integrite
        </p>
      </div>

      <div className="relative mx-auto grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {
            Valeurs.map((valeur,id) => (
                 <div key={id} className="rounded-md border p-8 text-center shadow">
          <div
            className="button-text mx-auto flex h-16 w-16"
           
          >
          <img className='h-full w-full' src={valeur.img} alt="" />
          </div>
          <h3 className="mt-6 heading">{valeur?.title} </h3>
                <p className="my-4 mb-0 textNormal ">
                  {valeur?.desc}
          </p>
        </div>
            ))
       }

      
      </div>

      
      </section>
      <section className=' relative block px-6 py-10 md:py-12  md:px-10' >
         <div
                       
                        className="flex flex-col-reverse md:flex-row gap-6 w-full"
                    >
                        <div className="md:w-[45%]    w-full">
                            <img
                                className="h-full w-full object-cover"
                                src="./integrite.png"
                                alt="service 1"
                            />
                        </div>
                        <div className="flex flex-col  md:w-[45%] w-full gap-4">
                            <h2 className=" heading font-bold text-primary">
                               L'INTEGRITE
                            </h2>
                            <p className="textNormal">
                               L'intégrité est la pierre angulaire de notre éthique professionnelle. Nous agissons de manière honnête, éthique et transparente dans toutes nos interactions. La confiance que nos clients ont en nous est notre bien le plus précieux, et nous la préservons à tout prix. Ces valeurs ne sont pas qu'une simple déclaration : elles sont ancrées dans notre culture d'entreprise et dans la façon dont nous travaillons. Chez {logo}, vous pouvez avoir confiance en notre engagement envers l'excellence, la coopération, l'agilité et l'intégrité à chaque étape de notre collaboration. Nous sommes fiers de partager ces valeurs avec nos clients et de contribuer à la réussite de leur entreprise tout en respectant ces principes fondamentaux.
                            </p>
                            <div className="md:w-40 w-full">
                                <Link to={"/prouits&service"}>
                                    <Button
                                        size="lg"
                                        className="rounded-[45px] w-full"
                                    >
                                        CONTACTEZ NOUS
                                    </Button>
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
      </section>
      <Team/>
    </div>
  )
}

export default Apropos