import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { productItems, produits } from "../../data";
import { Link, useParams } from "react-router-dom";
import { cn } from "../lib/utils";
import { logo } from "./Preambule";
import useStore from "../store/store";

export const replaceTextWithLogo = (text) => {
    if (!text) return null;
    const parts = text.split("EUREKA GLOBAL");
    return parts.map((part, index) => (
        <span key={index}>
            {part}
            {index < parts.length - 1 && logo}
        </span>
    ));
};
function Solution() {
    const [item, setItem] = useState({});
    const [product, setProduct] = useState({});
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
        productItems.forEach((element) => {
            if (element.id === id) {
                setProduct(element);
                console.log(element);
            }
        });
    };
    const getElementById = (id) => {
        produits.forEach((element) => {
            if (element.id === id) {
                setItem(element);
                console.log(element);
            }
        });
    };
    const handleAddProduct = () => {
        if (item) {
            addProduct(product);
            console.log("produis", products);
            toggleDrawer()
        }
    };
    useEffect(() => {
        getElementById(id);
        getProductByid(id);
    }, [id]);
    return (
        <div className="container">
            <section className=" mt-20 flex md:flex-row flex-col ">
                <div className="flex justify-between w-full md:flex-row flex-col items-center gap-10">
                    <div className="md:w-[50%] md:container md:mt-10 pt-8 flex items-start flex-col gap-5 w-full">
                        <div>
                            <h2 className=" text-lg font-bold text-primary">
                                {item?.title}
                            </h2>
                            <img
                                className="mt-4 object-cover"
                                src="/rounded.png"
                                alt=""
                            />
                        </div>
                        <p className="text-base">{item?.description}</p>
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
            <section className=" dark:bg-gray-100 flex flex-col items-center gap-4">
                <div className="  mx-auto flex flex-col items-center my-6 space-y-1 md:text-center">
                    <h2 className="pb-3 text-lg font-bold text-primary uppercase ">
                        L'IMPORTANCE de notre solution
                    </h2>
                    <p className=" md:w-[75%] text-base ">
                        {replaceTextWithLogo(item?.importance)}
                    </p>
                </div>
                <div className="  mx-auto  space-y-1 md:text-center">
                    <h2 className="pb-3 text-lg font-bold text-primary uppercase ">
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
                                        {
                                            " md:border-r-2":
                                                item?.approach.length > 3 &&
                                                index == 2,
                                        },
                                        {
                                            " md:border-r-2":
                                                item?.approach.length > 4 &&
                                                index == 3,
                                        }
                                    )}
                                >
                                    <img
                                        src={a.img || "/icon.png"}
                                        alt="check"
                                        className="w-[75px] h-[75px]"
                                    />
                                    <h3 className="my-3 text-lg leading-tight text-center text-secondary font-semibold">
                                        {a?.title}
                                    </h3>
                                    <div className=" leading-tight text-center">
                                        <p className="text-base text-center">
                                            {a?.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="md:container md:p-4 mx-auto space-y-1 md:text-center">
                    <h2 className="pb-3  text-lg leading-tight font-bold text-primary uppercase ">
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
                                        className="w-[50px] h-[50px] rounded-xl object-contain"
                                    />
                                    {/* <h3 className="my-3 text-lg text-center font-semibold">
                                    {b.title}
                                </h3> */}
                                    <div className=" leading-tight text-base text-center">
                                        <p>{b.title || b.subtitle || b}</p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="md:container flex flex-col items-center md:p-4 mx-auto  space-y-1 md:text-center">
                    <h2 className="pb-3 text-lg font-bold text-primary uppercase ">
                        Pourquoi nous choisir
                    </h2>
                    <p className="md:text-center md:w-[75%] text-base ">
                        {replaceTextWithLogo(item?.whyChoose)}
                    </p>
                </div>
                <div className="  flex flex-col items-center mx-auto  space-y-1 md:text-center">
                    <h2 className="pb-3 text-lg font-bold text-primary uppercase">
                        Contactez-nous dès maintenant
                    </h2>
                    <p className="md:text-center md:w-[75%] text-normal text-base ">
                        {replaceTextWithLogo(item?.contact)}
                    </p>
                </div>
                <div className="w-full mt-6 mb-5 flex justify-center">
                    <Button
                        onClick={handleAddProduct}
                        className="rounded-[45px]"
                    >
                        Ajouter à ma selection
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Solution;
