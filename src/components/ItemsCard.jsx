import React from "react";
import useStore from "../store/store";

function ItemsCard({ item }) {
     const {
        
         removeProduct,
        
     } = useStore();
    const titleAndSubtitle = `${item.title} ${item.subtitle}`;
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };
    return (
        <div className="py-2 px-2 md:max-w-[90%] relative  bg-white rounded-xl shadow-lg  flex  ">
            {/* <img
                className="block  h-14 rounded-sm sm:mx-0 sm:shrink-0"
                src={item.img}
                alt="image"
            /> */}
            <div className=" ml-1 ">
                <div className="">
                    <p className="text-black pr-1 pt-2 uppercase   text-[14px]">
                        {truncateText(titleAndSubtitle, 235)}
                        {}
                    </p>
                </div>
            </div>
            <div
                onClick={() => {
                    removeProduct(item.id);
                }}
                className="absolute -top-1 right-1 cursor-pointer"
            >
                X
            </div>
        </div>
    );
}

export default ItemsCard;
