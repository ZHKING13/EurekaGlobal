import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link, useParams } from "react-router-dom";
import { preambule } from "../../data";
import { images } from "../assets";
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
                        <div className="md:w-[60%] flex flex-col gap-6 font-bold md:ml-20 text-white">
                            <h1 className=" md:text-3xl text-2xl font-bold ">
                                Solutions pour les{" "}
                                <span className="text-secondary">
                                    {item.title}{" "}
                                </span>{" "}
                            </h1>
                            <p className="text-xl"> {item.desc} </p>
                        </div>
                    </div>
                </section>
                <section className="m-4 md:m-8 ">
                    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                        <h2 className="md:text-xl text-lg font-bold text-primary">
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
                                            className="w-40 h-40 object-contain object-center "
                                            src={avantage.icon}
                                            alt=""
                                        />
                                        <h3 className="my-3  text-xl text-center text-primary font-semibold">
                                            {avantage.title}{" "}
                                        </h3>
                                        <div className="space-y-1 text-center text-lg leading-tight">
                                            <p> {avantage.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="w-full mt-10 flex justify-center">
                        <Button className="rounded-[45px]">
                            <Link to={"/prouits&service/"}>
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
