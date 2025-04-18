import React from 'react'
import { Button } from '../components/ui/button'
import { Link, redirect, useNavigate } from 'react-router-dom'

export const logo = <>
<span className='font-bold text-secondary'>EUREKA</span> <span className='font-bold text-primary'>GLOBAL</span></>
function Preambule() {
  return (
      <div className="">
           <section
                style={{
                    backgroundImage: `url(/produit.png)`,
                }}
                className={`bg-[url(/produit.png)] mt-15  md:mt-15 bg-no-repeat  md:bg-cover object-contain bg-cover bg-center `}
            >
                <div className="h-full w-full flex pt-[16px]  items-center md:h-[50vh] container bg-primary">
                    <div className="md:w-[90%] flex flex-col pt-[85px] md:pt-0 gap-6 font-bold md:ml-20 text-white">
                        <div className="flex pt-5 gap-4">
                            <h1 className="mt-4 title ">
                                 PREAMBULE A <span className="text-[#00B0F0FF] ">
                                NOS SOLUTIONS SUR MESURES
                            </span>
                            </h1>
                            {" "}
                        </div>
                        <p className="textNormal  ">
                             <span className="font-bold text-secondary">EUREKA</span>{" "}
                  <span className="font-bold">GLOBAL</span> vous propose une gamme complète de solutions sur mesure conçues pour répondre aux besoins spécifiques de chaque type de clientèle, de l'investisseur individuel aux grandes entreprises, en passant par les startups dynamiques et les personnalités publiques influentes.<br/> Découvrez ci-dessous nos offres personnalisées pour chaque catégorie de clients
                            
                        </p>
                    </div>
                </div>
            </section>
          <section className="container">
              <div className="flex flex-col items-center gap-10 pt-12 pb-6">
                  {/* lister les service de sorte a mettre le titre et la description a gauche l'image a droite avec un call to action apres la description */}
                  <div
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="200"
                      className="flex mb-3 flex-col md:flex-row gap-10 w-full"
                  >
                      <div className="flex flex-col justify-around md:w-[45%] w-full ">
                          <h2 className=" heading text-primary font-bold">
                              Pour{" "}
                              <span className="text-secondary">
                                  les Investisseurs
                              </span>{" "}
                          </h2>
                          <p className="textNormal">
                              {logo} est votre partenaire stratégique qui
                              vous accompagne vers l'excellence. Notre
                              catalogue de services est une invitation à
                              explorer les solutions adaptées à chaque défi
                              spécifique. Personnalisez votre parcours vers le
                              succès et découvrez comment notre expertise peut
                              transformer votre vision en réalité.
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Investisseurs"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                      <div className="md:w-[45%] rounded-2xl w-full">
                          <img
                              className="h-full w-full object-contain"
                              src="./startup.png"
                              alt="service 1"
                          />
                      </div>
                  </div>
                  <div
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="300"
                      className="flex flex-col-reverse md:flex-row gap-10 w-full"
                  >
                      <div className="md:w-[45%] rounded-2xl  h-[287px] w-full">
                          <img
                              className="h-full w-full object-cover rounded-2xl"
                              src="./invest.png"
                              alt="service 1"
                          />
                      </div>
                      <div className="flex flex-col justify-around  md:w-[45%] w-full ">
                          <h2 className=" heading text-primary font-bold">
                              Pour les{" "}
                              <span className="text-secondary">Startups</span>{" "}
                          </h2>
                          <p className="textNormal">
                              Chez {logo}, nous comprenons que chaque entreprise
                              est unique. Nos solutions sont adaptées pour
                              répondre spécifiquement aux besoins de chaque
                              entreprise naissante pour vous soutenir
                              efficacement dans votre parcours vers la réussite.
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Startups"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                  </div>
                  <div
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="200"
                      className="flex flex-col md:flex-row gap-10 w-full"
                  >
                      <div className="flex flex-col justify-around md:w-[45%] w-full  ml-2">
                          <h2 className=" heading text-primary font-bold">
                              Pour les{" "}
                              <span className="text-secondary font-bold">
                                  Très Petites Entreprises (TPEs)
                              </span>{" "}
                          </h2>
                          <p className="textNormal mt-2">
                              À chaque entreprise son histoire, et à chaque
                              histoire une solution sur mesure. {logo} vous
                              accompagne avec des solutions adaptées à votre
                              taille, boostant votre croissance et optimisant
                              vos opérations.
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Tres-Petites-Entreprises"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                      <div className="md:w-[45%] rounded-2xl w-full">
                          <img
                              className="h-full w-full object-cover rounded-2xl"
                              src="./tpe.png"
                              alt="service 1"
                          />
                      </div>
                  </div>
                  <div
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="300"
                      className="flex flex-col-reverse md:flex-row gap-10 w-full"
                  >
                      <div className="md:w-[45%] rounded-2xl  h-[287px] w-full">
                          <img
                              className="h-full rounded-2xl w-full object-cover"
                              src="./pme.png"
                              alt="service 1"
                          />
                      </div>
                      <div className="flex flex-col justify-around md:w-[45%] w-full ">
                          <h2 className=" heading text-primary font-bold">
                              Pour les{" "}
                              <span className="text-secondary">
                                  Petites & Moyennes Entreprises (PMEs)
                              </span>{" "}
                          </h2>
                          <p className="textNormal">
                              {logo}, le partenaire des entreprises ambitieuses.
                              Nos solutions sur mesure visent à renforcer votre
                              compétitivité, à stimuler votre croissance et à
                              assurer votre pérennité sur vos marchés.
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Petites-Moyennes-entreprises"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                  </div>
                  <div
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="200"
                      className="flex flex-col md:flex-row gap-10 w-full"
                  >
                      <div className="flex flex-col justify-around md:w-[45%] w-full  ml-2">
                          <h2 className=" heading text-primary font-bold">
                              Pour les{" "}
                              <span className="text-secondary font-bold">
                                  Grandes Entreprises
                              </span>{" "}
                          </h2>
                          <p className="textNormal mt-2">
                              Chez {logo}, nous comprenons que vous avez des
                              défis uniques et des opportunités sans précédent.
                              Notre programme de Restructuration Stratégique est
                              conçu pour offrir une vision holistique de votre
                              organisation, identifier les leviers de croissance
                              et stimuler une transformation profonde des défis
                              en opportunités, assurant une croissance soutenue
                              et une compétitivité renforcée.
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Grandes-Entreprises"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                      <div className="md:w-[45%]  w-full">
                          <img
                              className="h-full w-full object-cover rounded-2xl"
                              src="./ppublic.png"
                              alt="service 1"
                          />
                      </div>
                  </div>
                  <div
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="300"
                      className="flex flex-col-reverse md:flex-row gap-10 w-full"
                  >
                      <div className="md:w-[45%]   h-[287px] w-full">
                          <img
                              className="h-full rounded-2xl w-full object-cover"
                              src="./entreprise.png"
                              alt="personnalite public"
                          />
                      </div>
                      <div className="flex flex-col justify-around gap-3 md:w-[45%] w-full ">
                          <h2 className="text-primary heading font-bold">
                              Pour les{" "}
                              <span className="text-secondary">
                                  Personnalités Publiques
                              </span>{" "}
                          </h2>
                          <p className="textNormal mt-2">
                              Chez {logo}, nous comprenons l'importance de votre
                              rôle et les défis complexes auxquels vous êtes
                              confrontés. Notre équipe dédiée aux leaders
                              politiques offre une expertise spécifique pour
                              vous accompagner dans la formulation et la mise en
                              œuvre de politiques impactantes. Ensemble, nous
                              façonnons l'avenir des nations.{" "}
                          </p>
                          <div className="md:w-40 w-full">
                              <Link to={"/preambule/Personnalites-Publiques"}>
                                  <Button
                                      size="lg"
                                      className="rounded-[45px] w-full"
                                  >
                                      Plus de details
                                  </Button>
                              </Link>{" "}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="cta container bg-[#F2F2F2FF] py-8 my-5">
              <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="200"
                  className="flex flex-col md:flex-row gap-10 w-full"
              >
                  <div className="flex flex-col md:w-[45%] w-full  ml-2">
                      <div>
                          <h2 className=" text-primary heading font-bold">
                              POURQUOI NOUS CHOISIR ?
                          </h2>
                          <p className="textNormal mt-2">
                              Nos consultants disposent d'experiences pratiques,
                              renforcées par l'expertise approfondie et
                              l'approche personnalisée d'{logo}. Nous nous engageons à fournir des solutions sur mesure et des
                              résultats tangibles à nos clients, établissant des
                              partenariats à long terme. Optez pour notre
                              cabinet et bénéficiez d'un partenaire fiable pour
                              atteindre vos objectifs commerciaux et
                              stratégiques.
                          </p>
                      </div>
                      <div className='my-5'>
                          <h2 className=" text-primary heading my-2 font-bold">
                              CONTACTEZ-NOUS DES AUJOURD'HUI
                          </h2>
                          <p className="textNormal mt-2">
                              Si vous recherchez un partenaire de confiance pour
                              vous guider vers le succès, vous êtes au bon
                              endroit chez {logo}. Contactez-nous dès
                              aujourd'hui pour transformer vos défis en
                              opportunités de croissance durable et réaliser vos
                              objectifs.
                          </p>
                      </div>
                      <div className="md:w-40 w-full">
                          <Link to={"/contact"}>
                              <Button className="rounded-[45px] " size="lg">
                      Prendre rendez-vous
                              </Button>
                          </Link>
                      </div>
                  </div>
                  <div className="md:w-[45%]  w-full">
                      <img
                          className="h-full w-full object-cover rounded-2xl"
                          src="./ct.png"
                          alt="call to action"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Preambule