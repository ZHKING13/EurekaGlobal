import React from "react";
import ProductCard from "../components/ProductCard";
import { productItems } from "../../data";
import CtaSection from "../components/Cta";

function Produits() {
    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(/produit.png)`,
                }}
                className={`bg-[url(/produit.png)] mt-20 bg-no-repeat md:bg-cover object-contain bg-cover bg-center md:h-[70vh]`}
            >
                <div className="h-full w-full flex items-center container bg-primary">
                    <div className="md:w-[60%] flex flex-col gap-6 font-bold md:ml-20 text-white">
                        <div className="flex gap-4">
                            <h1 className=" title font-bold ">
                                Nos Produits  <span className="text-[#00B0F0FF] md:text-3xl text-2xl">
                                & Services{" "}
                            </span>{" "}
                            </h1>
                           
                        </div>
                        <p className="textNormal">
                            {" "}
                            EUREKA GLOBAL vous propose une gamme diversifiée de
                            produits et services conçus pour répondre aux
                            besoins spécifiques de ses clients dans divers
                            secteurs. Découvrez ci-dessous notre sélection de
                            solutions personnalisées{" "}
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex container gap-8 flex-wrap  items-start justify-center my-8">
                {
                    productItems.map((item) => {
                        return <ProductCard item={item} key={item.subtitle} />
                    })
                }
                <CtaSection produit />
            </section>
        </div>
    );
}

export default Produits;
