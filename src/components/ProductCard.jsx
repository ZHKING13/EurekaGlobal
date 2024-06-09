import React from "react";
import { Link } from "react-router-dom";
import { replaceTextWithLogo } from "../pages/Solution";
const ProductCard = ({ item }) => {
    return (
        <div className="max-w-[310px] bg-white border border-gray-200 rounded-lg p-3 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <div className="flex flex-wrap gap-1">
                    <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-primary ">
                        {item?.title}{" "}
                        <span className=" text-secondary ">
                            {item?.subtitle}
                        </span>
                    </h5>
                </div>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                   {replaceTextWithLogo(item.desc)}
                </p>
                <div className="w-full flex items-end justify-end">
                    <Link
                        to={`/prouits&service/${item.id}`}
                        className="inline-flex text-right items-center  hover:text-white duration-300 px-3 py-2 text-sm font-medium  text-primary/90 rounded-lg hover:bg-primary  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            <a href="#">
                <img className="rounded-t-lg" src={item.img} alt="" />
            </a>
        </div>
    );
};

export default ProductCard;
