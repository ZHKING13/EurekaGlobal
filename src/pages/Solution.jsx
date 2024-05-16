import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { produits } from "../../data";
import { Link, useParams } from "react-router-dom";

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
                    <div className="md:w-[50%] md:container flex flex-col gap-5 w-full">
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
                    <div className=" flex items-center max-h-96 justify-center">
                        <img
                            className="w-full h-full rounded-t-[240px] object-contain "
                            src={item?.img}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="md:container md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase md:text-2xl">
                        L'IMPORTANCE de notre solution
                    </h2>
                    <p className="md:text-center text-lg ">
                        {item?.importance}
                    </p>
                </div>
                <div className="md:container md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase ">
                        Les avantages de NOTRE solution CREATION D'ENTREPRISE
                    </h2>
                </div>
                <div className="md:container flex flex-col justify-center md:flex-row  gap-4 ">
                    {item.approach &&
                        item?.approach.map((a) => {
                            return (
                                <div className="flex w-full sm:w-auto flex-col items-center md:p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-8 h-8 dark:text-violet-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <h3 className="my-3 text-lg text-center font-semibold">
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
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase ">
                        NOTRE APPROCHE PRATIQUE POUR CREER VOTRE ENTREPRISE
                    </h2>
                </div>
                <div className="md:container flex flex-col justify-center md:flex-row  gap-4 ">
                    {item.advantages &&
                        item.advantages.map((b) => {
                            return (
                                <div className="flex w-full sm:w-auto flex-col items-center md:p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-8 h-8 dark:text-violet-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {/* <h3 className="my-3 text-lg text-center font-semibold">
                                    {b.title}
                                </h3> */}
                                    <div className=" leading-tight text-sm text-center">
                                        <p>{b.subtitle || b.title}</p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="md:container md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase ">
                        Pourquoi nous choisir
                    </h2>
                    <p className="md:text-center text-lg ">{item?.whyChoose}</p>
                </div>
                <div className="md:container md:p-4 mx-auto my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-xl font-bold text-primary uppercase">
                        Contactez-nous dès maintenant
                    </h2>
                    <p className="md:text-center text-lg ">{item?.contact}</p>
                </div>
                <div className="w-full mt-10 flex justify-center">
                    <Button className="rounded-[45px]">Ajouter à ma selection</Button>
                </div>
            </section>
        </div>
    );
}

export default Solution;
