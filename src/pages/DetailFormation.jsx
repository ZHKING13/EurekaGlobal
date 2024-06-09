import React, { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { Link, useParams } from 'react-router-dom'
import { Formations, productItems } from '../../data';
import useStore from '../store/store';
import { cn } from '../lib/utils';

function DetailFormation() {
        const [item, setItem] = useState({});
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [formation, setFormation] = useState({});
    const {
        products,
        formations,
        addProduct,
        removeProduct,
        addFormation,
        removeFormation,
        showDrawer,
        toggleDrawer,
    } = useStore();
    let { id } = useParams();
    console.log("valeur id::" + id);
    const getProductByid = (id) => {
        Formations.forEach((element) => {
            if (element.id === id) {
                setFormation(element);
                console.log(element);
                        setCurrentProductIndex(Formations.indexOf(element));

            }
        });
    };
    const getElementById = (id) => {
        Formations.forEach((element) => {
            if (element.id === id) {
                setItem(element);
                console.log(element);
            }
        });
    };
    const handleAddProduct = () => {
        if (item) {
            addFormation(formation);
            console.log("formation", formations);
        }
    };
    useEffect(() => {
        getElementById(id);
        getProductByid(id);
    }, [id]);
    return (
      formation ? (<div className='container flex flex-col gap-9'>
          <section className=" mt-20 flex md:flex-row flex-col ">
                <div className="flex justify-between w-full md:flex-row flex-col items-center gap-10">
                    <div className="md:w-[45%] md:container md:mt-1 pt-8 flex items-start flex-col gap-5 w-full">
                        <div>
                            <h2 className=" title md:w-[85%]  text-primary">
                              Module <span className='text-secondary'>{ formation?.title}</span>
                            </h2>
                            <img
                                className="mt-4 leading-10 object-cover"
                                src="/rounded.png"
                                alt=""
                            />
                        </div>
                      <p className="textNormal ">{ formation?.detail}        </p>
                    </div>
                    <div className=" flex items-start md:w-[55%] md:-mt-12 max-h-[400px] justify-center">
                        <img
                            className="w-[80%] h-full  object-cover "
                            src={ formation?.img1}
                            alt=""
                        />
                    </div>
                </div>
            </section>
          <section className=" mt-5 flex md:flex-row flex-col gap-6 ">
                <div className="flex justify-between w-full md:flex-row flex-col items-start gap-10">
                    <div className="md:w-[50%] md:container  pt-0 flex items-start flex-col gap-5 w-full">
                        <div>
                            <h2 className=" heading ">
                              Description du module : 
                            </h2>
                           
                        </div>
                      <p className="textNormal">{ formation?.description}    </p>
                    </div>
                    <div className="md:w-[50%] pt-0 flex justify-start items-start flex-col gap-5 w-full">
                        <div className=''>
                            <h2 className=" heading ">
                              AVAntages du MODULE :
                            </h2>
                           
                        </div>
                      <div className='flex flex-col w-[97%] items-start gap-2'>
                          {
                            formation?.avantage &&  formation?.avantage.map((item, index) => {
                                  return (
                                      <div key={item} className='flex gap-4 items-center justify-center' >
                          <img className='w-[45px] h-[40px]' src="/check.png" alt="" />
                                          <p className='textNormal capitalize  text-secondary'>{ item}</p>
                      </div>
                                  )
                              })
                          }
                      
                     </div>
                    </div>
                </div>
            </section>
          <section className=" mt-5 flex md:flex-row flex-col gap-6 ">
                <div className="flex justify-between w-full md:flex-row flex-col items-start gap-10">
                    <div className="md:w-[50%] md:container   w-full">
                        <img className='md:max-h-[500px]' src={ formation?.img2} alt="" />
                    </div>
                    <div className="md:w-[50%] md:pt-9  flex justify-start items-start flex-col gap-5 w-full">
                        <div className=''>
                            <h2 className=" heading ">
                              Bénéfices recherchés :
                            </h2>
                           
                        </div>
                      <div className='flex flex-col w-[97%] items-start gap-2'>
{
                            formation?.benefice &&  formation?.benefice.map((item, index) => {
                                  return (
                                      <div key={item} className='flex  gap-4 items-center justify-center' >
                          <img className='w-[41px] h-[40px]' src="/plus.png" alt="" />
                                 <p className='textNormal capitalize text-secondary'>{ item}</p>
                      </div>
                                  )
                              })
                          }
                      
                     
                      
                      </div>
                      <div className=" md:pt-9 flex items-start flex-col gap-5 w-full">
                        <div>
                            <h2 className=" heading ">
                              Soulagement des dirigeants :
                            </h2>
                           
                        </div>
                          <p className=" w-[97%]">
                              <span className="textNormal ">{formation?.soulagement1}</span> {" "}
                              <span className='textNormal font-bold'>{formation?.soulagement2} </span>
                     </p>
                    </div>
                    </div>
                </div>
          </section>
          <div className="w-full -mt-2 mb-8 flex justify-center gap-8">
                {
                    currentProductIndex > 0 && <Link to={`/formations/${Formations[currentProductIndex - 1]?.id}`}>
                        <Button
                       
                        className={cn("rounded-[45px] px-6 bg-secondary",)}
                    >
                        Precedent
                    </Button>
                    </Link>
                    }
                    <Button
                        onClick={handleAddProduct}
                        disabled={formations.includes(formation)}
                            className={cn("rounded-[45px]", )}
                            
                    >
                        Ajouter à ma selection
                    </Button>
                {
                    currentProductIndex < Formations.length - 1 && <Link to={`/formations/${Formations[currentProductIndex + 1]?.id}`}>
                        <Button
                            className={cn("rounded-[45px] px-6 bg-secondary",)}
                        >
                            Suivant
                        </Button>
                    </Link>
                  }
                    
                </div>
    </div>):null
  )
}

export default DetailFormation