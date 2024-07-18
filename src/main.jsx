import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aos from 'aos';
import Preambule from './pages/Preambule.jsx';
import Root from './Root.jsx';
import Details from './pages/Details.jsx';
import Solution from './pages/Solution.jsx';
import Produits from './pages/Produits.jsx';
import Formation from './pages/Formation.jsx';
import DetailFormation from './pages/DetailFormation.jsx';
import Apropos from './pages/Apropos.jsx';
import Contacte from './pages/Contacte.jsx';
Aos.init({
   delay: 700, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling d
  
  mirror: false
});
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <App />,
            },
            {
                path: "preambule",
                element: <Preambule />,
            },
            {
                path: "about",
                element: <Apropos />,
            },
            {
                path: "contact",
                element: <Contacte />,
            },
            {
                path: "preambule/:id",
                element: <Details />,
            },
            {
                path: "produits&services/:id",
                element: <Solution />,
            },
            {
                path: "produits&services",
                element: <Produits />,
            },
            {
                path: "formations",
                element: <Formation />,
            },
            {
                path: "formations/:id",
                element: <DetailFormation />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
