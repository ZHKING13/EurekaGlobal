import React from 'react';

const teamMembers = [
    {
        role: "Consultant(e) en Transformation d'Entreprise",
        description: 'Transformez votre réussite avec notre expertise',
        image: "./anonyme.png",
        
    },
    {
        role: "Consultant(e) SI en Innovation et Technologie",
        description: 'Innovons votre futur numérique ensemble',
        image: "./anonymeF.png",
       
    },
    {
        role: "Consultant(e) en Fiscalité et Juridique",
        description: 'Guidance fiscale, expertise juridique',
        image: "./anonyme.png",
       
    },
    
    {
        role: "Consultant(e) en Comptabilité",
        description: 'Simplifiez votre gestion comptable avec notre support à distance',
        image: "./anonymeF.png",
       
    }
];
const expert =  [
    {
        role: "Consultant(e) en Optimisation Opérationnelle",
        description: 'Optimisez votre succès avec nos conseils opérationnels',
        image: "./anonyme.png",
        
    },
    
     {
        role: "Consultant(e) en Formation et Formateur",
        description: 'Formation optimale, compétences renforcées',
        image: "./anonymeF.png",
       
    },
    {
        role: "Consultant(e) Expert        en Go to Market",
        description: 'Décuplez votre impact commercial ',
        image: "./anonyme.png",
       
    },
    
    {
        role: "Consultant(e) en Développement Commercial et Marketing",
        description: 'Boostez votre succès et propulsez votre croissance',
        image: "./anonymeF.png",
       
    },
    {
        role: "Consultant(e) en Montage de Projets et Recherche de Financement",
        description: 'Projets fiables montés, financements trouvés',
        image: "./anonyme.png",
       
    },
    {
        role: "Consultant(e) en Stratégie",
        description: 'Guidance stratégique, succès assuré',
        image: "./anonymeF.png",
       
    },
   
];

const Team = () => {
    return (
        <section className=" ">
            <div className="container mx-auto text-center">
                <h2 className="title text-primary font-bold  mb-8">NOS EXPERTS, <span className='text-secondary'>VOTRE AVANTAGE</span> </h2>
                <div className="flex flex-wrap ">
                    {teamMembers.map((item, index) => (
                                              <div key={index} className="w-full text-center md:w-1/2 lg:w-1/4 min-h-[350px] px-3 ">
                            <div className="bg-white border hover:shadow-custom  border-gray-200 rounded-lg flex flex-col items-center overflow-hidden">
                                <div className='w-full bg-[#F2F2F1FF] p-3 flex items-center '>
                                     <img
                                    src={item.image}
                                    alt={item.role}
                                    className="w-20 h-20 m-auto object-cover rounded-full object-center"
                                />
                               </div>
                                <div className="p-6">
                                    <h3 className="textNormal text-primary font-bold mb-3">{item.role}</h3>
                                    <p className="text-gray-600 mb-1">{item.description}</p>
                                    
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
                <div className='flex relative container md:-mt-2 '>
                    <div className='md:w-[30%] hidden md:block absolute  left-2 bottom-0'>
                          <img
                                className="h-full  w-full object-contain"
                                src="./team.png"
                                alt="service 1"
                            />
                    </div>
                     <div className="flex md:w-[67%] md:ml-[30%] md:mr-4 flex-wrap justify-center">
                    {expert.map((member, index) => (
                       <ExpertCard item={member} key={index} />
                    ))}
                  
                </div>
                </div>

        </section>
    );
};
const ExpertCard = ({ item }) => {
    return (
           <div className="w-full text-center md:w-1/2 lg:w-1/3 h-[350px] px-3 md:-mt-10">
                            <div className="bg-white border hover:shadow-custom  border-gray-200 rounded-lg flex flex-col items-center overflow-hidden">
                                <div className='w-full bg-[#F2F2F1FF] p-4 flex items-center '>
                                     <img
                                    src={item.image}
                                    alt={item.role}
                                    className="w-20 h-20 m-auto object-cover rounded-full object-center"
                                />
                               </div>
                                <div className="p-6">
                                    <h3 className="textNormal text-primary font-bold mb-3">{item.role}</h3>
                                    <p className="text-gray-600 mb-1">{item.description}</p>
                                    
                                </div>
                            </div>
                        </div>
     )
 }
export default Team;
