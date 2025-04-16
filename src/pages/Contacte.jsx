import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { Button } from "../components/ui/button";
import { notification, Space } from "antd";
import { supabase } from "../config/db";
import axios from "axios"; // Import Axios pour Resend

const resendApiKey = import.meta.env.VITE_RESEND_API_KEY; // Récupération de la clé API depuis les variables d'environnement

const sendEmailWithResend = async (values) => {
    try {
        const response = await axios.post(
            "https://api.resend.com/emails",
            {
                from: "contacte@eurekaglobal.site", // Remplacez par votre adresse e-mail
                to: ["sergekota@gmail.com"], // Adresse e-mail du destinataire
                subject: "Nouvelle soumission de formulaire",
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #002267FF;">Nouvelle soumission de formulaire</h2>
                        <p>Bonjour,</p>
                        <p>Vous avez reçu une nouvelle soumission de formulaire avec les détails suivants :</p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Nom :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.fname
                                } ${values.lname}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.email
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Téléphone :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.phone
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Nom de la société :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.societe || "Non spécifié"
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Effectifs :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.effectif
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Type d'entreprise :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.typesociete
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Sujet d'intérêt :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.interest
                                }</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Message :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${
                                    values.message || "Non spécifié"
                                }</td>
                            </tr>
                        </table>
                        <p style="margin-top: 20px;">Cordialement,</p>
                        <p><strong>L'équipe Eureka Global</strong></p>
                    </div>
                `,
            },
            {
                headers: {
                    Authorization: `Bearer ${resendApiKey}`, // Utilisation de la clé API depuis les variables d'environnement
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("E-mail envoyé avec succès :", response.data);
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        throw error;
    }
};

export default function Contacte() {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false); // État pour gérer le loader

    const openNotificationWithIcon = (type, message) => {
        api[type]({
            message: "",
            description: message,
            placement: "top",
        });
    };

    const onFinish = async (values) => {
        console.log(values);

        setLoading(true); // Afficher le loader
        try {
            // Enregistrer les données dans Supabase
            const { data, error } = await supabase
                .from("contacte")
                .insert([values]);

            if (error) {
                if (error.code === "23505") {
                    openNotificationWithIcon(
                        "error",
                        "Un enregistrement similaire existe déjà."
                    );
                } else {
                    openNotificationWithIcon(
                        "error",
                        `Erreur : ${error.message}`
                    );
                }
                throw error;
            }

            // Envoyer les données par e-mail avec Resend
            await sendEmailWithResend(values);

            openNotificationWithIcon(
                "success",
                "Formulaire soumis avec succès !"
            );
            form.resetFields();
        } catch (error) {
            console.error(
                "Erreur lors de la soumission du formulaire : ",
                error
            );
        } finally {
            setLoading(false); // Cacher le loader
        }
    };

    return (
        <div className="container mt-20 mb-2">
            {contextHolder}
            {loading && (
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            )}
            
            <div className="">
                <h1 className="title text-primary font-bold ">
                    Contactez-nous maintenant
                </h1>
                <p>
                    Exprimez vos besoins en remplissant le formulaire
                    ci-dessous. Nous les étudierons attentivement et vous
                    fournirons une réponse rapide.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <div className="md:w-[65%] w-[90%] mb-2">
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            <Form.Item
                                label="Nom"
                                name="fname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir votre nom",
                                    },
                                ]}
                            >
                                <Input placeholder="votre nom" />
                            </Form.Item>
                            <Form.Item
                                label="Prénom"
                                name="lname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir votre prenom",
                                    },
                                ]}
                            >
                                <Input placeholder="votre prenom" />
                            </Form.Item>
                            <Form.Item
                                label="Telephone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez saisir un numero de telephone",
                                    },
                                ]}
                            >
                                <Input placeholder="Ex. (+225) 07 888 999 37" />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Veuillez saisir votre email",
                                    },
                                ]}
                            >
                                <Input placeholder="Ex : info@EurekaGlobal.site" />
                            </Form.Item>
                            <Form.Item
                                label="Nom de votre société"
                                name="societe"
                                rules={[
                                    {
                                        required: false,
                                        message: "Veuillez renseigner ce champ",
                                    },
                                ]}
                            >
                                <Input placeholder="Nom votre entreprise" />
                            </Form.Item>
                            <Form.Item
                                label="Effectifs"
                                name="effectif"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez selectionner une option",
                                    },
                                ]}
                            >
                                <Select placeholder="Taille de vos effectifs">
                                    {employeeCategories.map(
                                        (category, index) => (
                                            <Option
                                                key={index}
                                                value={category}
                                            >
                                                {category}
                                            </Option>
                                        )
                                    )}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Type d'entreprise"
                                name="typesociete"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez selectionner une option",
                                    },
                                ]}
                            >
                                <Select placeholder="Veuillez sélectionner">
                                    {entreprises.map((category, index) => (
                                        <Option key={index} value={category}>
                                            {category}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Quel sujet répond le mieux à vos besoins ?"
                                name="interest"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Veuillez selectionner une option",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Veuillez sélectionner"
                                    allowClear
                                >
                                    {serviceChoice.map((category, index) => (
                                        <Option key={index} value={category}>
                                            {category}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item
                            className="mt-3"
                            label="Comment pouvons-nous vous aider ?"
                            name="message"
                            rules={[
                                {
                                    required: false,
                                    message: "Veuillez saisir votre message",
                                },
                            ]}
                        >
                            <Input.TextArea
                                rows={5}
                                placeholder="Merci de nous communiquer ce sur quoi vous avez besoin d'aide."
                            />
                        </Form.Item>
                        <div className="mt-3">
                            <Button
                                htmlType="submit"
                                className="rounded-[45px] w-40"
                                size="lg"
                                loading={loading.toString()}
                            >
                                Envoyer
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="md:w-[35%] md:pt-12">
                    <img
                        className="h-[420px] w-full object-contain bg-cover"
                        src="/contact.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export const entreprises = [
    "Investisseur",
    "Startup",
    "Très Petite Entreprise (TPE)",
    "Petite et Moyenne Entreprise (PME)",
    "Grande Entreprise",
    "Personnalité Publique",
];
export const employeeCategories = [
    "1 – 9 employés",
    "10 – 49 employés",
    "50 – 249 employés",
    "+ 250 employés",
];
const serviceChoice = [
    "Produits & Services",
    "Formations à la carte",
    "Consultation surmesure",
    "Montage de projets et Recherche de Financements",
    "Autre(s) besoin(s)",
];
