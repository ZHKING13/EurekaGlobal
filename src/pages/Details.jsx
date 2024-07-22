import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link, useParams } from "react-router-dom";
import { preambule } from "../../data";
import { images } from "../assets";
import useStore from "../store/store";
import { replaceTextWithLogo } from "./Solution";

const logo = <>
<span className='font-bold text-secondary'>EUREKA</span> <span className='font-bold text-white'>GLOBAL</span></>
const replaceWithLogo = (text) => {
    if (!text) return null;
    const parts = text.split("EUREKA GLOBAL");
    return parts.map((part, index) => (
        <span key={index}>
            {part} 
            {index < parts.length - 1 && logo}
        </span>
    ));
}
function Details() {
    const [item, setItem] = useState({});
    
    const bg = "../public/tpeBg.png";
    let { id } = useParams();
    console.log("valeur id::" + id);
    const getElementById = (id) => {
        preambule.forEach((element) => {
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
        item && (
            <div>
                <section
                    style={{
                        backgroundImage: `url(${item.bgImg})`,
                    }}
                    className={`bg-[url(${item.bgImg})] mt-20 bg-no-repeat md:bg-cover object-contain bg-cover bg-center md:h-[90vh]`}
                >
                    <div className="h-full w-full flex items-center container bg-[#0022678F]">
                        <div className="md:w-[85%] flex flex-col gap-6 font-bold md:ml-20 text-white">
                            <h1 className=" title text-white font-bold ">
                                Solutions pour les{" "}
                                <span className="text-secondary">
                                    {item.title}{" "}
                                </span>{" "}
                            </h1>
                            <p className="textNormal"> {replaceWithLogo(item.desc)} </p>
                        </div>
                    </div>
                </section>
                <section className="m-4 md:m-8 ">
                    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                        <h2 className=" heading text-primary">
                            AVANTAGES DE NOS SOLUTIONS
                        </h2>
                    </div>
                    <div className="container mx-auto grid justify-center items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {item.avantage &&
                            item.avantage.map((avantage, index) => {
                                return (
                                    <div
                                        key={index}
                                        data-aos="zoom-out"
                                        className="flex flex-col justify-start items-center p-4"
                                    >
                                        <img
                                            className="w-[150px] h-[150px] object-contain object-center "
                                            src={avantage.icon}
                                            alt=""
                                        />
                                        <h3 className="my-3  text-lg text-center text-primary font-semibold">
                                            {avantage.title}{" "}
                                        </h3>
                                        <div className="space-y-1 text-center text-base leading-tight">
                                            <p> {avantage.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="w-full mt-10 flex justify-center">
                        <Button className="rounded-[45px]">
                            <Link to={"/produits&services/"}>
                                Parcourir Nos Catalogues
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        )
    );
}

export default Details;
