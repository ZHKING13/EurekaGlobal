import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Preambule from "./pages/Preambule.jsx";
import React from 'react'
import { NavBareMenu } from "./components/NavBare.jsx";
import Footer from "./components/Footer.jsx";

function Root() {
  return (
      <div className=' relative'>
          <div className='fixed z-50  top-2 left-0 right-0'>
        <NavBareMenu/>
          </div>
          <Outlet/>
          <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Root