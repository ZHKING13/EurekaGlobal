import React, { useEffect, useState } from 'react'
import { About, Valeurs } from '../../data';
import { logo } from './Preambule';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Team from '../components/Team';
import { replaceTextWithLogo } from './Solution';
import { FaCaretRight } from 'react-icons/fa';
const slogan = [
  "Excellence  Vous atteignez l'excellence dans toutes vos actions grâce à notre accompagnement.",
  "Service  Vous bénéficiez d'un service de qualité qui dépasse vos attentes.",
  "Proactivité  Vous pouvez compter sur une anticipation proactive de vos besoins.",
  "Résilience  Vous surmontez les défis avec résilience et détermination.",
  "Innovation  Vous explorez constamment de nouvelles idées et solutions pour rester en tête.",
  "Transformation  Vous encouragez l'évolution et redéfinissez la croissance grâce à notre soutien."
]

const BoldFirstWord = ({ text }) => {
  const firstSpaceIndex = text.indexOf(' ');
  const firstWord = text.substring(0, firstSpaceIndex);
  const restOfText = text.substring(firstSpaceIndex);

  return (
    <div className="">

      <span className="font-bold flex items-center gap-2">      <FaCaretRight className="text-secondary text-xl" />{" "}
 {firstWord} :</span>
      <span className='ml-7'>{restOfText}</span>
    </div>
  );
};
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
    <div className=''>
          <div
      style={{
        // background: 'linear-gradient(rgb(0 34 103 / 0.5), rgb(0 34 103 / 0.5)), url(/about.jpg) no-repeat center',
          // backgroundImage: `url(/about.png)`
        //  backgroundPositionY: offsetY * 0.5
      }}
      className=" bg-primary fixed z-40 container  top-0 left-0 right-0 md:h-[84px] fixe  object-contain bg-cover bg-center  overflow-auto"
    >
      
      </div>
     <section
      id="features"
      className="relative block px-6 py-8 md:py-12  md:px-10 "
      
    >
      <div className="relative mx-auto max-w-5xl text-center">
              <h1 className="pb-4 text-white title">QUI SOMME-NOUS</h1>

        <h2 className="block w-full  bg-clip-text  text-black  heading">
          A PROPOS D'{logo}
        </h2>
       
      </div>

      <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {
            About?.map((valeur,id) => (
                          <DetailCard item={valeur} id={id} />

            ))
       }

      
      </div>

      
    </section>
     <section
      id="features"
      className="  px-6 -pt-4   md:px-10 "
      
    >
      <div className="relative mx-auto max-w-5xl text-center">
        
        <h2 className="block w-full  bg-clip-text  text-primary  title">
          NOS VALEURS
        </h2>
        <p className="mx-auto my-2 w-full  ">
         La culture d'entreprise {logo} trouve ses fondements dans les
valeurs ci apres :
        </p>
      </div>

      <div className="relative mx-auto grid grid-cols-1 gap-10 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            Valeurs.map((valeur,id) => (
              <DetailCard item={valeur} id={id} />
            ))
       }

      
      </div>

      
      </section>
      <section className=' relative   px-6 py-10 md:py-12  md:px-10' >
         <div
                       
                        className="flex justify-start mb-4 flex-col-reverse md:flex-row gap-6 w-full"
                    >
                        <div className="md:w-[40%]    w-full">
                            <img
                                className="h-full w-full object-contain bg-cover bg-center"
                                src="./integrite.jpg"
                                alt="service 1"
                            />
                        </div>
                        <div className="flex flex-col  md:w-[55%] w-full gap-2">
            <div className='flex flex-col  gap-1'>
              
              <div className='' >
                
                <p className="textNormal">
                  <span className=" title font-bold text-primary  ">
                               L'E.S.P.R.I.T
                            </span>
              {replaceTextWithLogo(" incarne nos valeurs professionnelles chez EUREKA GLOBAL :")}
            </p>
              </div>
              <p>{" "} </p>
            {slogan.map((item, id) => (
        <BoldFirstWord key={id} text={item} />
      ))}
            </div>
                            
                        </div>
        </div>
         <span className='pt-5'>Nous agissons avec honnêteté, éthique et transparence dans toutes nos interactions, préservant ainsi la confiance précieuse de nos clients. Ces valeurs imprègnent notre culture d'entreprise et guident nos actions à chaque étape de notre collaboration. Nous sommes fiers de partager ces valeurs avec nos clients et de contribuer à leur succès .</span>

      </section>
      <Team/>
    </div>
  )
}

const DetailCard = ({ item,id }) => {
  return (
      <div key={id} className="border hover:shadow-custom  border-gray-200 rounded-lg p-8 text-center ">
          <div
            className="button-text mx-auto flex  "
           
          >
          <img className='w-[150px] h-[150px] mx-auto' src={item.img} alt="" />
          </div>
          <h3 className="mt-6 heading">{item?.title} </h3>
                <span className="my-4 mb-0  ">
                  {replaceTextWithLogo(item?.desc)}
          </span>
        </div>
  )
}
export default Apropos