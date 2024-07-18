import React from "react";
import useStore from "../store/store";
import { IoContractSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
function ItemsCard({ item,type }) {
     const {
        
         removeProduct,
         removeFormation
        
    } = useStore();
    const handleRemove = (id) => {
        if (type === "formation") {
            removeFormation(id);
        } else {
            removeProduct(id);
        
        }
    }
    const titleAndSubtitle = `${item.title} ${item.subtitle || ""}`;
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
                    handleRemove(item.id);
                }}
                className="absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer"
            >
                <FaTrashCan color="red" />
            </div>
        </div>
    );
}

export default ItemsCard;
