import React from "react";
import { Link } from "react-router-dom";
import { replaceTextWithLogo } from "../pages/Solution";
import { cn } from "../lib/utils";
const FormationCard = ({ item, index }) => {
    return (
        <div
            className={cn(
                "max-w-[300px] hover:shadow-custom bg-white border border-[#002267FF] rounded-lg p-3  ",
                { "-mt-8 mb-10": index == 2 },
                { "-mt-8 mb-10": index == 5 },
                { "-mt-8 mb-10": index == 8 },
            )}
        >
            <a className="flex items-center justify-center">
                <img className="rounded-t-lg" src={item.img} alt="" />
            </a>
            <div className="p-1">
                <div className="flex text-center  ">
                    <h2 className="mb-2 text-[16px] font-bold uppercase tracking-tight text-primary ">
                        Module {"  "}
                        {"  "}
                        <span className=" text-secondary text-center ">
                            {item?.name}
                        </span>
                    </h2>
                </div>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                    {replaceTextWithLogo(item.desc)}
                </p>
                <div className="w-full flex items-end justify-center">
                    <Link
                        to={`/formations/${item.id}`}
                        className="inline-flex text-right items-center px-3 py-2 text-sm font-medium  text-primary/90 rounded-lg bg-primary text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Découvrir
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormationCard;
