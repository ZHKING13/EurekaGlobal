import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Preambule from "./pages/Preambule.jsx";
import React, { useState } from "react";
import { NavBareMenu } from "./components/NavBare.jsx";
import { FileTextOutlined } from "@ant-design/icons";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Drawer, Modal, FloatButton } from "antd";
import useStore from "./store/store.js";
import ItemsCard from "./components/ItemsCard.jsx";
import { Button } from "./components/ui/button.jsx";
import DevisForme from "./components/DevisForme.jsx";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { cn } from "./lib/utils.js";
function Root() {
      const {
          showDrawer,
          toggleDrawer,
          products,
          formations,
          addProduct,
          removeProduct,
          addFormation,
          removeFormation,
    } = useStore();
    const selectItem = [...products, ...formations]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className=" ">
            <div className="fixed z-50 container  top-2 left-0 right-0">
              <div className="md:container">
                  <NavBareMenu />
              </div>
          </div>
            <Modal
                destroyOnClose
                title="Demander un devis"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer=""
            >
                <DevisForme />
            </Modal>
            <Drawer
                onClose={toggleDrawer}
                open={showDrawer}
                width={410}
                closeIcon=""
                className="relative"
            >
                <div className="flex flex-col gap-2  ">
                    {products.length > 0 &&
                        products.map((produit) => {
                            return <ItemsCard item={produit} />;
                        })}
                    {formations.length > 0 &&
                        formations.map((produit) => {
                            return <ItemsCard type="formation" item={produit} />;
                        })}
                </div>
                 <div onClick={toggleDrawer} className={cn("fixed py-2 px-5 flex  text-white z-50 transform -rotate-90  bg-green-600 bottom-[40%] cursor-pointer   right-[347px]",!showDrawer && "hidden")}>
                <FileTextOutlined className="mr-3 text-2xl transform rotate-90  " />
                    <p>Mes selections</p>
                    {/* custome badge */}
                    {
                        (products.length + formations.length) > 0 ? ( <div className={cn("rounded-full w-6 h-6 text-center flex justify-center items-center p-1 fixed top-[-10px] left-[-10px] bg-blue-700 transform rotate-90", )}>
                        {products.length + formations.length}
                    </div>) : (<div className="hidden"></div>)
                   }
            </div>
                {
                    (products.length + formations.length) > 0 ? (
                        <div className="absolute bottom-5  w-full flex items-center justify-center">
                            <Button onClick={showModal}>Demander un devis </Button>
                        </div>
                    ) : null
               }
            </Drawer>
           
            <div className="fixed  flex gap-2  text-white z-50 transform rotate-90  top-[24%] cursor-pointer  right-[-69px]">
                <a target="_blank" href="https://twitter.com/EurekaGlobal_" className="p-1 bg-blue-600   rounded-sm">
                    <FaTwitter  className="text-2xl transform -rotate-90 text-white  " />
                </a>
                <a target="_blank" href="https://www.facebook.com/GroupEurekaGlobal" className="p-1 bg-blue-900   rounded-sm">
                    <FaFacebook  className="text-2xl transform -rotate-90 text-white  " />
                </a>
                <a target="_blank"  href="https://www.linkedin.com/in/groupeurekaglobal/" className="p-1 bg-blue-700   rounded-sm">
                    <FaLinkedin  className="text-2xl transform -rotate-90 text-white  " />
                </a>
                <a target="_blank" href="https://whatsapp.com/channel/0029VaOkaQA42Dcodh6x3v0p" className="p-1 bg-green-600   rounded-sm">
                    <FaWhatsapp  className="text-2xl transform -rotate-90 text-white  " />
                </a>
                <a target="_blank" href="mailto:info@EurekaGlobal.co" className="p-1 bg-primary  rounded-sm">
                    <CiMail  className="text-2xl transform -rotate-90 text-white  " />
                </a>
            </div>
            <div onClick={toggleDrawer} className={cn("fixed py-2 px-5 flex  text-white z-50 transform -rotate-90  bg-green-600 bottom-[35%] cursor-pointer   right-[-65px]")}>
                <FileTextOutlined className="mr-3 text-2xl transform rotate-90  " />
                <p>Mes selections</p>
               {
                        (products.length + formations.length) > 0 ? ( <div className={cn("rounded-full w-6 h-6 text-center flex justify-center items-center p-1 fixed top-[-10px] left-[-10px] bg-blue-700 transform rotate-90", )}>
                        {products.length + formations.length}
                    </div>) : (<div className="hidden"></div>)
                   }
            </div>
            
            <ScrollToTop />


            <Outlet />

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Root;
