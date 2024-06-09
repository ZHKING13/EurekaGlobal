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
                className={`bg-[url(/produit.png)] mt-15 bg-no-repeat md:bg-cover object-contain bg-cover bg-center md:h-[60vh]`}
            >
                <div className="h-full w-full flex pt-20 md:pt-0 items-center container bg-primary">
                    <div className="md:w-[90%]  flex flex-col gap-6 font-bold md:ml-20 text-white">
                        <div className="flex gap-4">
                            <h1 className=" title  ">
                                Nos Produits  <span className="text-[#00B0F0FF] ">
                                & Services{" "}
                            </span>{" "}
                            </h1>
                           
                        </div>
                        <p className="textNormal">
                            {" "}
                           <span className="font-bold text-secondary">EUREKA</span>{" "}
                  <span className="font-bold">GLOBAL</span> vous offre une gamme diversifiée de produits et services, conçus pour répondre aux attentes spécifiques des entreprises au sein de l'écosystème africain. Découvrez ci-dessous notre sélection de solutions personnalisées, qui garantissent performance, efficacité, croissance et succès.
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
