import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteScrol";
import FeedbackCard from "./FeedBack";


function Testimanials() {
  return (
      <div className="flex text-primary flex-wrap items-center" >
          <InfiniteMovingCards direction="right" items={testimonials} />
   </div>
  );
}

const testimonials = [
  {
    quote:
      "Grâce au Module Innovation des formations à la carte proposées par Eureka Global, nos 06 collaborateurs et moi-même avons pu structurer nos activités et affiner notre vision stratégique avec des concepts innovants et des outils pratiques pour innover. Je recommande vivement leurs services pour stimuler l'innovation et maximiser la croissance de toute entreprise.",
    name: "Jean Yves Morio",
    title: "Président de AVI Center",
  },
  {
    quote:
      "Eureka Global a formé 160 acteurs de la société civile ivoirienne en communication digitale 360°, outils bureautiques et collecte de données terrain. Les résultats ont largement dépassé nos attentes. Je recommande vivement leurs services.",
    name: "Christophe Courtin",
    title: " Chef de Projet LIANE 2",
  },
  {
    quote:
      "Eureka Global a dépassé nos attentes à chaque étape. Leur engagement envers notre succès était palpable, et nous avons vu des résultats tangibles.",
    name: "Julie Leclerc",
    title: "Directrice Financière, Leclerc & Fils",
  }
];


export default Testimanials;
