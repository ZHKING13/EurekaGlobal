import React from 'react'
import { Form, Input, Select } from 'antd';
import { Button } from '../components/ui/button';
export default function Contacte() {
  return (
      <div className="container mt-20 mb-2">
          <div className=''>
              <h1 className="title text-primary font-bold ">Contactez-nous</h1>
          <p>Exprimez vos besoins en remplissant le formulaire ci-dessous. 
Nous les étudierons attentivement et vous fournirons une réponse rapide.</p>
          </div>
          <div className='flex flex-col md:flex-row gap-3 w-full'>
              
              <div className='md:w-1/2 w-[90%] mb-2'>
                   <Form
                      layout="vertical"
                      
                  >
                      <div className='mt-8 grid sm:grid-cols-2 gap-3'>
                          <Form.Item
              label="Nom"
              name="fname"
              rules={[
                {
                  required: true,
                  message: 'Veuillez saisir votre nom',
                },
              ]}
            >
              <Input placeholder='votre nom' />
                      </Form.Item>
                       <Form.Item
              label="Prénom"
              name="lname"
              rules={[
                {
                  required: true,
                  message: 'Veuillez saisir votre prenom',
                },
              ]}
            >
              <Input placeholder='votre prenom' />
             </Form.Item>
                       <Form.Item
              label="Telephone"
              name="number"
              rules={[
                {
                  required: true,
                  message: 'Veuillez saisir un numero de telephone',
                },
              ]}
            >
              <Input placeholder='Ex. (+225) 07 888 999 37' />
            </Form.Item>
             <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Veuillez saisir votre email',
                },
              ]}
            >
              <Input placeholder='Ex : info@EurekaGlobal.Co' />
            </Form.Item>
             <Form.Item
              label="Nom de votre société"
              name="societeName"
              rules={[
                {
                  required: false,
                  message: 'Veuillez renseigner ce champ',
                },
              ]}
            >
              <Input placeholder='Nom votre entreprise' />
            </Form.Item>
             <Form.Item
              label="Effectifs"
              name="effectif"
              rules={[
                {
                  required: true,
                  message: 'Veuillez selectionner une option',
                },
              ]}
            >
               <Select
          placeholder="Taille de vos effectifs"
          
        >
            {employeeCategories.map((category, index) => (
        <Option key={index} value={category}>
          {category}
        </Option>
      ))}
        </Select>
            </Form.Item>
             <Form.Item
              label="Type d'entreprise"
              name="typeEntreprise"
              rules={[
                {
                  required: true,
                  message: 'Veuillez selectionner une option',
                },
              ]}
            >
               <Select
          placeholder="Veuillez sélectionner"
          
        >
          {entreprises.map((category, index) => (
        <Option key={index} value={category}>
          {category}
        </Option>
      ))}
        </Select>
            </Form.Item>
             <Form.Item
              label="Quel sujet répond le mieux à vos besoins ?"
              name="service"
              rules={[
                {
                  required: true,
                  message: 'Veuillez selectionner une option',
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
                          className='mt-3'
              label="Comment pouvons-nous vous aider ?"
              name="message"
              rules={[
                {
                  required: false,
                  message: 'Veuillez saisir votre message',
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="Merci de nous communiquer ce sur quoi vous avez besoin d'aide." />
            </Form.Item>
                      <div className='mt-3'>
                          <Button  className="rounded-[45px] w-40 " size="lg">
                     Envoyer
                  </Button>
              </div>
                  
                  </Form>
         </div>
              <div className='md:w-[40%] md:pt-12'>
                  <img className='h-[420px] w-full object-contain bg-cover' src="/contact.png" alt="" />
              </div>
          </div>
          
   </div>
  )
}

export const entreprises = [
  "Investisseur",
  "Startup",
  "Très Petite Entreprise (TPE)",
  "Petite et Moyenne Entreprise (PME)",
  "Grande Entreprise",
  "Personnalité Publique"
];
export const employeeCategories = [
  "1 – 9 employés",
  "10 – 49 employés",
  "50 – 249 employés",
  "+ 250 employés"
];
const serviceChoice = [
  "Produits & Services",
    "Formations à la carte",
  "Consultation surmesure",
  "Autre(s) besoin(s)"
];


