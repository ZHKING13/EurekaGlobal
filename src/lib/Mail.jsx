import React from 'react';
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

const Devis = ({ formData }) => {
console.log( "DATA",formData)
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>Nouveau formulaire de contact soumis</h2>
      <p><strong>Nom et prenom:</strong> {formData.fullName}</p>
      <p><strong>Téléphone:</strong> {formData.phone}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Effectif:</strong> {formData.effectif}</p>
      <p><strong>Type d'entreprise:</strong> {formData.typeSociete}</p>
      <p><strong>Sujet:</strong> {formData?.interest}</p>
    </div>
  );
};

// const plunk = new Plunk(import.meta.env.VITE_PLUNK_API_KEY);
export const SendMail =async (formData,type) => {
   const data = formData?.interest.map((interest) => {
    return interest.id;
  }).join(',')
  console.log("interestDATA",data)
  // const body = render(type === 'contacte' ? <Contacte formData={formData} /> : <Devis formData={{...formData,interest:data}} />);
try {
//  await plunk.emails.send({
//   to: "zetrey35@gmail.com",
//   subject: "Hello world!",
//   body,
// });

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Assuming the content-type is JSON
    'Authorization': import.meta.env.VITE_PLUNK_API_KEY // Replace with your actual token
  },
  body: JSON.stringify({
    to: 'zetrey35@gmail.com', // Replace with actual recipient email
    subject: 'Demande de devis', // Replace with actual subject
    body: ` <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>Nouveau formulaire de contact soumis</h2>
      <p><strong>Nom et prenom:</strong> {formData.fullName}</p>
      <p><strong>Téléphone:</strong> {formData.phone}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Effectif:</strong> {formData.effectif}</p>
      <p><strong>Type d'entreprise:</strong> {formData.typeSociete}</p>
      <p><strong>Sujet:</strong> {data}</p>
    </div>`,
  })
};

fetch('https://api.useplunk.com/v1/send', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

} catch (error) {
  console.error("Erreur lors de l'envoi du mail : ", error);
  
}
}