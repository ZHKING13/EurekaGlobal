import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { produits } from "../../data";
import { Link, useParams } from "react-router-dom";
import { cn } from "../lib/utils";

function Solution() {
    const [item, setItem] = useState({});
    let { id } = useParams();
    console.log("valeur id::" + id);
    const getElementById = (id) => {
        produits.forEach((element) => {
            if (element.id === id) {
                setItem(element);
                console.log(element);
            }
        });
    };
    useEffect(() => {
        getElementById(id);
    }, [id]);
    return (
        <div className="container">
            <section className=" mt-20 flex md:flex-row flex-col ">
                <div className="flex justify-between w-full md:flex-row flex-col items-center gap-10">
                    <div className="md:w-[50%] md:container md:mt-10 pt-8 flex items-start flex-col gap-5 w-full">
                        <div>
                            <h2 className="md:text-2xl text-xl font-bold text-primary">
                                {item?.title}
                            </h2>
                            <img
                                className="mt-4 object-cover"
                                src="/rounded.png"
                                alt=""
                            />
                        </div>
                        <p className="text-lg">{item?.description}</p>
                    </div>
                    <div className=" flex items-center md:w-[40%] max-h-[400px] justify-center">
                        <img
                            className="w-full h-full rounded-t-[240px] object-cover "
                            src={item?.img}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className=" dark:bg-gray-100 flex flex-col items-center dark:text-gray-800">
                <div className=" md:p-4 mx-auto flex flex-col items-center my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase md:text-2xl">
                        L'IMPORTANCE de notre solution
                    </h2>
                    <p className="md:text-center md:w-[75%] text-lg ">
                        {item?.importance}
                    </p>
                </div>
                <div className=" md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase ">
                        Les avantages de NOTRE solution CREATION D'ENTREPRISE
                    </h2>
                </div>
                <div className=" flex flex-col justify-center md:w-[85%]  md:flex-row  gap-4 ">
                    {item.approach &&
                        item?.approach.map((a, index) => {
                            return (
                                <div
                                    className={cn(
                                        "flex w-full sm:w-auto md:min-w-1/4 md:w-1/3 my-2 flex-col items-center md:p-4",
                                        {
                                            " md:border-l-2 md:border-r-2":
                                                index == 1,
                                        },
                                        { " md:border-r-2": index == 2 }
                                    )}
                                >
                                    <img
                                        src="/icon.png"
                                        alt="check"
                                        className="w-[55px] h-[55px]"
                                    />
                                    <h3 className="my-3 text-lg text-center text-secondary font-semibold">
                                        {a?.title}
                                    </h3>
                                    <div className=" leading-tight text-center">
                                        <p className="text-sm text-center">
                                            {a?.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="md:container md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 md:text-xl text-lg font-bold text-primary uppercase ">
                        NOTRE APPROCHE PRATIQUE POUR CREER VOTRE ENTREPRISE
                    </h2>
                </div>
                <div className="md:container flex flex-col justify-center md:w-[85%] md:flex-row  gap-2 ">
                    {item.advantages &&
                        item.advantages.map((b, index) => {
                            return (
                                <div
                                    className={cn(
                                        "flex w-full sm:w-auto md:min-w-1/4 md:w-1/3 flex-col  items-center gap-4",
                                        {
                                            " md:border-l-2 md:border-r-2":
                                                index == 1,
                                        },
                                        { " md:border-r-2": index == 2 }
                                    )}
                                >
                                    <img
                                        src="/chec.png"
                                        alt="check"
                                        className="w-10 h-10"
                                    />
                                    {/* <h3 className="my-3 text-lg text-center font-semibold">
                                    {b.title}
                                </h3> */}
                                    <div className=" leading-tight text-sm text-center">
                                        <p>{b.title || b.subtitle || b}</p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="md:container flex flex-col items-center md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase ">
                        Pourquoi nous choisir
                    </h2>
                    <p className="md:text-center md:w-[75%] text-lg ">
                        {item?.whyChoose}
                    </p>
                </div>
                <div className="md:container md:p-4 flex flex-col items-center mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase">
                        Contactez-nous dès maintenant
                    </h2>
                    <p className="md:text-center md:w-[75%] text-lg ">
                        {item?.contact}
                    </p>
                </div>
                <div className="w-full mt-6 mb-5 flex justify-center">
                    <Button className="rounded-[45px]">
                        Ajouter à ma selection
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Solution;
