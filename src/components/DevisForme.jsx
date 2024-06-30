import React from "react";
import { Checkbox, Form, Input, Select } from "antd";
import { Button } from "./ui/button";
export default function DevisForme() {
    const categories = [
        { id: 1, name: "Investisseur" },
        { id: 2, name: "Startup" },
        { id: 3, name: "Très Petite Entreprise (TPE)" },
        { id: 4, name: "Petite et Moyenne Entreprise (PME)" },
        { id: 5, name: "Grande Entreprise" },
        { id: 6, name: "Personnalité Publique" },
    ];
    return (
        <div className="mx-auto w-full">
           <form action="#">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom et prenom  <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="nom"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
           
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Numéro  <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="number"
            id="number"
             minLength={8}
             
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type d'entreprise  <span className="text-red-600">*</span>
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option defaultValue>Choisir une option </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
                    </div>
                    {/* DESCRIPTION */}
        {/* <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter event description here"
          ></textarea>
        </div> */}
        <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 ">
        
          <button
            type="button"
            data-drawer-dismiss="drawer-create-product-default"
            aria-controls="drawer-create-product-default"
            className="inline-flex w-full justify-center text-primary items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 -ml-1 sm:mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Annuler
             </button>
          <button
            type="submit"
            className="text-white w-full justify-center hover:bg-secondary bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
        </div>
    );
}
