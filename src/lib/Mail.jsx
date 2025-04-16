import axios from 'axios';
import React from 'react';
const resendApiKey = import.meta.env.VITE_RESEND_API_KEY; // Récupération de la clé API depuis les variables d'environnement

// import Plunk from "@plunk/node";
// import { render } from "jsx-email";
const Contacte = ({ formData }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>Nouveau formulaire de contact soumis</h2>
      <p><strong>Nom:</strong> {formData.fname}</p>
      <p><strong>Prénom:</strong> {formData.lname}</p>
      <p><strong>Téléphone:</strong> {formData.phone}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Société:</strong> {formData.societe}</p>
      <p><strong>Effectif:</strong> {formData.effectif}</p>
      <p><strong>Type d'entreprise:</strong> {formData.typeSociete}</p>
      <p><strong>Sujet:</strong> {formData.interest}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
};



// const plunk = new Plunk(import.meta.env.VITE_PLUNK_API_KEY);
export const SendMail =async (values) => {
   const interest = values?.interest.map((interest) => {
    return interest.id;
  }).join(',')
  console.log("interestDATA",interest)
  try {
      const response = await axios.post(
          "https://api.resend.com/emails",
          {
              from: "devis@eurekaglobal.site", // Remplacez par votre adresse e-mail
              to: ["info@EurekaGlobal.site", "sergekota@gmail.com"], // Adresse e-mail du destinataire
              subject: "Demande de devis",
              html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #002267FF;">Nouvelle demande de devis</h2>
                        <p>Bonjour,</p>
                        <p>Vous avez reçu une nouvelle demande de devis avec les détails suivants :</p>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Nom :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${values.fname}
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${values.email}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Téléphone :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${values.phone}</td>
                            </tr>
                           
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Effectifs :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${values.effectif}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Type d'entreprise :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${values.societe}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Sujet d'intérêt :</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">${interest}</td>
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
      
  }
}