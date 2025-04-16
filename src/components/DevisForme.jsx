import React, { useState } from "react";
import { employeeCategories } from "../pages/Contacte";
import { supabase } from "../config/db";
import { Button, notification, Space } from "antd";
import useStore from "../store/store";
import { SendMail } from "../lib/Mail";

export default function DevisForme({ handleCancel }) {
    const { showDrawer, toggleDrawer, products, formations, resetAll } =
        useStore();
    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        phone: "",
        societe: "",
        effectif: "",
    });

    const [loading, setLoading] = useState(false); // Ajout d'un loader pour améliorer l'UX

    const categories = [
        { id: 1, name: "Investisseur" },
        { id: 2, name: "Startup" },
        { id: 3, name: "Très Petite Entreprise (TPE)" },
        { id: 4, name: "Petite et Moyenne Entreprise (PME)" },
        { id: 5, name: "Grande Entreprise" },
        { id: 6, name: "Personnalité Publique" },
    ];

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, message) => {
        api[type]({
            message: "",
            description: message,
            placement: "top",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation simple des champs
        if (
            !formData.fname ||
            !formData.email ||
            !formData.phone ||
            !formData.societe ||
            !formData.effectif
        ) {
            openNotificationWithIcon(
                "warning",
                "Veuillez remplir tous les champs requis."
            );
            return;
        }

        if (formData.phone.length < 8) {
            openNotificationWithIcon(
                "warning",
                "Le numéro doit contenir au moins 8 caractères."
            );
            return;
        }

        setLoading(true); // Afficher le loader

        try {
            const { data, error } = await supabase
                .from("contacte")
                .insert([formData]);

            if (error) {
                throw error;
            }
           
            const body = {
                ...formData,
                interest: [...formations, ...products],
            };
            await SendMail(body); // Envoi des informations par e-mail
            setFormData({
                fname: "",
                email: "",
                phone: "",
                societe: "",
                effectif: "",
            });
            handleCancel();
            resetAll();
        } catch (error) {
            console.error(
                "Erreur lors de la soumission du formulaire : ",
                error
            );
            openNotificationWithIcon(
                "error",
                "Une erreur s'est produite lors de la soumission du formulaire."
            );
        } finally {
           openNotificationWithIcon(
               "success",
               "Formulaire soumis avec succès !"
           );
            setLoading(false); // Cacher le loader
        }
    };

    return (
        <div className="mx-auto w-full">
            {contextHolder}
            {loading && (
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            )}{" "}
            {/* Affichage du loader */}
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="fname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nom et prenom{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            name="fname"
                            id="nom"
                            value={formData.fname}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Numéro <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="number"
                            value={formData.phone}
                            onChange={handleChange}
                            minLength={8}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="societe"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Type d'entreprise{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <select
                            name="societe"
                            id="category"
                            value={formData.societe}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        >
                            <option value="">Choisir une option</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="effectif"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Effectifs <span className="text-red-600">*</span>
                        </label>
                        <select
                            name="effectif"
                            id="employeeCategory"
                            value={formData.effectif}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                        >
                            <option value="">Choisir une option</option>
                            {employeeCategories.map((category, id) => (
                                <option key={id} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 ">
                        <button
                            type="button"
                            onClick={handleCancel}
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
