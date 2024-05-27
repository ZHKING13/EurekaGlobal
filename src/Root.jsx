import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Preambule from "./pages/Preambule.jsx";
import React, { useState } from "react";
import { NavBareMenu } from "./components/NavBare.jsx";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Drawer, Modal, FloatButton } from "antd";
import useStore from "./store/store.js";
import ItemsCard from "./components/ItemsCard.jsx";
import { Button } from "./components/ui/button.jsx";
import DevisForme from "./components/DevisForme.jsx";
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
        <div className=" relative">
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
                className="relative"
            >
                <div className="flex flex-col gap-2  ">
                    {products.length > 0 &&
                        products.map((produit) => {
                            return <ItemsCard item={produit} />;
                        })}
                </div>
                <div className="absolute bottom-5  w-full flex items-center justify-center">
                    <Button onClick={showModal}>Demander un devis </Button>
                </div>
            </Drawer>
            <FloatButton
                badge={{
                    count: products.length,
                    color: "blue",
                }}
                style={{
                    right: 2,
                    bottom: 150,
                    width: 60,
                    height: 60,
                }}
                className="text-2xl"
                onClick={ toggleDrawer}
            />
            <div className="fixed z-50 container  top-2 left-0 right-0">
                <div className="md:container">
                    <NavBareMenu />
                </div>
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
